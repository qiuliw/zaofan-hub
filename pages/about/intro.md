---
layout: page
---

<AboutLayout>
  <div class="intro-container">
    <img src="/zf-logo.svg"> </img>
    <p class="intro-text">一个研究技术性造反及相关技术、文化、交流的社区</p>
    <p class="intro-text">隐写、私有网络、加密、去中心化、信息传递、P2P</p>
    <div class="intro-actions">
      <a class="cta-button" href="/docs/base/join.html" target="_blank" rel="noreferrer">加入社区</a>
      <a class="cta-button" href="https://forum.zaofan.org" target="_blank" rel="noreferrer">参与讨论</a>
      <a class="cta-button" href="/pages/projects.html" target="_blank" rel="noreferrer">浏览项目</a>
    </div>
  </div>
  
  <ScrollGuide targetUrl="/docs/base/intro" label="了解社区" />
</AboutLayout>

<style scoped>
.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.intro-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.25);
}

.intro-text {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--vp-c-text-1);
  margin: 0;
  font-weight: 500;
  line-height: 1.8;
  max-width: 800px;
}

@media (max-width: 640px) {
  .intro-text {
    font-size: 1.1rem;
  }
  .intro-actions {
    gap: 12px;
  }
  .cta-button {
    width: 100%;
    text-align: center;
  }
}
</style>
