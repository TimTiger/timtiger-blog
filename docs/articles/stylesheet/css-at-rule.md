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

## @supports

  您可以指定依赖于浏览器中的一个或多个特定的CSS功能的支持声明。这被称为特性查询。该规则可以放在代码的顶层，也可以嵌套在任何其他条件组规则中。

```css
  //关键字 + 条件语句
  @supports (display: grid) {
    div {
      display: grid
    }
  }
  
  //可搭配not,and,or使用
  @supports not (display: grid) {}
  @supports  (display: grid) and (display: flex) {}
  @supports  (display: grid) or (display: flex) {}
```

## @keyframes

关键帧 @keyframes  规则通过在动画序列中定义关键帧（或waypoints）的样式来控制CSS动画序列中的中间步骤。和 转换 transition 相比，关键帧 keyframes 可以控制动画序列的中间步骤。

```css
  @keyframes slidein {
    from {
      transform: translateX(0%); 
    }

    to {
      transform: translateX(100%);
    }
  }
```

## @page

@page 规则用于在打印文档时修改某些CSS属性。你不能用@page规则来修改所有的CSS属性，而是只能修改margin,orphans,widow 和 page breaks of the document。对其他属性的修改是无效的。

```css
  @page {
    margin: 1cm;
  }

  @page :first {
    margin: 2cm;
  }
```

## @font-face

这是一个叫做@font-face 的CSS @规则 ，它允许网页开发者为其网页指定在线字体。 通过这种作者自备字体的方式，@font-face 可以消除对用户电脑字体的依赖。 @font-face 不仅可以放在在CSS的最顶层, 也可以放在 @规则 的 条件规则组 中。

```html
<html>
<head>
  <title>Web Font Sample</title>
  <style type="text/css" media="screen, print">
    @font-face {
      font-family: "Bitstream Vera Serif Bold";
      src: url("https://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
    }

    body { font-family: "Bitstream Vera Serif Bold", serif }
  </style>
</head>
<body>
  This is Bitstream Vera Serif Bold.
</body>
</html>
```
