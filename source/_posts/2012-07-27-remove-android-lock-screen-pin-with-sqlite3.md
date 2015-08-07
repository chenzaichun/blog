layout: post
title: "remove android lock-screen pin with sqlite3"
date: 2012-07-27 16:16
comments: true
categories: 
  - tools
tags: 
  - programming
  - android
---

```
adb shell
# sqlite3 /data/data/com.android.providers.settings/databases/settings.db
sqlite> update secure set value=65536 where name='lockscreen.password_type';
sqlite> .exit
# exit
adb reboot
```
