--- 
categories: 
  - emacs
  - Linux
  - org2blog
comments: true
layout: post
published: true
status: publish
date: 2011-11:12 11:11:11
tags: 
  - emacs
  - Linux
  - org2blog
title: "Linux默认Erase Key(Backspace Key)"
type: post
---

由于经常登陆solaris和hp-ux，所以将默认的backspace key设置成了^H（Terminal中设置），可是当使用在本地使用sqlplus的时候，会出现backspace无法使用的情况（Linux默认stty erase可以为^?），解决办法：

在`~/.profile`文件中加入：

``` 
stty erase ^H
```
