layout: post
title: "在hp-ux上启动x font server"
date: 2012-11-28 11:08
comments: true
categories: 
 - programming
 - tools
tags: 
  - linux
  - hp-ux
  - emacs
---

编辑`/etc/rc.config.d/xfs`

```
RUN_X_FONT_SERVER=1
```

然后启动

```sh
/sbin/init.d/xfs start
```

检查是否启动:

```sh
ps -ef|grep xfs
netstat -an|grep 7000
```
