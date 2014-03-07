--- 
categories: 
  - ios
  - programming
comments: true
layout: post
published: true
status: publish
date: 2011-08-27 20:56:31
tags: 
  - ios
title: "'-respondsToSelector:' not found in protocol(s)"
type: post
---
 
The respondsToSelector: method is declared in the NSObject protocol. You have to make sure that your custom protocols also conform to the NSObject protocol. Change the declarations of your custom protocols from:

```objc
@protocol MyCustomProtocol...@end
```

To:

```objc
@protocol MyCustomProtocol <NSObject>...@end
```
