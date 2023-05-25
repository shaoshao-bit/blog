# 挂载rclone到本地（linux）

rclone 挂载依赖于 fuse，需要先安装好

查看已经挂载的系统

```bash
# rclone listremotes
cos:
```

创建用于挂载的空目录

```bash
# mkdir /cos

```

挂载

```bash
rclone mount cos:test-1258252302 /cos --allow-other\
 --attr-timeout 5m --vfs-cache-mode full --vfs-cache-max-age 24h\
 --vfs-cache-max-size 10G --vfs-read-chunk-size-limit 100M\
 --buffer-size 100M --daemon
```

*   rclone mount：rclone 挂载命令

*   cos:test-1258252302：cos为添加的远程服务名；test-1258252302为bucket名

*   /cos：为本地要挂载的目录名

*   \--allow-other：允许非当前 rclone 用户外其它用户进行访问

*   \--attr-timeout 5m：文件属性缓存，（大小，修改时间等）的时间。如果 VPS 配置比较低，建议适当提高这个值，避免过多内核交互，降低资源占用。

*   \-vfs-cache-mode full：开启 VFS 文件缓存，可减少 rclone 与 API 交互，同时可提高文件读写效率

*   \--vfs-cache-max-age 24h：VFS 文件缓存时间，这里设置 24 小时，如果文件很少更改，建议设置更长时间

*   \--vfs-cache-max-size 10G：VFS文件缓存上限大小，建议不超过当前空余磁盘的50%

*   vfs-read-chunk-size-limit 100M：分块读取大小，这里设置的是100M，可提高文件读的效率，比如1G的文件，大致分为10个块进行读取，但与此同时API请求次数也会增多

*   \--buffer-size 100M：内存缓存，如果您内存比较小，可降低此值，如果内存比较大，可适当提高

*   \--daemon：指后台方式运行
