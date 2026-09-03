import { siteConfig } from '../../data/site.js';

export function renderFinalCTA() {
  const { finalCta, company } = siteConfig;

  return `
    <section id="contato" class="py-20 sm:py-28 lg:py-32 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="cta-final-title">
      <div class="reveal-scale max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10" style="transition-duration: 700ms;">
        
        <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0090D0] block mb-4" style="transition-delay: 100ms;">
          Atendimento Direto
        </span>
        
        <h2 id="cta-final-title" class="reveal-up font-display text-4xl sm:text-[clamp(40px,5.5vw,60px)] font-bold tracking-tight text-white mb-6 leading-[1.1]" style="transition-delay: 180ms;">
          ${finalCta.headline}
        </h2>

        <p class="reveal-up text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style="transition-delay: 260ms;">
          ${finalCta.text}
        </p>

        <div class="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4" style="transition-delay: 340ms;">
          <a href="https://wa.me/${company.whatsappRaw}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Ijuí%20Clima." target="_blank" rel="noopener noreferrer" class="btn-primary w-full sm:w-auto !bg-[#0C3B78] hover:!bg-[#0090D0] shadow-md">
            <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.54 1.77.822 2.796.822 3.182 0 5.768-2.587 5.768-5.767 0-3.18-2.586-5.767-5.768-5.767zm7.55 5.767c0 4.164-3.388 7.552-7.55 7.552-1.332 0-2.583-.349-3.674-.963l-4.148 1.088 1.107-4.045c-.694-1.144-1.077-2.474-1.077-3.632 0-4.164 3.388-7.552 7.55-7.552 4.162 0 7.55 3.388 7.55 7.552z"/></svg>
            <span>${finalCta.buttonText}</span>
          </a>

          <button type="button" data-open-quote class="btn-secondary w-full sm:w-auto !bg-white/10 !border-white/20 !text-white hover:!bg-white/15">
            <span>Preencher pré-orçamento</span>
          </button>
        </div>

        <div class="reveal-fade mt-10 text-xs font-mono text-slate-500 tracking-widest uppercase" style="transition-delay: 420ms;">
          ${finalCta.location}
        </div>

      </div>
    </section>
  `;
}
