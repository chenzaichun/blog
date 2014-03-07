--- 
categories: 
  - programming
comments: true
layout: post
published: true
status: publish
date: 2011-07-05 20:56:31
tags: 
  - ios
title: UIWebView获取当前加载的URL
type: post
---

实现delegate: shouldStartLoadWithRequest

```objc
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType 
{
	NSURL* url = [request  URL];
	self.urlEdit.text = [url absoluteString];
	return YES;
}
```
