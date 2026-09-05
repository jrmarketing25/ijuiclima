import { siteConfig } from '../../data/site.js';

export function renderFinalCTA() {
  const { finalCta, company } = siteConfig;

  return `
    <section id="contato" class="py-16 sm:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="cta-final-title">
      <div class="reveal-scale max-w-4xl mx-auto px-5 max-[375px]:px-4 sm:px-8 text-center relative z-10" style="transition-duration: 700ms;">
        
        <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0090D0] block mb-3 sm:mb-4" style="transition-delay: 100ms;">
          Atendimento Direto
        </span>
        
        <h2 id="cta-final-title" class="reveal-up font-display text-[30px] min-[390px]:text-[34px] sm:text-[clamp(40px,5.5vw,60px)] font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]" style="transition-delay: 180ms;">
          ${finalCta.headline}
        </h2>

        <p class="reveal-up text-slate-300 text-[15px] sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style="transition-delay: 260ms;">
          ${finalCta.text}
        </p>

        <div class="reveal-up flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto" style="transition-delay: 340ms;">
          <a href="https://wa.me/${company.whatsappRaw}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Ijuí%20Clima." target="_blank" rel="noopener noreferrer" class="btn-primary w-full sm:w-auto !h-[52px] !bg-[#0C3B78] hover:!bg-[#0090D0] shadow-md justify-center">
            <svg class="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>${finalCta.buttonText}</span>
          </a>

          <button type="button" data-open-quote class="btn-secondary w-full sm:w-auto !h-[52px] !bg-white/10 !border-white/20 !text-white hover:!bg-white/15 justify-center">
            <span>Preencher pré-orçamento</span>
          </button>
        </div>

        <div class="reveal-fade mt-8 sm:mt-10 text-xs font-mono text-slate-500 tracking-widest uppercase" style="transition-delay: 420ms;">
          ${finalCta.location}
        </div>

      </div>
    </section>
  `;
}
