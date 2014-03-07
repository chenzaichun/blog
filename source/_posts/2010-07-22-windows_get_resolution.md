--- 
categories: 
  - programming
  - tools
comments: true
layout: post
date: 2010-07-22 18:33:16
published: true
status: publish
tags: 
  - VC
  - Windows
title: windows下获取屏幕分辨率
type: post
---

windows下获取屏幕分辨率:

```cpp
int nWidth = GetSystemMetrics(SM_CXSCREEN); //屏幕宽度   
int nHeight = GetSystemMetrics(SM_CYSCREEN); //屏幕高度
```
