## 一、钱包的种类

当前，BTC普遍以以下几种形式储存

+ 交易所 －把币存在交易所账号，自己不掌握密钥
+ 本地钱包 － 密钥在电脑或手机软件里
+ 硬件钱包 － 密钥在专门的U盘中存储
+ 纸钱包 － 私钥或助词词打印在纸上
+ 脑钱包 － 大脑记住12个英语单词

以上方法，都不够完美，看分析：

| 类型 | 弊端 | 案例 |
| --- | --- | --- | --- |
| 交易所 | 跑路、被盗各种风险 | Mtgox,龙币网 |
| 本地钱包 | 电脑中毒、手机丢失 | [英国一程序员丢失7500枚BTC](https://www.chainnews.com/articles/195423120569.htm) |
| 硬件钱包 | U盘损毁或丢失 | [瑞士某小伙丢失80枚BTC](https://36kr.com/p/5131654) |
| 纸钱包 | 容易丢 | [7.4BTC被保洁清扫](https://www.jinse.com/bitcoin/248492.html) |
| 脑钱包 | 12-24个英语单词,易忘 | 同上 |

其实最安全的还是脑钱包，可惜当前的脑钱包都是用12－24个英文单词做助记词。

这对于大部分中国人很不友好。而且这12个单词还不是自己设定的，就更不好记了。

接下来推荐一款伟大产品－中文脑钱包。

## 二、中文脑钱包
中文脑是用自行设定的16个中文做助记词。比如自己的生日、喜欢的宠物、或者一句诗等等。只要是16个汉字就可以。

比如：”他苟利国家生死以你岂因涨跌避趋之“对应的地址是：`0x000000`

此程序由

## 三、在线使用
此程序由[哈迪斯公链（HadesChain）](https://www.hadeschain.org)提供并开源。（鸣谢！）  
在线使用地址： https://www.github.com/yanshiba/hanwallet

## 四、原理说明
比特币和以太坊的密钥都是32个字节。  
1个汉字的Unicode编码是2个字节，16个汉字32字节，恰好对应一个密钥。

所以，只要记住16个汉字，就牢牢掌握这笔财富。