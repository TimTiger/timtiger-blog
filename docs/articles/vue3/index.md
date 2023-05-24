# Vue3

## 模板语法

双大括号绑定数据

```html
<span>Message: {{ msg }}</span>
```

v-bind指令绑定数据到属性，简写:

```html
<span v-bind:id="dynamicId"></span>
<span :id="dynamicId"></span>
```

