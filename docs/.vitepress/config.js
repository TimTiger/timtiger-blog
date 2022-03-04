module.exports = {
  base: '/',
  title: `XiaoHu的技术博客`,
  
  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',

    sidebar: {
      '/': getCategorySidebar()
    }
  }
}

function getCategorySidebar() {
  return [
    {
      text: '浏览器',
      children: [
        { text: '浏览器原理', link: '/articles/browsers/browser' },
        { text: 'IE', link: '/articles/browsers/ie' },
        { text: 'Chrome', link: '/articles/browsers/chrome' },
        { text: 'FireFox', link: '/articles/browsers/firefox' },
        { text: 'Safari', link: '/articles/browsers/safari' },
        { text: 'Edge', link: '/articles/browsers/edge' },
        { text: 'Opera', link: '/articles/browsers/opera' },
      ]
    },
    {
      text: 'HTTP',
      children: [
        { text: 'HTTP', link: '/articles/http/http' },
        { text: 'HTTP 1.1', link: '/articles/http/http1_1' },
        { text: 'HTTP 1.2', link: '/articles/http/http1_2' },
        { text: 'HTTP 2.0', link: '/articles/http/http2_0' },
      ]
    },
    { 
      text: "HTML",
      children: [
        { text: 'HTML', link: '/articles/html/html'},
        { text: 'HTML 元素', link: '/articles/html/element'},
        { text: 'HTML 常用元素', link: '/articles/html/tag'},
      ]
    },
    { 
      text: "CSS",
      children: [
        { text: '认识CSS', link: '/articles/stylesheet/css'},
        { text: 'CSS选择器', link: '/articles/stylesheet/css-selector'},
        { text: 'CSS属性', link: '/articles/stylesheet/css-properties'},
        { text: 'CSS属性值', link: '/articles/stylesheet/css-value'},
        { text: 'CSS @规则', link: '/articles/stylesheet/css-at-rule'},
      ]
    },
    {
      text: "JavaScript",
      children: [
        { text: '认识JavaScript', link: '/articles/javascript/index'},
      ]
    },
    { 
      text: "WebAssembly",
      children: [
        { text: '认识WebAssembly', link: '/articles/web-assembly/index'},
      ]
    },
    {
      text: "Serverless",
      children: [
        { text: '认识Serverless', link: '/articles/serverless/index'},
      ]
    },
    {
      text: "必读书本",
      children: [
        { text: '代码整洁之道', link: '/articles/books/clean-code'},
      ]
    },
  ]
}
