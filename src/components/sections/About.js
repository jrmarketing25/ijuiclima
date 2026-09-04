import { siteConfig } from '../../data/site.js';

export function renderAbout() {
  const { about, company } = siteConfig;

  const pillarsHtml = about.pillars.map((pillar, index) => `
    <div class="reveal-up border-l-[3px] border-[#0C3B78] pl-4 py-0.5" style="transition-delay: ${index * 70 + 200}ms;">
      <h3 class="font-display text-[15px] sm:text-base font-bold text-slate-900 mb-1">${pillar.label}</h3>
      <p class="text-[14.5px] text-slate-600 leading-relaxed">
        ${pillar.text}
      </p>
    </div>
  `).join('');

  return `
    <section id="sobre" class="py-20 sm:py-28 bg-white" aria-labelledby="sobre-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Lado Textual e Institucional -->
          <div class="lg:col-span-6">
            <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Estrutura e Equipe</span>
            <h2 id="sobre-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4.5vw,52px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-5" style="transition-delay: 80ms;">
              ${about.headline}
            </h2>
            
            <p class="reveal-up text-base sm:text-[1.0625rem] text-slate-600 leading-relaxed mb-8" style="transition-delay: 140ms;">
              ${about.copy}
            </p>

            <div class="space-y-5 mb-8">
              ${pillarsHtml}
            </div>

            <div class="reveal-up inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded border border-slate-200/80" style="transition-delay: 350ms;">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Sede própria e atendimento técnico em ${company.locationString}</span>
            </div>
          </div>

          <!-- Lado Visual -->
          <div class="lg:col-span-6">
            <div class="relative">
              
              <!-- Fotografia Principal -->
              <div class="reveal-scale rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3] max-h-[460px] shadow-sm" style="transition-delay: 100ms;">
                <img 
                  src="${about.image.url}" 
                  alt="${about.image.alt}" 
                  class="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  width="700"
                  height="525"
                >
              </div>

              <!-- Cartão de Apoio -->
              <div class="mt-4 grid grid-cols-2 gap-4">
                <div class="reveal-scale rounded-md overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] relative shadow-2xs group" style="transition-delay: 180ms;">
                  <img 
                    src="${about.facilityImage.url}" 
                    alt="${about.facilityImage.alt}" 
                    class="w-full h-full object-cover"
                    loading="lazy"
                    width="320"
                    height="200"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-3">
                    <span class="text-xs font-mono font-medium text-white tracking-wide">Frota de Atendimento</span>
                  </div>
                </div>

                <div class="reveal-scale rounded-md overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] relative shadow-2xs group" style="transition-delay: 260ms;">
                  <img 
                    src="${about.vehicleImage.url}" 
                    alt="${about.vehicleImage.alt}" 
                    class="w-full h-full object-cover"
                    loading="lazy"
                    width="320"
                    height="200"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-3">
                    <span class="text-xs font-mono font-medium text-white tracking-wide">Estrutura Técnica</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
