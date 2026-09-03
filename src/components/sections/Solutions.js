import { siteConfig } from '../../data/site.js';

export function renderSolutions() {
  const { solutions } = siteConfig;
  const { residential, corporate } = solutions;

  const renderHighlights = (list, bulletColor) => list.map(item => `
    <li class="flex items-start gap-3 py-1.5 text-sm sm:text-base text-slate-700">
      <span class="w-1.5 h-1.5 rounded-full ${bulletColor} mt-2 shrink-0"></span>
      <span class="leading-relaxed">${item}</span>
    </li>
  `).join('');

  return `
    <section id="solucoes" class="py-16 sm:py-24 lg:py-32 bg-[#FBFBFB] border-y border-slate-200" aria-labelledby="solucoes-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="max-w-3xl mb-16 lg:mb-24">
          <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Projetos Sob Medida</span>
          <h2 id="solucoes-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-4" style="transition-delay: 80ms;">
            Residencial e Empresarial
          </h2>
          <p class="reveal-up text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl" style="transition-delay: 140ms;">
            Soluções estruturadas para atender às exigências de silêncio do ambiente doméstico e à estabilidade do espaço corporativo.
          </p>
        </div>

        <div class="space-y-20 lg:space-y-24">
          
          <!-- Bloco 1: Residencial -->
          <article class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" aria-labelledby="res-title">
            
            <div class="reveal-up flex flex-col justify-center order-2 lg:order-1">
              <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#0C3B78] mb-3">
                ${residential.badge}
              </span>
              <h3 id="res-title" class="font-display text-2xl sm:text-[clamp(28px,3vw,36px)] font-bold text-slate-900 mb-4 leading-tight">
                ${residential.headline}
              </h3>
              <p class="text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                ${residential.text}
              </p>

              <ul class="mb-10 space-y-2">
                ${renderHighlights(residential.highlights, 'bg-[#0C3B78]')}
              </ul>

              <div>
                <button type="button" data-open-quote data-service="Climatização Residencial" class="btn-primary">
                  <span>Orçar projeto residencial</span>
                  <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

            <div class="reveal-scale order-1 lg:order-2">
              <div class="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] sm:aspect-[5/4] max-h-[640px]">
                <img 
                  src="${residential.image}" 
                  alt="${residential.alt}" 
                  class="w-full h-full object-cover object-center"
                  loading="lazy"
                  width="640"
                  height="480"
                >
              </div>
            </div>

          </article>
          
          <div class="h-[1px] w-full bg-slate-200"></div>

          <!-- Bloco 2: Empresarial (Composição Invertida) -->
          <article class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" aria-labelledby="corp-title">
            
            <div class="reveal-scale">
              <div class="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] sm:aspect-[5/4] max-h-[640px]">
                <img 
                  src="${corporate.image}" 
                  alt="${corporate.alt}" 
                  class="w-full h-full object-cover object-center"
                  loading="lazy"
                  width="640"
                  height="480"
                >
              </div>
            </div>

            <div class="reveal-up flex flex-col justify-center lg:pl-6">
              <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#0090D0] mb-3">
                ${corporate.badge}
              </span>
              <h3 id="corp-title" class="font-display text-2xl sm:text-[clamp(28px,3vw,36px)] font-bold text-slate-900 mb-4 leading-tight">
                ${corporate.headline}
              </h3>
              <p class="text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                ${corporate.text}
              </p>

              <ul class="mb-10 space-y-2">
                ${renderHighlights(corporate.highlights, 'bg-[#0090D0]')}
              </ul>

              <div>
                <button type="button" data-open-quote data-service="Climatização Empresarial" class="btn-primary !bg-[#0090D0] hover:!bg-[#007bb3]">
                  <span>Orçar projeto empresarial</span>
                  <svg class="btn-icon-arrow w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

          </article>

        </div>

      </div>
    </section>
  `;
}
