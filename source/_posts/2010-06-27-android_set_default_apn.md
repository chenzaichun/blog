--- 
categories: 
  - programming
comments: true
layout: post
published: true
status: publish
date: 2010-06-27 12:22:11
tags: 
  - android
title: android下设置默认APN
type: post
---

```java
/**
 * set default apn
 * @param id
 */
private void setDefaultApn(int id) {
    // TODO Auto-generated method stub
　　ContentResolver cr = getContentResolver();
　　ContentValues cv = new ContentValues();
　　cv.put("apn_id", id);

　　try {
　　　　cr.update(preferapnUri, cv, null, null);
　  } catch (Exception e) {
　　　　// TODO Auto-generated catch block
     　 e.printStackTrace();
　 }
}
```
