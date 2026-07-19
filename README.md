# Zaofan Hub

Zaofan Hub 是一个研究技术性造反及相关技术、文化和社区实践的造反社区站点。

## 模板来源

本站基于 [mcpp-community/mcpp-community](https://github.com/mcpp-community/mcpp-community) 模板改造，复用了其 VitePress 主题结构、Vue 组件和视觉样式。感谢 MCPP Community 的原始设计与开发工作。

Zaofan Hub 对品牌、文案、导航、项目数据、社区文档和图标资产进行了替换与定制。

## 技术栈

- VitePress 2
- Vue 3
- Node.js 24
- Nginx

## 本地开发

```bash
npm ci
npm run dev
```

## 生产构建

```bash
npm run build
```

生产镜像使用 `Dockerfile` 构建，并通过 Nginx 提供静态文件。
