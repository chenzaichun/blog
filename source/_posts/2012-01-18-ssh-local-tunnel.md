categories: 
  - emacs
  - org2blog
  - tools
comments: true
layout: post
published: true
status: publish
date: 2012-01-18 11:22:33
tags: 
  - emacs
  - Linux
  - org2blog
title: ssh本地tunnel代理
type: post
---

ssh命令用法

> ssh -qTfnN -D 7070 用户名@远程ssh主机名
> 
> -q :- be very quite, we are acting only as a tunnel.
> -T :- Do not allocate a pseudo tty, we are only acting a tunnel.
> -f :- move the ssh process to background, as we don’t want to interact with this ssh session directly.
> -N :- Do not execute remote command.
> -n :- redirect standard input to /dev/null.

plink用法

```sh
plink -C -D 127.0.0.1:7070 -N -pw 密码 用户名@服务器地址
```
