module.exports = {
  base: '/',
  title: `Xiao Hu的技术博客`,
  
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
      text: 'Http',
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
        { text: 'HTML基础', link: '/articles/html/index'},
      ]
    }
  ]
}
