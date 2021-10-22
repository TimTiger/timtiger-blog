# 认识CSS
学习CSS之前一定要先学一下html,不然你一脸懵逼。

## 什么是CSS
  1. css是一种设置文档样式和布局的语言，可以设置文档字体大小、颜色、间距等等。和HTML,JavaScript 并称为Web三大核心技术。
  2. 它的标准制定有一个专门的组织[CSS Working Group](https://www.w3.org/Style/CSS/)负责。
  3. 你能在[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)找到所有CSS可用的属性。
  4. 浏览器会内置一些样式，以便让不同的元素默认就有不同的样式，比如h1字体更大，p有上下边距，button有边框等等。所以即便你不写任何CSS样式，html文档在浏览器中打开时也还是能阅读的。

## 使用一下CSS
  先创建个html文件 index.html
  ```html
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Getting started with CSS</title>
      <link ref="stylesheet" href="styles.css"></link>
    </head>
    <body>
      <h1>I am a level one heading</h1>
      <p>This is a paragraph of text. In the text is a <span>span element</span>
      and also a <a href="https://example.com">link</a>.</p>
      <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>
      <ul>
        <li>Item <span>one</span></li>
        <li>Item two</li>
        <li>Item <em>three</em></li>
      </ul>
    </body>
    </html>
  ```

  同目录下创建一个styles.css文件
  ```css
    h1 {
      color: red;
    }
  ```

  在index.html中使用link元素将styles.css链接进来。
  ```html
  <link ref="stylesheet" href="styles.css"></link>
  ```
  浏览器打开index.html 你就能看到h1元素的文字显示成红色了。

## 它的语法
  [MDN讲的很清晰](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Syntax)

## CSS如何工作