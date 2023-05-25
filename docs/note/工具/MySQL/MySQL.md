# MySQL

# MySQL

## **Mysql基础操作Mysql**

1、数据库操作

进入命令行：`mysql -uroot -p123456`

查看数据库：`show databases;`

查看数据库创建语句：`show create database test;`

创建数据库：`create database test charset utf8mb4;`

选择数据库：`use test;`

删除数据库：`drop database test;`

备份指定数据库：`mysqldump -uroot -p test >test.sql`

注：由于mysql5.6版本不支持在命令行界面输入密码，所以暂不输入密码，回车后输入密码即可。

备份所有数据库：`mysqldump -uroot -p -A >test.sql`

恢复指定数据库：`mysql -uroot -p test<test.sql`

恢复所有数据库：`mysql -uroot -p -A <test.sql`

2、表操作：

表约束:

自增：`aotu_increment`

主键：`primary key`

非空：`not null`

默认值：`default 'xx'`

唯一：`unique`

指定字符集：`charset utf8mb4`

查看表：

查看表：`show tables;`

查看创建表语句：`show create table user;`

查看表结构：`desc user;`

创建表：

```text
create table user(
         id int auto_increment primary key,  #ID自增并设置为主键
         name varchar(10) not null,          #姓名不允许为空
         sex varchar(5) default 1,           #性别默认1
         phone bigint not null unique,       #电话不允许为空并且唯一
         create_time datetime default now(), #创建时间默认当前时间
         addr varchar(50)
     );
```

删除表：

```text
删除表：drop table user;
 　　修改表：
 　　　　修改表名称：alter table user rename user1;
 　　　　修改字段类型并重命名：alter table user change name names varchar(15);
 　　　　修改字段类型：alter table user modify name varchar(15);
 　　　　在指定位置新增字段：alter table user add password varchar(20) not null after name;
```

3、数据操作

增加数据：

表中新增数据：`insert into user values('','张三','男','1234567890',NOW(),'北京市海淀区');`

表中指定字段添加数据：`insert into user(name,phone,create_time) values('张三','12348567890',NOW());`

注：如果字段设置非空，则必须添加

```text
删除数据：
 　　　　删除表中数据：delete from user;
 注：自增长ID不会清空，还会从原有的ID开始继续增长
 　　　　清空表：truncate user;
 　　　　删除表中指定的数据：delete from user where id=1;
 　　更改数据：
 　　　　更改表中所有数据：update user set sex='男';
 　　　　更改表中指定数据：update user set sex='男' where name='张三';
 　　　　更改表中多个字段：update user set sex='男',addr='北京市朝阳区' where name='张三';
 　　　　在原有数据基础上更改：update user set phone=phone+1 where name='张三';
 　　查询数据：
 　　　　查询前5条数据：select * from user limit 5;
 　　　　查询第3至6条数据：select * from user limit 2,4;
 注：从第几条开始查询(下标从0开始)，查询多少条
 　　　　查询指定字段：select name,sex,phone from user;
 　　　　单表查询：select * from user where name='张三' and sex='男';
 注：and表示多个条件必须同时满足
 　　　　　　　　　select * from user where name='张三' or sex='男';
 注：or表示有其中一个条件满足即可
 　　　　　　　　　select * from user where sex !='男'; #查询不等于男生的信息,也可以用<>
 　　　　　　　　　select * from user where name like '张%'; #查询姓张的用户
 　　　　　　　　　select * from user where name like '张_'; 　　#查询姓张并且姓名为2个字的用户
 　　　　　　　　 select * from user where name in ('张三','李四','王五');　　#查询姓名为张三、李四、王五的信息
 　　　　　　　 　 select * from user where phone between 13700000000 and 13712345678;　　#查询手机号在13700000000和13712345678之间的用户
 　　　　　　　 　 select * from user order by create_time desc;　　#查询按照用户创建时间倒序显示，默认升序asc
 　　　　　　　　 select * from user where addr='' or addr is null;　　#查询地址为空或为null的用户
 　　　　　　　　　select distinct name from user;　　#不显示重复的姓名
 　　　　　　　　　select count(*) from user where sex='女';　　#统计女生有多少人
 　　　　　　　　　select max(age),min(age),avg(age),sum(age) from user where sex='男';　　#查找男生年龄最大、最小、平均、总和
 　　　　　　　　　select *,COUNT(sex) from user GROUP BY sex having sex='女';　　#按照性别分组，并显示女生有多少人
```

多表查询：

```text
select * from user u,user_group g where u.id=g.id　　　　#查询两张表共有的数据
 　　　　　　　　select * from user u inner join user_group g on u.id=g.id;　　#查询两张表共有的数据
 　　　　　　　　select * from user u left join user_group g on u.id=g.id;　　#左边所有的数据都查出来，右边如果有匹配的则查出来
 　　　　　　　　select * from user u right join user_group g on u.id=g.id;　　#右边所有的数据都查出来，左边如果有匹配的则查出来
 　　　　　　　　select * from user u left join user_group g on u.id=g.id
 　　　　　　　　union
 　　　　　　　　select * from user u right join user_group g on u.id=g.id;　　#左边和右边匹配的数据全部查出来并去重(union all不会去重)，相当于oracle的全连接``
 　　　　　　　　select * from (select id,name,sex from user where sex='女') user;　　#把查询结果作为一张表查询
 　　　　　　　　select * from user where id in(select id from user_group where g_name='计算机');　　#子查询，查询学计算机的用户信息
```

4、用户管理

添加用户：

`insert into user (user,host,password) values('xiaoxitest','%',PASSWORD('123456')); #添加xiaoxitest用户并允许远程计算机登录，密码为：123456`

更改用户：

`update user set password=password("654321") where user='xiaoxitest'; #更改用户密码`

`update user set user='xiaoxi' where user='xiaoxitest';　　#更改用户名xiaoxitest为xiaoxi`

删除用户：

`delete from user where user='xiaoxi';　　#删除xiaoxi用户`

5、权限管理

用户授权：

授权格式：grant 权限 on 数据库.\* to 用户名@登录主机 identified by "密码" with grant option;

`grant all on *.* to 'xiaoxi'@'%' IDENTIFIED BY '123456' with grant option; #表示为xiaoxi用户添加所有数据库所有权限，并可以给其他人授权。`

`grant all on test.* to 'xiaoxi'@'%' IDENTIFIED BY '123456' ;　　#表示为xiaoxi用户添加test数据库所有权限`

`grant select on *.* to 'xiaoxi'@'%' IDENTIFIED BY '123456' ;　　#表示为xiaoxi用户添加所有数据库查询权限`

取消授权：

`Revoke select on *.* from 'xiaoxi'@'%';　　#表示为xiaoxi用户取消所有数据库查询权限`

`Revoke all on *.* from 'xiaoxi'@'%';　　#表示为xiaoxi用户取消所有数据库所有权限`

刷新权限：

`flush privileges;`

`MariaDB [(none)]> grant all on*.* to 'root'@'localhost' identified by 'sql123456' with grant option;`

另外的里面的空用户也要删除了，因为留着它数据库就不安全了，用如下命令一句话解决：

`delete from user where user=’’`
