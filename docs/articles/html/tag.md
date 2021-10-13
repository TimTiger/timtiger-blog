# HTML 常用元素

## html
是HTML的根元素，一般会包含一个head然后跟一个body标签，建议设置lang属性，有助于其它工具理解文档主要是什么语言。
  
  ```html
    示例
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
      </body>
    </html>
  ```
  
## head
人如其名就是一个头部标签，用它来包裹其它提供元数据的元素，head中的元素都不会显示在页面上。它一般会包含title,meta,base这三个元素，如果要加载样式和脚本也可以在里面写link,style和script标签。除非有更高级的协议提供标题，否则head中必须要有title标签提供标题。比如邮件中用了html编写内容，可以没有title标签。

  ```html
    <!DOCTYPE HTML>
    <html LANG="EN">
      <head>
        <meta charset="UTF-8">
        <base href="https://www.example.com/">
        <title>An application with a long head</title>
        <link rel="STYLESHEET" href="default.css">
        <link rel="STYLESHEET ALTERNATE" href="big.css" title="Big Text">
        <script src="support.js"></SCRIPT>
        <meta name="APPLICATION-NAME" content="Long headed application">
      </head>
      <body>
      </body>
    </html>
  ```

### title
会被其它上下文使用，例如在用户的历史、书签，或搜索结果中.一个html文档中只能有一个title元素，且要写在head元素里。


### base
必填属性href用于规定页面中所有相对链接的基准URL，可选属性target用于指定在何处打开页面中的链接。一个html文档中只能有一个base元素，且要写在head元素里。
    
  - target="_self"：在本來的视窗打开链接
  - target="_blank"：在新的视窗打开链接
  - target="_parent"：在父视窗打开链接
  - target="_top"：以 top 模式打开链接

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <title>This is an example for the base element</title>
        <base href="https://www.example.com/news/index.html" target="_blank">
    </head>
    <body>
        <p>Visit the <a href="archives.html">archives</a>.</p>
    </body>
  </html>
  链接地址是 "https://www.example.com/news/archives.html"。
```

### meta
也属于提供元数据的元素，这些数据不会显示在客户端，但会被其它上下文使用。
  - name属性
    设置了name属性就必须设置content属性，name的可选值
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name

  - http-equiv属性
    没太明白，好像是可以设置request header参数。
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

  - charset属性
    设置这个文档使用什么字符集编码，默认utf-8已经兼容世界上绝大多数文本了，所以一般不用设置。

### link
一般用来设置网站地址栏显示的logo、加载外部样式等等。这个标签学问很大，要阅读详细文档才能搞清楚
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
  
```html
  <link href="/media/examples/link-element-example.css" rel="stylesheet">
  <link rel="icon" href="favicon.ico">
```

* script元素用来嵌入脚本代码或者嵌入数据。常用的就是嵌入JavaScript代码。

```html
  /** 直接写JS脚本 **/
  <script>alert('Hello World!');</script>

  /** 引入外部JS文件 **/
  <script src="javascript.js"></script>
```

script不设置type属性时默认当做javascript代码，script支持的type只有text/javascript, text/ecmascript, application/javascript, 和application/ecmascript。如果type设置的不是上述支持的类型，则该元素所包含的内容会被当作数据块而不会被浏览器执行。利用这一点可以嵌入其它数据或代码，然后获取元素的innerHTML就拿到代码或数据了。

```html
  <script type="x-shader/x-vertex" id="vertex-shader">
    #version 100
    void main() {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 64.0;
    }
  </script>
  <script type="text/json" id="json">
    {
      "a" : "1",
      "b" : "2"
    }
  </script>
  <script>
    var source = document.querySelector("#vertex-shader").innerHTML;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader,source);
    gl.compileShader(vertexShader);

    var jsonData = JSON.parse(document.querySelector("#json").innerHTML);
  </script>
```

### style
用来插入文档的显示样式。它只能放在head元素中，这个标签将在css章节中详细讲解。



## body
  body元素用来展示html文档的内容，一个文档中有且仅能有一个body元素。也就是说我们要展示给用户看到的内容都要放到body元素中

```html
  <html>
    <head>
      <title>Document title</title>
    </head>
    <body>
      <p>This is a paragraph</p>
    </body>
  </html>
```

## 其它元素
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
