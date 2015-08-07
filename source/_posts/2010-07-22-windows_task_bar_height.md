categories: 
  - programming
  - tools
comments: true
layout: post
published: true
status: publish
date: 2010-07-22 16:23:11
tags: 
  - VC
  - Windows
title: windows获取任务栏高度
type: post
---

```cpp
RECT Rect;
HWND hWnd = FindWindow("Shell_TrayWnd", 0);
if (GetWindowRect(hWnd, &Rect)) {
        //Rect.bottom-Rect.top   就是任务栏的高度
}
```
