--- 
categories: 
  - emacs
  - Linux
  - org2blog
  - tools
comments: true
layout: post
published: true
status: publish
date: 2011-11-04 11:11:11
tags: 
  - emacs
  - Google
  - Linux
  - org2blog
title: "将google chrome设置为emacs默认浏览器"
type: post
---

```lisp
(setq browse-url-generic-program (executable-find "google-chrome")
      browse-url-browser-function 'browse-url-generic)

```
     
