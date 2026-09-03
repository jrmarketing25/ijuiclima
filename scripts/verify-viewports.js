import { chromium } from 'playwright';

const viewports = [
  { name: 'Mobile-390', width: 390, height: 844 },
  { name: 'Mobile-430', width: 430, height: 932 },
  { name: 'Tablet-768', width: 768, height: 1024 },
  { name: 'Tablet-1024', width: 1024, height: 768 },
  { name: 'Laptop-1366', width: 1366, height: 768 },
  { name: 'Desktop-1440', width: 1440, height: 900 },
  { name: 'Wide-1920', width: 1920, height: 1080 }
];

async function verifyResponsive() {
  const browser = await chromium.launch();
  let allPass = true;

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height }
    });
    const page = await context.newPage();
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

    // Check for horizontal overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    if (overflow) {
      console.error(`❌ Overflow detected on ${vp.name} (${vp.width}x${vp.height})!`);
      allPass = false;
    } else {
      console.log(`✓ Passed: ${vp.name} (${vp.width}x${vp.height}) - No overflow`);
    }

    await context.close();
  }

  await browser.close();
  if (!allPass) process.exit(1);
  console.log('All 7 viewports passed zero-overflow check!');
}

verifyResponsive().catch(err => {
  console.error(err);
  process.exit(1);
});

