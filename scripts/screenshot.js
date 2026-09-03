import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function triggerAndLoadAllImages(page) {
  // 1. Force eager loading and re-trigger src so headless browser downloads everything
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(images.map(img => {
      img.loading = 'eager';
      if (img.complete && img.naturalHeight > 0) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
        // re-assign src to force fetch
        const cur = img.src;
        img.src = cur;
        setTimeout(resolve, 2000); // 2s safety fallback per image
      });
    }));
  });

  // 2. Auto-scroll through entire document
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 300);
        }
      }, 50);
    });
  });

  await page.waitForTimeout(600);
}

async function capture() {
  const browser = await chromium.launch();
  
  // 1. Desktop 1440x1000
  const contextDesktop = await browser.newContext({
    viewport: { width: 1440, height: 1000 }
  });
  const pageDesktop = await contextDesktop.newPage();
  await pageDesktop.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await triggerAndLoadAllImages(pageDesktop);
  await pageDesktop.screenshot({ path: path.join(rootDir, 'screenshot-desktop-1440x1000.png'), fullPage: true });
  console.log('Desktop screenshot saved!');

  // 2. Mobile 390x844
  const contextMobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const pageMobile = await contextMobile.newPage();
  await pageMobile.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await triggerAndLoadAllImages(pageMobile);
  await pageMobile.screenshot({ path: path.join(rootDir, 'screenshot-mobile-390x844.png'), fullPage: true });
  console.log('Mobile screenshot saved!');

  await browser.close();
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
