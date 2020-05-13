# pc站点配置



# 小程序配置

> [官网](https://mp.weixin.qq.com/)

## 通用配置

 ![image-20200513170602497](K:\Project\sourceTree\docs\docs\static\image-20200513170602497.png)



![image-20200513171004649](.\static\image-20200513171004649.png)

以上为微信小程序 appid 、小程序密钥、服务器域名配置地方。 

## 微信小程序

### 商户端

### 管理端

### 会员端

商户账号登录pc,点击左侧菜单中的会员管理，点击会员配置，找到微信相关部分，填写相关配置信息如图：

![image-20200513171724376](./static\image-20200513171724376.png)

![image-20200513172048464](.\static\image-20200513172048464.png)

## 支付宝小程序

### iot小程序

# 服务器部署

## nginx

### 配置路径

安装路径

`/www/server/nginx`

代理路径 

`/www/server/panel/vhost/nginx`

### 代理配置

```js
server 
{
	listen 443 ssl;
	server_name face.ugekj.com; 
	ssl_certificate  /www/server/nginx/ssl/ugekj.com/ugekj.com.pem;
	ssl_certificate_key /www/server/nginx/ssl/ugekj.com/ugekj.com.key;
	ssl_session_timeout 5m;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
    root /www/server/nginx/html/dist/;
    location / {
        alias   /www/server/nginx/html/dist/;
        try_files $uri $uri/  /index.html;
    } 
    location /zv-pay {
        proxy_redirect off;
        proxy_set_header Host face.ugekj.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:8093/zv-pay;
        proxy_http_version 1.1;
        proxy_set_header Connection "";  

    }
    location /zv-pay/websocket {
        proxy_pass http://127.0.0.1:8093/zv-pay/websocket;
        proxy_http_version 1.1;
        proxy_read_timeout 200s;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    location /scan {
        alias   /www/server/nginx/html/scanAuth/;
    }
    location /upload {
        alias   /home/upload/;
    }
    location ~ .*\.(txt|doc)?$ {
   		 root    /home/upload/txt;
	} 
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }
    location ~ \.well-known{
        allow all;
    } 
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {  
        expires  30d;
        error_log off;
        access_log /dev/null; 
    }  
    access_log  /www/wwwlogs/face.ugekj.com.log;
    error_log  /www/wwwlogs/face.ugekj.com.error.log;
}
server 
{
	listen 80;
	server_name face.ugekj.com;
	rewrite ^(.*)$ https://$host$1 permanent;
}
```

### 启动停止nginx

```
service nginx start ## reload stop ...
```









 

