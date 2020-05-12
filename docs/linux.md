```
docker run --name ugemysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=uge2020 -d mysql:5.7


docker run -p 3306:3306 --name ugemysql \
-v /www/server/mysql/conf:/etc/mysql/conf.d \
-v /www/server/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=uge2020 \
-d mysql:5.7

```

--name 后面的是docker容器名

-p 32xxx:3306 这里需要注意 `32xxx` 是你**链接mysql的时候的`Port`。**

-e MYSQL_ROOT_PASSWORD 是设置mysql的root账号密码

-d mysql 是你的镜像标签





https://www.aliyun.com/minisite/goods?userCode=7ehflzsq



### 进入MySQL容器,登陆MySQL

```
docker exec -it ugemysql /bin/bash

mysql -u root -p

```

 

docker基础操作须知:
镜像：应用程序所依赖的操作环境和配置形成的模板，用面向对象的话来说简称类

容器:通过镜像来运行容器，容器相当于类的实例。

常用命令大全:

ip addr/ip link/ ifconfig：查看宿主机里ip地址（宿主机表示是虚拟机)

systemctl start docker/service start docker：启动docker服务

systemctl stop docker:关闭docker服务

service iptables start:启动防火墙

service iptables restart:重启防火墙

service iptables stop:关闭防火墙

docker run：启动container

docker seach xxxx(镜像名称):检索镜像

docker pull xxx(镜像名称）：拉取镜像

docker images:列出镜像

docker  --version:查看docker的版本信息

[root@localhost  ~]:家目录

[root@localhost  /]:根目录

docker exec Container Id:进入容器

docker exec -it NAMES(自定义名称) /bin/bash:进入--name命名的容器

docker exec NAMES(容器的自定义名称）-it bash:进入容器里进行操作

docker attach Container Id:进入到容器的终端

docker inspect IMAGE ID:显示容器或镜像的元数据

[root@（container id）]：比如[root@24527d42d3eb]表示已进入docker里的一个CONTAINER ID的容器内部

[root@24527d42d3eb]:exit(从容器里退出）。

docker ps：查看docker里运行的容器（status为Up....表示运行中）

docker ps -a:查看docker里已停止或正在运行的容器（status为Exit)

docker start CONTAINER ID   ：如果容器的状态为Exit,用它来启动容器

docker stop CONTAINER ID   :停止正在运行的容器，删除一个容器必须先要停止

docker restart :当部署web项目的war文件，到tomcat里的webapps里面了，重启一下docker服务，就自动解压了war文件

docker rm CONTAINER ID ：删除容器

docker rm $(docker ps -a -q)：删除所有已停止的容器;

docekr rmi IMAGE ID:删除镜像

rm -rf xxxx：强制删除某个war.文件或目录、文件

docker cp /xxx.war CONTAINER ID   :/usr/local/tomcat/webapps：从/根目录复制一个打包后的Java web war文件 到tomcat容器里的webapps工作目录里

docker exec CONTAINER ID   ls /usr/local/tomcat:默认的 安装tomcat镜像的webapps目录

docker run -name xxx -p  (自定义端口号,用来访问的):(容器的端口号：比如tomcat的8080，mysql的3306） -d docker.io/tomcat(镜像名称)：表示在docker里运行一个tomcat容器,如果没有镜像，自动pull一个tomcat的镜像

--name 为容器取一个名字

-p 容器要映射的端口号

-d:后台运行

-t：进入终端

-i：获得一个交互式的连接，通过获取container的输入

/bin/bash：在container中启动一个bash shell

举例：docker run --name tomcat -p 8081:8080 -d tomcat 