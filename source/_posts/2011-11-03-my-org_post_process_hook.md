--- 
categories: 
  - emacs
  - org2blog
comments: true
layout: post
published: true
status: publish
date: 2011-11-03 11:11:11
tags: 
  - emacs
  - micolog
  - org2blog
title: "OrgMode Post Process Hook"
type: post
---

```lisp
(defun my-org-post-process-hook()
  (while (re-search-forward "<pre " nil t)
    (replace-match
     "<pre style="background-color:#272821; color: #F8F8F2" "
          t nil)))
(add-hook 'org-export-html-final-hook 'my-org-post-process-hook)
```
