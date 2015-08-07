categories: 
  - programming
  - tools
comments: true
layout: post
published: true
date: 2010-12-12 18:19:23
status: publish
tags: 
  - python
title: windows下通过python获取用户桌面路径
type: post
---

```python
from win32com.shell import shell

def GetDesktoppath():
    ilist = shell.SHGetSpecialFolderLocation(0,shellcon.CSIDL_DESKTOP)
    dtpath = shell.SHGetPathFromIDList(ilist)
    return dtpath
```
