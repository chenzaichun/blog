categories: 
  - Linux
  - tools
  - 无所事事
comments: true
layout: post
published: true
date: 2010-06-06 21:19:11
status: publish
tags: 
  - dns
  - Google
  - norton
title: 使用诺顿dns服务器
type: post
---

今天将dns服务器换为诺顿的和google的了，诺顿默认情况下给出了一些危险网站的建议，加上google chrome的危险建议，所以相对来说上网就比较安全，我的dns服务器配置 cat /etc/resolve.conf

```conf
nameserver 198.153.192.1
nameserver 8.8.8.8
```
