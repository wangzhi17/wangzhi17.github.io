## Linux/Mac/Windows-刷新DNS的方法

1、Linux

在Linux一般是使用nscd来缓存DNS解析，如果是sysv管理服务，可以找到 /etc/init.d/nscd这个控制脚本，重启以下就可以了。

/etc/init.d/nscd restart

如果是systemd管理服务：systemctl restart nscd

2、macOS

在命令行窗口（terminal）输入：lookupd -flushcache

命令执行完毕，DNS缓存就得到了更新。

较新的苹果Mac OS X系统应该使用下面的命令：type dscacheutil -flushcache

最新的 OS X Mountain Lion or Lion 上刷新DNS ：sudo killall -HUP mDNSResponder

3、Windows

如果windows Vista之前直接在cmd-终端-输入：ipconfig /flushdns

在Vista之后就需要有管理员权限，以管理员身份运行cmd，然后在输入：ipconfig /flushdns