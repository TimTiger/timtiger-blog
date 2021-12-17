# CSS @规则(at-rule)

css除了普通的选择器+声明块的规则外，还有一种@规则。用来描述样式使用的字符集、引入外部样式、条件判断等等。

## @charset

定义样式表使用的字符集

```css
  @charset "UTF-8";
```

## @import

告诉 CSS 引擎引入一个外部样式表. 第一个参数需要导入样式的地址。

  ```css
    @import "font.css"
    @import url("font.css")
  ```
  
后面可以跟support condition 和 media query list

  ```css
    @import "font.css" supports(display: flex) print
  ```

## @media

### 用法

媒体查询（Media queries）非常实用，尤其是当你想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。

媒体查询常被用于以下目的：

* 有条件的通过 @media 和 @import at-rules 用CSS 装饰样式。 如：
  
  ```css
    @media screen {
      background-color: red;
    }
  ```
  
* 用media=属性为style, link, source和其他HTML元素指定特定的媒体类型。如:
  
  ```html
  <link rel="stylesheet" src="styles.css" media="screen" />
  <link rel="stylesheet" src="styles.css" media="print" />
  ```

* 使用Window.matchMedia() 和MediaQueryList.addListener() 方法来测试和监控媒体状态。

### 语法

每条媒体查询语句都由一个可选的媒体类型和任意数量的媒体特性表达式构成。可以使用多种逻辑操作符合并多条媒体查询语句。媒体查询语句不区分大小写。

当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为true时，媒体查询将计算为true。 涉及未知媒体类型的查询始终为false。

```css
  关键字  + 媒体类型(all,print,screen,speech)  
  @media screen {}

  关键字  + 媒体特性
  @media (hover: hover) {}  //媒体特性必须用一对括号括起来
  @media (max-width: 1000px) {}
```

* 媒体类型 all、print、screen、speech
  
* 媒体特性 [链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)

* 逻辑操作符 and、not、only、,、or(level4加的跟，是一个意思)

```css
  @media screen and (min-width: 100px) {}
  @media not screen and (min-width: 100px) {} //not是否定整条媒体查询
  @media screen,(min-width: 100px) {} //,链接多条媒体查询，任意一条媒体查询为true，则样式会被应用
  @media only screen and (color) {} //only是为了兼容老浏览器，现在几乎不用了。
```
