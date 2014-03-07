--- 
categories: 
  - emacs
  - org2blog
  - programming
  - tools
comments: true
excerpt: git-svn-cant-locate-term-readkey-pm-in-inc
layout: post
published: true
status: publish
date: 2012-02-02 22:31:11
tags: 
  - DVCS
  - emacs
  - git
  - org2blog
  - VCS
title: "Git svn – Can’t locate Term/ReadKey.pm in @INC"
type: post
---

```sh
perl -MCPAN -e shell

# install Term::ReadKey
# exit
perl -MCPAN -e shellinstall Term::ReadKeyexit
```


archlinux上可以安装`extra/perl-term-readkey`

```sh
sudo pacman -S perl-term-readkey
```
