import { siteConfig } from '../../data/site.js';

export function renderServices() {
  const { services } = siteConfig;

  // Desktop: Interactive hover list with synchronized featured image
  const servicesDesktopHtml = services.items.map((item, index) => `
    <article class="reveal-up service-item group py-7 sm:py-8 border-b border-slate-300/80 transition-colors duration-300 hover:bg-slate-50 px-2 sm:px-4 rounded-md" data-service-img="${item.image}" style="transition-delay: ${index * 60}ms;">
      <div class="flex items-start justify-between gap-4 sm:gap-6 cursor-pointer" data-service-trigger>
        
        <div class="flex items-start gap-4 sm:gap-8">
          <span class="text-[13px] font-mono font-semibold text-[#0090D0] pt-1.5 shrink-0 opacity-80">${item.number}</span>
          <div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2 sm:mb-1">
              <h3 class="font-display text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-[#0C3B78] transition-colors duration-300">
                ${item.title}
              </h3>
              <span class="text-[11px] font-semibold tracking-wide text-slate-400 font-mono uppercase">${item.tag}</span>
            </div>
            <p class="text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-xl">
              ${item.description}
            </p>
          </div>
        </div>

        <div class="flex items-center shrink-0 self-center">
          <button type="button" data-open-quote data-service="${item.title}" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#0C3B78] group-hover:text-white group-hover:bg-[#0C3B78] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-label="Orçar ${item.title}">
            <svg class="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </article>
  `).join('');

  // Mobile: Clean native accordion with >= 48px touch target, tag below title, description & image
  const servicesMobileHtml = services.items.map((item, index) => `
    <details class="group/acc border-b border-slate-200 py-2.5" ${index === 0 ? 'open' : ''}>
      <summary class="flex items-center justify-between gap-4 py-2 min-h-[48px] cursor-pointer select-none">
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-[#0090D0]">${item.number}</span>
          <h3 class="font-display text-[16px] min-[390px]:text-[17px] font-bold text-slate-800 group-open/acc:text-[#0C3B78] transition-colors leading-snug">
            ${item.title}
          </h3>
        </div>
        <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open/acc:bg-[#0C3B78] group-open/acc:text-white transition-all shrink-0">
          <svg class="w-4 h-4 transform transition-transform duration-200 group-open/acc:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </summary>
      
      <div class="pt-2 pb-3.5 pl-6 sm:pl-7 pr-1 space-y-3">
        <div>
          <span class="inline-block text-[11px] font-mono font-bold tracking-wider uppercase text-[#0C3B78] bg-blue-50/80 px-2.5 py-0.5 rounded">
            ${item.tag}
          </span>
        </div>
        
        <p class="text-[15px] text-slate-600 leading-relaxed">
          ${item.description}
        </p>

        <div class="rounded-lg overflow-hidden aspect-[16/10] border border-slate-200 shadow-xs max-w-sm mt-2">
          <img 
            src="${item.image}" 
            alt="${item.alt}" 
            class="w-full h-full object-cover"
            loading="lazy"
            width="360"
            height="225"
          >
        </div>

        <div class="pt-1.5">
          <button type="button" data-open-quote data-service="${item.title}" class="btn-primary !h-11 !px-5 !text-xs w-full sm:w-auto justify-center">
            <span>Solicitar orçamento</span>
            <svg class="btn-icon-arrow w-3.5 h-3.5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    </details>
  `).join('');

  return `
    <section id="servicos" class="py-16 sm:py-20 lg:py-28" aria-labelledby="servicos-title">
      <div class="max-w-7xl mx-auto px-5 max-[375px]:px-4 sm:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <!-- Lado Esquerdo -->
          <div class="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">
            <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-2 sm:mb-3">Engenharia e Serviços</span>
            <h2 id="servicos-title" class="reveal-up font-display text-[30px] min-[390px]:text-[32px] sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-4 sm:mb-5" style="transition-delay: 80ms;">
              ${services.title}
            </h2>
            <p class="reveal-up text-[15px] sm:text-base text-slate-600 leading-relaxed mb-6 lg:mb-10" style="transition-delay: 140ms;">
              ${services.description}
            </p>

            <!-- Fotografia Técnica Integrada (Desktop) -->
            <div class="reveal-scale hidden lg:block rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/5] sm:aspect-[3/4] shadow-md relative" style="transition-delay: 180ms;">
              <img 
                id="service-featured-img"
                src="${services.items[0].image}" 
                alt="${services.items[0].alt}" 
                class="w-full h-full object-cover transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform scale-100"
                loading="lazy"
                width="440"
                height="586"
              >
            </div>
          </div>

          <!-- Lado Direito Desktop -->
          <div class="hidden lg:block lg:col-span-8 border-t border-slate-300/80">
            ${servicesDesktopHtml}
          </div>

          <!-- Lado Mobile: Accordion Limpo -->
          <div class="block lg:hidden border-t border-slate-200">
            ${servicesMobileHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
