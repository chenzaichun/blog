categories: 
  - emacs
  - org2blog
comments: true
layout: post
published: true
date: 2011-11-03 11:11:11
status: publish
tags: 
  - emacs
  - micolog
  - org2blog
title: RSS输出添加css支持
type: post
---

修改views/rss.xml， 在xml版本定义下加入：

```xml
<?xml-stylesheet type="text/css" href="{{ blog.baseurl }}/themes/iNove/style.css" ?>
```

测试一下是否成功:) 
