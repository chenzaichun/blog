--- 
categories: 
  - emacs
  - org2blog
  - programming
comments: true
layout: post
published: true
status: publish
date: 2011-10-28 11:11:11
tags: 
  - emacs
  - org2blog
  - python
title: python获取本机公网IP
type: post
---

```python
#!/usr/bin/env python
#-*- encoding: utf-8 -*-

import re
import urllib2

print "public IP address is: " + re.search('d+.d+.d+.d+',urllib2.urlopen("http://www.whereismyip.com").read()).group(0)
```
     
