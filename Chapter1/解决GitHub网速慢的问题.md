# 解决GitHub网速慢的问题

## 1、使用代理的方法加快访问，下载的速度

使用Shadowsocks代理，默认代理端口为1080，配置好代理之后去终端输入git配置命令，命令如下：

```csharp
git config --global http.proxy socks5://127.0.0.1:1080
```

上面的命令是给git设置全局代理，但是我们并不希望国内git库也走代理，而是只需要github上的代码库走代理，命令如下：

```csharp
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
```

如此就从根本上解决了问题。

## 2、取消代理

如果要恢复/移除上面设置的git代理，使用如下命令：

```php
git config --global --unset http.proxy
git config --global --unset http.https://github.com.proxy
```