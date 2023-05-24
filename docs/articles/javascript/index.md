# JavaScript

解释型或即时编译型的编程语言。

## 入门

  JavaScript入门知识

### JavaScript的加载
  
- 在head元素中使用script元素加载（https://javascript.info/script-async-defer）

```html
<head>
  <script>console.log(111)</script>
  <script src='./main.js'>console.log(111)</script>
  <script src='./main.js' defer>console.log(111)</script>  
  <script src='./main.js' async>console.log(111)</script>
</head>
```

- 动态加载（https://javascript.info/script-async-defer）
  
```javascript
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); 
```

## JavaScript 基础

- 变量声明方式 const, let ,var
- 基本数据类型: string，number，bigint，boolean，null，undefined，symbol (ECMAScript 2016新增)。
  基本类型值可以被替换，但不能被改变。
- 包装对象（wrapper object): String, Number, Boolean, Symbol
  基本类型除了null和undefined之外都有包装对象，用于处理基本类型的一些基本操作。

```js
// custom wrapper object
function WrapperString(value) {
  const stringValue = value = ''
  if (this instanceof WrapperString) {
    this._value = value + ''
    this.valueOf = () => {
      return this._value
    }
  }
  return stringValue
}
const str = WrapperString(5.6)
const strObject = new WrapperString(5.6)
console.log(typeof str, typeof strObject)
//string, object
```

原型链：
constructor
prototype
__proto__

## 对象入门

https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects

https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

## 当前状况

## 语法

## 使用场景

## 相关的库
