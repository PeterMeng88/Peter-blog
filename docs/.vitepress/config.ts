// .vitepress/config.js
export default {
  lang: 'zh-CN', // 网站语言
  title: '我的学习小站', // 网站标题
  description: '记录我的学习与成长之路', // 网站描述，对 SEO 友好

  themeConfig: {
    // 主题配置
    nav: [
      { text: '首页', link: '/' },
      { text: '我的笔记', link: '/notes/first-note' },
      { text: '关于我', link: '/about' }
    ]
  }
}