--- 
categories: 
  - Linux
  - tools
comments: true
layout: post
published: true
status: publish
date: 2010-08-24 17:37:33
tags: 
  - archlinux
  - Linux
title: archlinux自动升级aur
type: post
---
在用aur安装完软件之后，默认使用pacman -Syu或者yaourt -Syu是不会更新aur安装的软件的，但是yaourt有个--aur参数可以升级aur，所以可以用下面的方法升级aur

```sh
# 从AUR升级本地软件数据库并安装更新
yaourt -Syu --aur 
```
