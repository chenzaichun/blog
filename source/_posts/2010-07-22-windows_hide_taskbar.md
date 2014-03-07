--- 
categories: 
  - programming
  - tools
comments: true
layout: post
published: true
status: publish
date: 2010-07-22 23:11:37
tags: 
  - VC
  - Windows
title: 在任务栏中隐藏windows程序
type: post
---
直接代码：

```cpp
ModifyStyleEx(WS_EX_APPWINDOW,WS_EX_TOOLWINDOW, SWP_DRAWFRAME);
```
