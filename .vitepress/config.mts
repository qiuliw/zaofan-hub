import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zaofan hub",
  description: "研究一切技术性造反的可能",
  head: [['link', { rel: 'icon', href: '/zf-logo.svg' }]],
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/zf-logo.svg",
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/base/intro.md' },
      { text: '项目', link: '/pages/projects.md' },
      {
        text: '社区与项目',
        items: [
          {
            text: '社区',
            items: [
              { text: '加密安那其论坛', link: 'https://forum.zaofan.org' },
              { text: 'Whisper 文本隐写', link: 'https://whisper.zaofan.org' },
            ]
          },
          {
            text: '研究',
            items: [
              { text: '开放研究索引', link: '/docs/base/quick-start.md' },
              { text: '加密朋克宣言', link: '/pages/manifesto.md' },
            ]
          },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '简介', link: '/pages/about/intro.md' },
        ]
      },
      { text: '💬 论坛', link: 'https://forum.zaofan.org' },
    ],
    sidebar: {
      '/docs/' : [
        {
          text: '了解社区',
          collapsed: false,
          items: [
            { text: '认识', link: '/docs/base/intro.md' },
            { text: '研究索引', link: '/docs/base/quick-start.md' },
            { text: '参与社区', link: '/docs/base/contribute.md' },
            { text: '加入社区', link: '/docs/base/join.md' },
            { text: '常见问题', link: '/docs/base/qa.md' },
          ]
        },
      ],
    },
    socialLinks: []
  }
})
