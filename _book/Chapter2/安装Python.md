# 安装python3.6

yum install -y zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make

tar -zxvf Python-3.6.11.tgz

cd Python-3.6.11

./configure && make &&make install

## 设置pip3国内镜像源

pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/