---
layout: post
title: "Octopress添加robots.txt"
date: 2012-05-12 21:05
comments: true
categories: 
  - tools
tags:
  - octopress
  - 无所事事
---

添加`source/robots.txt`:

```
---
layout: nil
---
User-agent: *
Disallow: 
Sitemap: {{ site.url }}/sitemap.xml 
```
