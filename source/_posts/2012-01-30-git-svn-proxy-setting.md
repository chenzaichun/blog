categories: 
  - emacs
  - org2blog
  - programming
comments: true
layout: post
published: true
status: publish
date: 2012-01-30 11:33:11
tags: 
  - DVCS
  - emacs
  - org2blog
  - programming
  - tools
  - VCS
title: "git svn代理设置"
type: post
---

git svn的代理设置需要通过修改`~/.subversion/servers`文件来实现：

```conf
[groups]
assembla = *.assembla.com
# group1 = *.collab.net
# othergroup = repository.blarggitywhoomph.com
# thirdgroup = *.example.com

[assembla]
http-proxy-host = proxy-server
http-proxy-port = 8080
http-compression = yes
username = yesokay
```
