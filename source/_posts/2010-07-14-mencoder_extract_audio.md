categories: 
  - Linux
  - tools
comments: true
layout: post
date: 2010-07-14 11:36:11
published: true
status: publish
tags: 
  - Linux
title: mencoder提取音频
type: post
---

```sh 
# $1 -- input file
# $2 -- output file
mencoder -oac mp3lame -ovc copy -of rawaudio $1 -o $2
```
