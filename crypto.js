//crypto模块提供加密和哈希算法

//MD5和SHA1哈希算法
const crypto=require('crypto');
const hash=crypto.createHash('md5');
//可多次调用