# 安装MySQL5.7

sudo dnf remove @mysql

sudo dnf module reset mysql && sudo dnf module disable mysql

sudo vim /etc/yum.repos.d/mysql-community.repo

[mysql57-community]

name=MySQL 5.7 Community Server

baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/

enabled=1

gpgcheck=0

[mysql-connectors-community]

name=MySQL Connectors Community

baseurl=http://repo.mysql.com/yum/mysql-connectors-community/el/7/$basearch/

enabled=1

gpgcheck=0

[mysql-tools-community]

name=MySQL Tools Community

baseurl=http://repo.mysql.com/yum/mysql-tools-community/el/7/$basearch/

enabled=1

gpgcheck=0

sudo dnf --enablerepo=mysql57-community install mysql-community-server

yum repolist enabled | grep "mysql.*-community.*"



启动 MySQL：systemctl start mysqld

设置允许开机自启：systemctl enable mysqld

systemctl daemon-reload

获取安装随机密码：grep 'temporary password' /var/log/mysqld.log

修改MySQL的密码：ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';

设置MySQL通过IP访问：

use mysql;

UPDATE user SET Host='%' WHERE User='root';

flush privileges;

vim /etc/my.cnf

进入文件后添加下面的配置即可



[mysqld]

character-set-server=utf8

[client]

default-character-set=utf8

[mysql]
default-character-set=utf8



重启 MySQL服务：systemctl restart mysqld

mysql -uroot -p

show variables like 'character%';