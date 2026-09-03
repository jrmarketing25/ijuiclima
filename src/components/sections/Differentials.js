import { siteConfig } from '../../data/site.js';

export function renderDifferentials() {
  const { differentials } = siteConfig;

  const itemsHtml = differentials.items.map((item, index) => {
    // Calcula a linha (0, 1, 2) na grade 2 colunas
    const row = Math.floor(index / 2);
    const delay = row * 120;
    
    return `
      <article class="reveal-up group border-t border-slate-200/80 pt-8 pb-4 transition-colors" style="transition-delay: ${delay}ms;">
        <span class="block font-display text-[clamp(32px,3.5vw,48px)] font-light text-slate-200 group-hover:text-[#0090D0] transition-colors duration-400 leading-none mb-5">${item.number}</span>
        <h3 class="font-display text-lg sm:text-[1.35rem] font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-400 leading-tight mb-3">${item.title}</h3>
        <p class="text-[15px] sm:text-base text-slate-600 leading-relaxed">
          ${item.description}
        </p>
      </article>
    `;
  }).join('');

  return `
    <section id="diferenciais" class="py-16 sm:py-24 bg-white" aria-labelledby="diferenciais-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div class="lg:col-span-4 lg:sticky lg:top-28">
            <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Padrão de Trabalho</span>
            <h2 id="diferenciais-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-5" style="transition-delay: 80ms;">
              ${differentials.headline}
            </h2>
            <p class="reveal-up text-base sm:text-lg text-slate-600 leading-relaxed" style="transition-delay: 140ms;">
              Acreditamos que o bom serviço alia rigor de engenharia, pontualidade e respeito integral ao ambiente do cliente.
            </p>
          </div>

          <!-- Composição Editorial 2x3 -->
          <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-14">
            ${itemsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
