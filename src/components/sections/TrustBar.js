import { siteConfig } from '../../data/site.js';

export function renderTrustBar() {
  const { trustBar } = siteConfig;
  
  const itemsHtml = trustBar.map((item, index) => `
    <div class="flex items-center gap-2.5">
      <span class="w-1.5 h-1.5 rounded-full bg-[#0090D0]"></span>
      <span class="text-sm font-medium text-slate-800 tracking-wide">${item}</span>
    </div>
    ${index < trustBar.length - 1 ? '<div class="hidden sm:block w-[1px] h-4 bg-slate-300"></div>' : ''}
  `).join('');

  return `
    <section class="bg-white border-b border-slate-200" aria-label="Nossos Diferenciais Rápidos">
      <div class="reveal-fade max-w-7xl mx-auto px-6 sm:px-8 py-5">
        <div class="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
