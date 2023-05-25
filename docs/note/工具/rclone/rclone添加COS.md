# rclone添加COS

进入rclone的配置模式

```bash
# rclone config
```

输入`n` 创建新的remote

```bash
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q>n
```

输入要设置的远程名字

```bash
Enter name for new remote.
name> cos
```

选择远程文件系统，这里选择cos所兼容的S3，即对象存储服务

```bash
Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
 1 / 1Fichier
   \ (fichier)
 2 / Akamai NetStorage
   \ (netstorage)
 3 / Alias for an existing remote
   \ (alias)
 4 / Amazon Drive
   \ (amazon cloud drive)
 5 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, Ceph, China Mobile, Cloudflare, ArvanCloud, Digital Ocean, Dreamhost, Huawei OBS, IBM COS, IDrive e2, Lyve Cloud, Minio, Netease, RackCorp, Scaleway, SeaweedFS, StackPath, Storj, Tencent COS and Wasabi
   \ (s3)
 ...
Storage> s3
```

选择服务提供商，即实际使用的服务

```bash
Option provider.
Choose your S3 provider.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Amazon Web Services (AWS) S3
   \ (AWS)
 2 / Alibaba Cloud Object Storage System (OSS) formerly Aliyun
   \ (Alibaba)
20 / Tencent Cloud Object Storage (COS)
   \ (TencentCOS)
21 / Wasabi Object Storage
   \ (Wasabi)
22 / Any other S3 compatible provider
   \ (Other)

provider> TencentCOS

```

选择是否从机器的环境变量中获取aksk，这里未使用EC2/ECS\&S3的方式，所以选择false，在后续步骤中进行输入

```bash
Option env_auth.
Get AWS credentials from runtime (environment variables or EC2/ECS meta data if no env vars).
Only applies if access_key_id and secret_access_key is blank.
Choose a number from below, or type in your own boolean value (true or false).
Press Enter for the default (false).
 1 / Enter AWS credentials in the next step.
   \ (false)
 2 / Get AWS credentials from the environment (env vars or IAM).
   \ (true)

env_auth> 1

```

输入aksk信息

```bash
Option access_key_id.
AWS Access Key ID.
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
access_key_id> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Option secret_access_key.
AWS Secret Access Key (password).
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
secret_access_key> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

选择可用区

```bash
Option endpoint.
Endpoint for Tencent COS API.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Beijing Region
   \ (cos.ap-beijing.myqcloud.com)
 2 / Nanjing Region
   \ (cos.ap-nanjing.myqcloud.com)
 3 / Shanghai Region
   \ (cos.ap-shanghai.myqcloud.com)
...
endpoint> 1
```

选择访问权限,没看懂有啥区别，发现了在写

```bash
Option acl.
Canned ACL used when creating buckets and storing or copying objects.
This ACL is used for creating objects and if bucket_acl isn't set, for creating buckets too.
For more info visit https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
Note that this ACL is applied when server-side copying objects as S3
doesn't copy the ACL from the source but rather writes a fresh one.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
   / Owner gets Full_CONTROL.
 1 | No one else has access rights (default).
   \ (default)
   / Owner gets FULL_CONTROL.
 2 | The AllUsers group gets READ access.
   \ (public-read)
   / Owner gets FULL_CONTROL.
 3 | The AllUsers group gets READ and WRITE access.
   | Granting this on a bucket is generally not recommended.
   \ (public-read-write)
   / Owner gets FULL_CONTROL.
 4 | The AuthenticatedUsers group gets READ access.
   \ (authenticated-read)
   / Object owner gets FULL_CONTROL.
 5 | Bucket owner gets READ access.
   | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-read)
   / Both the object owner and the bucket owner get FULL_CONTROL over the object.
 6 | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-full-control)
acl> 5
```

这个默认

```bash
Option storage_class.
The storage class to use when storing new objects in Tencent COS.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Default
   \ ()
 2 / Standard storage class
   \ (STANDARD)
 3 / Archive storage mode
   \ (ARCHIVE)
 4 / Infrequent access storage mode
   \ (STANDARD_IA)
storage_class>
```

确认信息

```bash
Edit advanced config?
y) Yes
n) No (default)
y/n> n

Configuration complete.
Options:
- type: s3
- provider: TencentCOS
- access_key_id: xxxxxxxxxxxxxxxxxxxxxxxxx
- secret_access_key: xxxxxxxxxxxxxxxxxxxxxxxx
- endpoint: cos.ap-beijing.myqcloud.com
- acl: bucket-owner-read
Keep this "cos" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

最终效果

```bash
Current remotes:

Name                 Type
====                 ====
cos                  s3

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q>
```
