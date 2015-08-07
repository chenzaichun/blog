categories: 
  - emacs
  - Linux
  - org2blog
  - tools
comments: true
layout: post
published: true
status: publish
date: 2011-10-28 10:11:13
tags: 
  - archlinux
  - emacs
  - Linux
  - org2blog
title: "colored man page output"
type: post
---

```sh
# colorful man page
export PAGER="`which less` -s"
export BROWSER="$PAGER"
export LESS_TERMCAP_mb=$'E[01;34m'
export LESS_TERMCAP_md=$'E[01;34m'
export LESS_TERMCAP_me=$'E[0m'
export LESS_TERMCAP_se=$'E[0m'
export LESS_TERMCAP_so=$'E[01;44;33m'
export LESS_TERMCAP_ue=$'E[0m'
export LESS_TERMCAP_us=$'E[01;33m'
```
