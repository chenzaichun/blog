categories: 
  - programming
comments: true
layout: post
published: true
status: publish
date: 2011-07-01 19:56:31
tags: 
  - ios
title: iOS获取UIWebView当前浏览页面的地址
type: post
---
iOS下获取UIWebView当前浏览页面的地址，在 =-(void) webViewDidFinishLoad:(UIWebView *)wv=

```objc
text = wv.request.URL.absoluteString;
```
