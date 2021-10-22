# CSS选择器
  CSS的常用规则是将一组CSS声明与用选择器定义的条件相关联。其中选择器的熟练使用是尤为重要的。

### 类型选择器(Type Selector)
  类型选择器就是直接指定元素类型来设置样式, 可用的值与文档中的元素是一一对应的
  ```css
  /** 设置h1元素的字体颜色为红色 */
   h1 {
     color: red;
   }
  ```

### 通用选择器(Universal Selector)
  通用选择器就是选择全部元素,用*号表示
  ```css
    * {
      color: red;
    }
  ```

### 属性选择器(Attribute Selector)
  属性选择器就是用元素的属性作为条件来选中它。语法是一对或多对中括号来表示，一般会与类型选择器组合用。
  ```css
    /** 设置拥有class属性的h1元素字体颜色为红色 */
    h1[class] {
      color: red;
    }

    /** 设置拥有class和name属性的h2元素字体颜色为红色 */
    h2[class][name] {
      color: red;
    }
  ```

  ```css
    /** 设置属性class值为”demo“的h1元素字体颜色为红色 */
    h1[class="demo"] {
      color: red;
    }

    /** 设置class值等于”demo“或者等于test的h1元素字体颜色为红色 */
    h1[class="demo"]
    h1[class="test"] {
      color: red;
    }
  ```

  ```css
    /** 设置属性class值约等于”demo“的h1元素字体颜色为红色,约等于就是值中包含”demo“字符串就可以，比如class="demo test"就符合。 */
    h1[class~="demo"] {
      color: red;
    }
  ```

  ```css
    /** 设置class值以”en“开头的h1元素字体颜色为红色，比如class值可以是”en“,"en-US","en-scouse"*/
    h1[class!="en"] {
      color: red;
    }
  ```

  ```css
    /** 不使用类型选择器
    [class="en"] {
      color: red;
    }
  ```

  <a href="https://drafts.csswg.org/selectors-3/#attribute-selectors" >还有很多种使用方法</a>

### 类选择器(Class Selector)
  个人认为也属于属性选择器，选择class的值包含指定字符串的元素。语法为.符号加一个字符串.
  ```css
    /** 
     * 设置class值包含”special“的元素字体颜色为红色，比如class值可以是”en“,"en-US","en-scouse"
     * 相当于*.speical ,*[class="speical"]
    */
    .speical {
      color: red;
    }

    /** 设置class值包含”special“且包含”demo“的元素字体颜色为红色， 相当于 *[class~="speical"][class~="demo"] */
    .speical.demo {
      color: red;
    }
  ```

### ID选择器(ID Selector)
 跟类选择器一样，是选择id的值包含指定字符串的元素。语法为#符号加字符串
 ```css
  /** 设置id属性值等于”user“的元素字体颜色为红色 */
  #user {
    color: red;
  }
 ```

### 伪类(Pseudo-classes)
  利用上面的选择器我们已经能筛选到我们想要设置样式的元素，但是更加细微的筛选就做不到了，比如按钮被点击时设置成红色背景，链接被点过后文字设置成灰色，等等。于是有了伪类。语法是:符号跟一个伪类关键字. 伪类只能跟在type selector 和 universal selector的末尾，可放于其它选择器的前后。
  ```css
    /** 鼠标悬停在按钮上时，背景设置为红色 */
    button:hover {
      background: red;
    }

    input:hover:focus {
      background: red;
    }

    input:hover.special:focus {
      background: red;
    }
  ```
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes">标准伪类列表</a>

### 伪元素(Pseudo-elements)
  还有一些样式要设置的地方，无法用html元素表示出来。就用伪元素来实现。比如文本的第一个字符想要设置成黑体，比如列表元素的前面要加上黑点，等等。语法为::符号加伪元素关键字。早期不知道是CSS协议没严格区分伪类和伪元素 还是 浏览器厂商没做区分，反正现在很多浏览器伪元素也支持:符号加关键字的写法。
  ```css
    /** 设置段落的第一行全部大写 */
    p::first-line { 
      text-transform: uppercase 
    }
  ```

  伪类和伪元素有很明显的区分：伪类是筛选出元素的状态，位置等。伪元素是刷选出元素的一部分内容区域。

### 选择器的连接符
  * 逗号,链接符. 表示声明了多个选择器，会选出符合任意一个选择器的元素。
  ```css
    /** 设置h1和p元素的字体颜色为红色 */
    h1,p {
      color: red;
    }
    /** 设置类名包含”special“,或者类名包含”sub-speicial“的元素字体颜色为红色 */
    .special, .sub-speicial {
      color: red;
    }
    h1, .special, .sub-speicial {
      color: red;
    }
  ```

  * 空格连接符，表示直接后代元素，可以说是表示父子关系吧。
  ```css
    /** 设置p元素的直接子元素a的字体颜色为红色 */
    p a {
      color: red;
    }
    /** 多层嵌套 */
    p a i {
      color: red;
    }
    p .special {
      color: red;
    }
    p .special i {
      color: red
    }
  ```

  * 大于>链接符, 表示子代元素，不必是父子，孙子，重孙子都行。
  ```css
    div > p {
      color: red;
    }
  ```

  * 加号+链接符，表示两个元素相邻的兄弟元素。注意：只能是紧邻在后面
  ```css
    h1 + p {
      color: red;
    }
    .special + .sub-special {
      color: red;
    }
    .special + p {
      color: red;
    }
  ```

  * 大约~连接符，表示共父亲的兄弟元素，不必紧邻。
  ```css
    h1 ~ div {
      color: red;
    }
  ```

