# 在Spring Boot中配置ssl证书实现https

在实际项目开发过程中，使用 http 是不安全的，所以很多时候我们要用到 https。https 是以安全为目标的 http 通道，而 https 的安全基础是 SSL。

我在使用 SSL 的过程中，使用了实际的证书，踩了一些坑，鉴于网上的很多教程的ssl 都是使用的 java 自带的 keytool 命令来生成的，但是对实际证书的使用方法涉及的并不多，所以将我使用过程中的一些步骤记录下来，一是让自己记住，其次希望可以给大家在实际过程中有一些启发。

# 申请 SSL 证书

## 前提

- 我申请的是阿里云的 SSL 证书。
- 如果你要申请 SSL 证书，需要有一个已经备案过的域名

# 在 Spring Boot 项目中使用 https

## 前提

- 建立一个 Spring Boot 项目
- 已经完成了上一步

## 步骤

- 在阿里云中的证书列表，下载颁发给你的证书
- 我们可以使用 p12 和 jks 两种格式的证书来实现使用 https 的目的，下面分别进行介绍

### jks

- 把刚刚下载的文件中的 Tomcat 文件夹中的jks文件复制到 spring boot 项目中的 src/main/resources/ 目录下，和 application.properties 平级

- 并且在 application.properties 中配置如下命令

  ```undefined
  server.port: 8092
  server.ssl.key-store= classpath:server.jks
  server.ssl.key-store-password=你的密码
  server.ssl.keyStoreType = JKS
  ```

1. key-store: 生成的证书文件的存储路径,其中 server.jks 需要改为你刚刚复制进来的jks文件名
2. key-store-password: 指定签名的密码，打开下载文件中 Tomcat 文件夹中的 txt 文件，即为此处填写的密码
3. keyStoreType:为制定秘钥仓库的类型，这里我们需要填写为 JKS

### p12

- 打开你的远程服务端，新建一个文件夹，并且把刚刚下载的文件中的 Nginx 文件夹中的 crt 文件和 key 文件复制到此文件夹中

- 输出命令

  ```css
  openssl pkcs12 -export -clcerts -in yourDomain.crt -inkey myPrivateKey.key -out server.p12 
  ```

1. yourDomain.crt 替换为你的 crt 文件
2. myPrivateKey.key 替换为你的 key 文件
3. 在此过程中需要让你输入密码，记住这个密码，后面会用到
4. 执行此命令，生成了我们需要的 p12 文件，将其复制到 spring boot 项目中的 src/main/resources/ 目录下，和 application.properties 平级
5. 并且在 application.properties 中配置如下命令

```css
server.port: 8092
server.ssl.key-store: classpath:server.p12
server.ssl.key-store-password: 刚刚设置的密码
server.ssl.keyStoreType: PKCS12
server.ssl.keyAlias: 
```

1. key-store: 生成的证书文件的存储路径,其中 server.p12 需要改为你生成的 p12 文件的名字
2. key-store-password: 指定签名的密码，要设置成刚刚你设置的密码
3. keyStoreType:为制定秘钥仓库的类型，这里我们需要填写为 PKCS12
4. keyAlias: 为别名

注：如果不知道别名，可以在服务器中输入

```cpp
keytool -list -keystore server.p12
```

### 扩展：同时只用 http 并将 http 自动转向 https

在入口类中添加相应的转向Bean，代码如下：

```java
@Bean
    public EmbeddedServletContainerFactory servletContainer() {
        TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory() {
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint constraint = new SecurityConstraint();
                constraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection = new SecurityCollection();
                collection.addPattern("/*");
                constraint.addCollection(collection);
                context.addConstraint(constraint);
            }
        };
        tomcat.addAdditionalTomcatConnectors(httpConnector());
        return tomcat;
    }

    @Bean
    public Connector httpConnector() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        //Connector监听的http的端口号
        connector.setPort(8080);
        connector.setSecure(false);
        //监听到http的端口号后转向到的https的端口号
        connector.setRedirectPort(8092);
        return connector;
    }
```

通过这段配置，访问`http://localhost:8080`的时候系统会自动重定向到`https://localhost:8092`这个地址上。