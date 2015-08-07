categories: 
  - Linux
  - tools
comments: true
layout: post
date: 2010-05-11 13:11:32
published: true
status: publish
tags: 
  - archlinux
  - Linux
title: "archlinux x11 forwarding"
type: post
---

默认情况下archlinu是不允许x11 forwarding的,修改/etc/ssh/sshd_config

```conf
AllowTcpForwarding yes
X11Forwarding yes
X11DisplayOffset 10
X11UseLocalhost yes
```
