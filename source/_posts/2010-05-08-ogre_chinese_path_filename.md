categories: 
  - gamedev
  - programming
comments: true
layout: post
published: true
date: 2010-05-08 16:11:38
status: publish
tags: 
  - GameDev
  - Ogre
  - VC
  - vs
  - Windows
title: ogre中文路径和文件名
type: post
---

VS2005之后版本的std::fstream对中文路径处理不正确的原因，所以加载中文路径或文件名不成功，解决办法：

在主函数开始加入

```cpp
setlocale(LC_ALL,"Chinese-simplified");
```
