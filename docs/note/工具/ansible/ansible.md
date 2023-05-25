
> Ansible是一个基于Python开发的配置管理和应用部署工具，现在也在自动化管理领域大放异彩。它融合了众多老牌运维工具的优点，Pubbet和Saltstack能实现的功能，Ansible基本上都可以实现
> Ansible能批量配置、部署、管理上千台主机。比如以前需要切换到每个主机上执行的一或多个操作，使用Ansible只需在固定的一台Ansible控制节点上去完成所有主机的操作。
> Ansible是基于模块工作的，它只是提供了一种运行框架，它本身没有完成任务的能力，真正执行操作的是Ansible的模块， 比如copy模块用于拷贝文件到远程主机上，service模块用于管理服务的启动、停止、重启等。

## 一、ansible安装

## 二、ansible相关工具

*   /usr/bin/ansible 主程序，临时命令执行工具

*   /usr/bin/ansible-doc 查看配置文档，模块功能查看工具

*   /usr/bin/ansible-galaxy 下载/上传优秀代码或Roles模块的官网平台

*   /usr/bin/ansible-playbook 定制自动化任务，编排剧本工具

*   /usr/bin/ansible-pull 远程执行命令的工具

*   /usr/bin/ansible-vault 文件加密工具

*   /usr/bin/ansible-console 基于Console界面与用户交互的执行工具

## 三、ansible常用模块

虽然ansible模块众多，但最常用的模块也就2，30个而已，针对特定业务只用十几个模块

[command模块](command模块.md "command模块")

[shell模块](shell模块.md "shell模块")

[cron模块](cron模块.md "cron模块")

[user模块](user模块.md "user模块")

[group模块](group模块.md "group模块")

[copy模块](copy模块.md "copy模块")

[file模块](file模块.md "file模块")

[hostname模块](hostname模块.md "hostname模块")

[ping模块](ping模块.md "ping模块")

[yum模块](yum模块.md "yum模块")

[service模块](service模块.md "service模块")

[script模块](script模块.md "script模块")

## 四、playbook

playbook 剧本是由一个或多个“play”组成的列表 &#x20;
play的主要功能在于将预定义的一组主机，装扮成事先通过ansible中的task定义好的角色。Task实际是调用ansible的一个module，将多个play组织在一个playbook中，即可以让它们联合起来，按事先编排的机制执行预定义的动作

![](https://image-1258252302.cos.ap-beijing.myqcloud.com/image_BAIHjsKrG2.png)

Playbook 文件是采用[YAML](YAML.md "YAML")语言编写的

下面为一个简单的playbook文件

```bash
---
- hosts: node1
  remote_user: root
  tasks:
    - name: install mysql-server package
      yum: name=mysql-server state=present
    - name: starting mysqld service
      service: name=msyql state=started

```

其中：

`host:` 使用hosts指示使用哪个主机或者主机组来运行下面的tasks，每个playbooks都必须指定hosts，host也可以使用通配符格式。主机或者主机组在inventorry清单中指定，可以使用系统默认的/etc/ansible/hosts，也可以自己编辑，在运行的时候加上-i 选项指定清单的位置。在运行清单文件的时候， --list-hosts选项会显示哪些主机将会参与执行task的过程中。

`remote_user: `指定远端主机的哪个用户来登录远端系统，在远端系统执行task的用户，可以任意指定，也可以使用sudo，但是用户必须要有执行相应的task权限。

`tasks:` 指定远端主机将要执行的一系列动作。tasks的核心为ansible的模块，前面已经提到模块的用法，tasks包含name和要执行的模块，name是可选的，只是为了便于用户阅读，模块是必须的，同时也要给予模块相应的参数。

### playbook的核心元素

```bash
Hosts          执行的远程主机列表(应用在哪些主机上)
Tasks          任务集
Variables      内置变量或自定义变量在playbook中调用
Templates模板  可替换模板文件中的变量并实现一些简单逻辑的文件
Handlers和notify结合使用，由特定条件触发的操作，满足条件方才执行，否则不执行
tags标签       指定某条任务执行，用于选择运行playbook中的部分代码。
                ansible具有幂等性，因此会自动跳过没有变化的部分，
                即便如此，有些代码为测试其确实没有发生变化的时间依然会非常地长。
                此时，如果确信其没有变化，就可以通过tags跳过此些代码片断
                ansible-playbook -t tagsname useradd.yml
```

## inventory变量参数

```bash
ansible_ssh_host    //将要连接的远程主机名.与你想要设定的主机的别名不同的话,可通过此变量设置
ansible_ssh_port    //ssh端口号.如果不是默认的端口号,通过此变量设置
ansible_ssh_user      //默认的 ssh 用户名
ansible_ssh_pass    //ssh 密码(这种方式并不安全,我们强烈建议使用 --ask-pass 或 SSH 密钥)
ansible_ssh_private_key_file    //ssh 使用的私钥文件.适用于有多个密钥,而你不想使用 SSH 代理的情况
ansible_ssh_common_args      //此设置附加到sftp，scp和ssh的缺省命令行
ansible_sftp_extra_args      //此设置附加到默认sftp命令行
ansible_scp_extra_args     //此设置附加到默认scp命令行
ansible_ssh_extra_args    //此设置附加到默认ssh命令行
ansible_ssh_pipelining     //确定是否使用SSH管道. 这可以覆盖ansible.cfg中得设置
ansible_shell_type     //目标系统的shell类型.默认情况下,命令的执行使用 ‘sh’ 语法,可设置为 ‘csh’ 或 ‘fish’
ansible_python_interpreter   //  目标主机的 python 路径.适用于的情况: 系统中有多个 Python, 或者命令路径不是"/usr/bin/python",比如 *BSD, 或者 /usr/bin/python
ansible_*_interpreter     //这里的"*"可以是ruby 或perl 或其他语言的解释器，作用和ansible_python_interpreter 类似
ansible_shell_executable  //  这将设置ansible控制器将在目标机器上使用的shell，覆盖ansible.cfg中的配置，默认为/bin/sh
```
