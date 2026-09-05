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
    <section class="bg-[#0c111a] py-16 sm:py-20 lg:py-28" aria-labelledby="install-title">
      <div class="max-w-7xl mx-auto px-5 max-[375px]:px-4 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <!-- Imagem Grande e Impactante (Primeiro no Mobile - Proporção 4:5 natural sem cortes) -->
          <div class="reveal-scale order-1 lg:order-1 relative rounded-lg overflow-hidden border border-slate-800 shadow-xl aspect-[4/5] max-h-[520px] sm:max-h-[560px] mx-auto w-full max-w-md lg:max-w-none">
            <img 
              src="${installation.image.url}" 
              alt="${installation.image.alt}" 
              class="w-full h-full object-cover object-top"
              loading="lazy"
              width="640"
              height="800"
            >
          </div>

          <!-- Conteúdo e Benefícios (Segundo no Mobile) -->
          <div class="order-2 lg:order-2 flex flex-col">
            <h2 id="install-title" class="reveal-up font-display text-[30px] min-[390px]:text-[32px] sm:text-[clamp(36px,4vw,48px)] font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-5">
              ${installation.headline}
            </h2>
            <p class="reveal-up text-[15px] sm:text-base text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-xl" style="transition-delay: 80ms;">
              ${installation.text}
            </p>
            
            <!-- Benefícios em Grid 2x2 (1 coluna abaixo de 420px) -->
            <div class="grid grid-cols-1 min-[420px]:grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-10">
              ${pillarsHtml}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
