#如果您没有安装git
-实话实说，Windows是最烂的开发平台，如果不是开发Windows游戏或者在IE里调试页面，一般不推荐用Windows。不过，既然已经上了微软的贼船，也是有办法安装Git的。

-Windows下要使用很多Linux/Unix的工具时，需要Cygwin这样的模拟环境，Git也一样。Cygwin的安装和配置都比较复杂，就不建议你折腾了。不过，有高人已经把模拟环境和Git都打包好了，名叫msysgit，只需要下载一个单独的exe安装程序，其他什么也不用装，绝对好用。

-msysgit是Windows版的Git，从https://git-for-windows.github.io下载（网速慢的同学请移步国内镜像），然后按默认选项安装即可。

-安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！
--------------------------------安装git完成后-----------------------
#在命令行窗口里执行以下两行命令
-git config --global user.name "Your Name"
-git config --global user.email "email@example.com"
#第一步 ：在任意地方右键点击  git bush here
#第二步 ：执行命令  
-git clone https://github.com/auroraBoy/lovely.git
-cd lovely 
-cnpm install
#第三步 ：打开浏览器输入 localhost ：8080预览效果