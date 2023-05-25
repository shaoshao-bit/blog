
## **简单使用**

**git 钩子**git钩子简单来说是一种特定条件下触发的脚本。这里使用里面的`post-receive`钩子，这个钩子脚本会在仓库代码更新时执行。

### **创建git用户**

**复制**

`adduser git`

### **给git用户添加权限**

**复制**

`#若无此目录则mkdir新建一个。 cd /home/git #创建一个.ssh目录，存放公钥 mkdir .ssh cd .ssh touch authorized_keys`

### **获取公钥**

在本地机器根目录的.ssh文件里面找到一个名为id\_rsa.pub的文件，将里面的内容复制到刚才创建的authorized\_keys文件中

### **初始化仓库**

**复制**

`git init --bare blog.git #将新建的目录赋予git用户，或者切换到git用户下执行初始化操作 chown -R git:git blog.git`

### **生产项目仓库**

因为此次部署为博客项目（使用hexo），故将仓库目录设置在\`\`/var/www\`下面

**复制**

```bash
cd /var/www
sudo git clone /home/git/blog.git
#设置权限给git用户
sudo chown -R git blog
```

### **添加钩子**

**复制**

`cd /home/git/hooks 编辑post-receive文件 vim post-receive`

在`post-receive`文件里面编辑

**复制**

```bash
#!/bin/sh
cd /var/www/blog
#取消gitdir
unset GIT_DIR
git pull
```

给`post-receive`文件增加运行权限

**复制**

`chmod +x post-receive`

现在提交代码之后可以自动部署到web目录下面了
