import { siteConfig } from '../../data/site.js';

export function renderInstallation() {
  const { installation } = siteConfig;

  const pillarsHtml = installation.pillars.map((pillar, index) => `
    <div class="reveal-up border-l-[3px] border-[#0090D0] pl-5 py-1" style="transition-delay: ${index * 70}ms;">
      <h4 class="font-display text-[1.125rem] sm:text-xl font-bold text-white mb-2.5 tracking-wide">${pillar.title}</h4>
      <p class="text-slate-300 text-[15px] sm:text-base leading-relaxed">${pillar.description}</p>
    </div>
  `).join('');

  return `
    <section class="bg-[#0c111a] py-16 sm:py-24" aria-labelledby="install-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div class="reveal-scale order-2 lg:order-1 relative rounded-lg overflow-hidden border border-slate-800 shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-[4/5] max-h-[600px]">
            <img 
              src="${installation.image.url}" 
              alt="${installation.image.alt}" 
              class="w-full h-full object-cover object-center"
              loading="lazy"
              width="640"
              height="800"
            >
          </div>

          <div class="order-1 lg:order-2 flex flex-col">
            <h2 id="install-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-white tracking-tight leading-[1.1] mb-5">
              ${installation.headline}
            </h2>
            <p class="reveal-up text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl" style="transition-delay: 80ms;">
              ${installation.text}
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              ${pillarsHtml}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
