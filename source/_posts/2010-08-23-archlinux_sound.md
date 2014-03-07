--- 
categories: 
  - Linux
  - tools
comments: true
layout: post
published: true
date: 2010-08-23 12:32:27
status: publish
tags: 
  - archlinux
  - Linux
title: archlinux声卡配置
type: post
---

1. 安装alsa-lib alsa-utils alsa-oss

```sh
sudo pacman -S alsa-lib alsa-utils alsa-oss
```

2. 执行alsaconf，选择自己的声卡

3. 使用alsamixer调整音量
