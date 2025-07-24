// .vitepress/config.js
export default {
  lang: 'zh-CN', // 网站语言
  title: '我的学习小站', // 网站标题
  description: '记录我的学习与成长之路', // 网站描述，对 SEO 友好

    themeConfig: {
      // 顶部导航栏
      nav: [
        { text: '首页', link: '/' },
        { text: '我的笔记', link: '/notes/first-note' },
        { text: '编程入门', link: '/programming-intro/phase-1-planning/01-development-process' },
        { text: '关于我', link: '/about' }
      ],
      // 侧边栏
      sidebar: {
        '/programming-intro/': [
          {
            text: '第一阶段：AI辅助开发规划',
            items: [
              { text: '1. App开发流程', link: '/programming-intro/phase-1-planning/01-development-process' },
              { text: '2. 开发准备', link: '/programming-intro/phase-1-planning/02-development-prep' }
            ]
          },
          {
            text: '第二阶段：开发实践',
            items: [
              { text: '1. React电影清单应用', link: '/programming-intro/phase-2-practice/01-react-movie-app' }
            ]
          },
          {
            text: '第三阶段：部署上线',
            items: [
              { text: '1. 个人网站发布流程', link: '/programming-intro/phase-3-deployment/01-vitepress-github-vercel' }
            ]
          },
          {
            text: '问题答疑',
            items: [
              { text: '常见问题汇总', link: '/programming-intro/phase-4-q-and-a/01-common-issues' }
            ]
          }
        ]
      }
    }
    
}