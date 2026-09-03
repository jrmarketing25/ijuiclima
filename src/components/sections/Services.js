import { siteConfig } from '../../data/site.js';

export function renderServices() {
  const { services } = siteConfig;

  const servicesHtml = services.items.map((item, index) => `
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

            <div class="mt-5 lg:hidden rounded-md overflow-hidden aspect-[16/10] border border-slate-200 max-w-sm shadow-sm">
              <img 
                src="${item.image}" 
                alt="${item.alt}" 
                class="w-full h-full object-cover"
                loading="lazy"
                width="360"
                height="225"
              >
            </div>
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

  return `
    <section id="servicos" class="py-20 sm:py-28" aria-labelledby="servicos-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Lado Esquerdo -->
          <div class="lg:col-span-4 lg:sticky lg:top-32 flex flex-col">
            <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Engenharia e Serviços</span>
            <h2 id="servicos-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-5" style="transition-delay: 80ms;">
              ${services.title}
            </h2>
            <p class="reveal-up text-[15px] sm:text-base text-slate-600 leading-relaxed mb-10" style="transition-delay: 140ms;">
              ${services.description}
            </p>

            <!-- Fotografia Técnica Integrada -->
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

          <!-- Lado Direito -->
          <div class="lg:col-span-8 border-t border-slate-300/80 mt-8 lg:mt-0">
            ${servicesHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
