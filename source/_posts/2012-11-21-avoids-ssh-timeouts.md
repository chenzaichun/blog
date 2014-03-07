---
layout: post
title: "Avoids ssh timeouts"	
date: 2012-11-21 16:17
comments: true
categories: 
 - programming
 - tools
tags: 
  - linux
---

```sh
# to set it globally
echo 'ServerAliveInterval 60' >> /etc/ssh/ssh_config

# For per-user configuration
echo 'ServerAliveInterval 60' >> ~/.ssh/config
```
