--- 
categories: 
  - emacs
  - org2blog
  - programming
  - tools
comments: true
layout: post
published: true
status: publish
date: 1011-12-31 11:23:58
tags: 
  - emacs
  - org2blog
  - VCS
title: rsync忽略svn目录
type: post
---

很多时候在使用rsync同步svn管理的代码的时候会出现问题，比如我在本地check了一份代码，使用的是1.6.x的svn client，如果同步到编译服务器上，但是上面只有1.5.x版本的svn client就会出现问题。

解决办法就是让rsync忽略svn目录，只同步代码文件：

```sh
rsync --cvs-exclude ...
```
   
