categories: 
  - programming
comments: true
layout: post
published: true
date: 2010-05-07 11:11:11
status: publish
tags: 
  - VC
  - Windows
title: "ms vc下stderr到文件"
type: post
---

msvc下使用`fprintf(stderr, ...)`的时候，如果系统不是`/subsystem:console`的话，我们将看不到信息。如果程序要将消息重定位到文件的话，可以使用

```c
program begein : FILE* newstderr = freopen("xxx.log", "w", stderr);
program end: fclose(newstderr)
```
就可以了
