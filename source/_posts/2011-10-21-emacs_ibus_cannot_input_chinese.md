categories: 
  - emacs
  - org2blog
comments: true
layout: post
published: true
status: publish
date: 2011-10-21 20:56:31
tags: 
  - emacs
  - Linux
  - org2blog
title: ibus在emacs下不能输入
type: post
---

参考链接: <a href="http://blog.pluskid.org/?p=328">http://blog.pluskid.org/?p=328</a>   

最简单的解决办法：     

```sh
LC_CTYPE=zh_CN.utf8 emacs &
```
    
