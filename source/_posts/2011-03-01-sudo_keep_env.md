--- 
categories: 
  - Linux
  - tools
comments: true
layout: post
date: 2011-03-01 19:34:31
published: true
status: publish
tags: 
  - Linux
title: sudo环境变量
type: post
---
由于很多时候访问网络需要通过代理，虽然export了http_proxy, https_proxy等等，但是sudo下这些环境变量是不会被保持的。

解决办法：修改/etc/sudoers文件（visudo），添加你想保留的环境变量

```conf
Defaults env_keep += "http_proxy https_proxy ftp_proxy" 
```

这样sudo就可以保留变量了
