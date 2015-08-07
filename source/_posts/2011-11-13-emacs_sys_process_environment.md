categories: 
  - emacs
  - org2blog
comments: true
layout: post
published: true
status: publish
tags: 
  - emacs
  - org2blog
title: Emacs进程/系统环境变量
type: post
date: 2011-11-13 11:11:11
---

Emacs中获取进程（系统）环境变量并进行修改，比如`http_proxy`:

```lisp
(getenv "http_proxy")
(setenv "http_proxy" "http://proxy-server:port")
```
     
