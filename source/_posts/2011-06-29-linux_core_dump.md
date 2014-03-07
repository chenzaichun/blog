--- 
categories: 
  - Linux
  - tools
comments: true
layout: post
published: true
date: 2011-06-29 19:44:31
status: publish
tags: 
  - Linux
title: "linux下生成core dump文件"
type: post
---

linux下让crash的程序在程序可执行文件目录自动生成core文件：

```sh
ulimit -c unlimited
```
