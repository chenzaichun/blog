--- 
categories: 
  - programming
  - tools
comments: true
layout: post
published: true
date: 2010-12-01 17:32:37
status: publish
tags: 
  - android
  - Google
title: android模拟器使用代理
type: post
---
网上找了很多，最后总结一下最简单的方法:

```sh
emulator -avd devicename -http-proxy "http://proxyname:port"
```
