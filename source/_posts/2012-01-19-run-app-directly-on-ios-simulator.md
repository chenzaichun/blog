--- 
categories: 
  - emacs
  - org2blog
  - programming
comments: true
layout: post
published: true
status: publish
date: 2012-01-19 18:13:22
tags: 
  - emacs
  - ios
  - "macos"
  - org2blog
title: "直接用模拟器运行ios app"
type: post
---

有的时候我们想把编译好的ios发给别人测试，但是又没有真机，同时也不想提供源代码，这个时候就需要直接用ios simulator运行app：

```sh
/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone\ Simulator.app/Contents/MacOS/iPhone\ Simulator -SimulateApplication path_to_your_app/YourFavouriteApp.app/YourFavouriteApp
```
   
