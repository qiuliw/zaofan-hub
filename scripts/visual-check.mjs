import {chromium} from '../../../zaofan-lab-site/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  executablePath: '/home/qiuliw/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome',
  headless: true,
});

for (const viewport of [
  {name: 'desktop', width: 1440, height: 1000},
  {name: 'mobile', width: 390, height: 844},
]) {
  const page = await browser.newPage({viewport});
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('http://127.0.0.1:3100/', {waitUntil: 'networkidle'});
  await page.screenshot({path: `artifacts/${viewport.name}.png`, fullPage: true});
  const metrics = await page.evaluate(() => ({
    bodyWidth: document.body.scrollWidth,
    viewportWidth: window.innerWidth,
    title: document.title,
    projectCards: document.querySelectorAll('.project-card').length,
    navbars: document.querySelectorAll('.VPNav').length,
    logoLoaded: document.querySelector('.VPNavBarTitle img')?.clientWidth ?? 0,
  }));
  console.log(JSON.stringify({viewport, metrics, errors}));
  await page.close();
}

const manifesto = await browser.newPage({viewport: {width: 1200, height: 850}});
const manifestoErrors = [];
manifesto.on('console', (message) => message.type() === 'error' && manifestoErrors.push(message.text()));
await manifesto.goto('http://127.0.0.1:3100/pages/manifesto.html', {waitUntil: 'networkidle'});
await manifesto.screenshot({path: 'artifacts/manifesto.png', fullPage: true});
console.log(JSON.stringify({
  manifesto: {
    navbars: await manifesto.locator('.VPNav').count(),
    headers: await manifesto.locator('header').count(),
    title: await manifesto.title(),
  },
  errors: manifestoErrors,
}));

await browser.close();
