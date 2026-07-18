---
layout: home

hero:
  name: "Zaofan Hub"
  text: "造反爱好者社区"
  tagline: 研究一切技术性造反的可能
  actions:
    - theme: brand
      text: 👥 了解社区 ->
      link: /docs/base/intro.md
    - theme: alt
      text: 💬 论坛
      link: https://forum.zaofan.org
    - theme: sponsor
      text: 🔐 Manifesto
      link: /pages/manifesto.md
---

<ProjectsShowcase
  :projects="[
    {
      name: 'Whisper',
      description: '在高压环境中，加密特征本身也可能暴露通信意图。Whisper 以文本隐写探索更低可见度的信息传递方式',
      link: 'https://whisper.zaofan.org',
      tags: ['文本隐写', '编码', '隐私'],
      status: 'active'
    }
  ]"
/>

<TeamShowcase
  :coreTeam="[
    {
      name: 'Zaofan Hub',
      avatar: '/zf-logo.svg',
      bio: '技术性造反爱好者社区',
      projects: [
        { name: 'Whisper - 文本隐写项目', link: 'https://whisper.zaofan.org' },
        { name: 'Zaofan Hub', link: 'https://zaofan.org' },
      ],
      homepage: 'https://zaofan.org'
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '了解社区', link: '/docs/base/intro.html' },
        { name: '参与社区', link: '/docs/base/join.html' },
      ]
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '浏览社区项目', link: '/pages/projects.html' },
        { name: '阅读研究索引', link: '/docs/base/quick-start.html' },
      ]
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '阅读加密朋克宣言', link: '/pages/manifesto.html' },
        { name: '加入社区', link: '/docs/base/join.html' },
      ]
    },
  ]"
  :vTeam="[
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '隐写与文本隐写', link: 'https://whisper.zaofan.org' },
        { name: '浏览社区项目', link: '/pages/projects.html' },
      ]
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '加密与私有网络', link: '/docs/base/quick-start.html' },
        { name: '阅读加密朋克宣言', link: '/pages/manifesto.html' },
      ]
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '去中心化与 P2P', link: '/docs/base/quick-start.html' },
        { name: '浏览社区项目', link: '/pages/projects.html' },
      ]
    },
    {
      name: '欢迎加入',
      avatar: '/zf-logo.svg',
      bio: '快来加入我们吧...',
      projects: [
        { name: '信息传递与协议研究', link: '/docs/base/quick-start.html' },
        { name: '参与社区', link: '/docs/base/join.html' },
      ]
    },
  ]"
/>
