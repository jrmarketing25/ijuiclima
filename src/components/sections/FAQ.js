import { siteConfig } from '../../data/site.js';

export function renderFAQ() {
  const { faq } = siteConfig;

  const faqItemsHtml = faq.map((item, index) => `
    <article class="faq-item group border-b border-slate-200/60" data-faq-index="${index}">
      <div class="flex items-center justify-between gap-4 py-3 sm:py-4">
        
        <!-- Text is NOT clickable, purely editorial -->
        <h3 class="font-display text-[15px] sm:text-[17px] font-semibold text-slate-800 flex-1 leading-snug">
          ${item.question}
        </h3>
        
        <!-- Accessible Button for Expansion -->
        <button 
          type="button" 
          class="faq-trigger flex items-center justify-center w-[2.625rem] h-[2.625rem] rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-[#0C3B78] hover:border-[#0C3B78] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3B78] cursor-pointer shrink-0" 
          aria-expanded="false" 
          id="faq-trigger-${index}" 
          aria-controls="faq-content-${index}"
          aria-label="Expandir resposta"
        >
          <!-- Elegant Rotation Icon (+ to X or rotated +) -->
          <svg class="faq-icon w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
        </button>

      </div>
      
      <!-- Content Area: Occupies ZERO space when closed -->
      <div 
        id="faq-content-${index}" 
        class="faq-content grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" 
        role="region" 
        aria-labelledby="faq-trigger-${index}"
      >
        <div class="overflow-hidden">
          <p class="text-[14.5px] text-slate-600 leading-relaxed pb-6 pr-4 sm:pr-12">
            ${item.answer}
          </p>
        </div>
      </div>
    </article>
  `).join('');

  return `
    <section id="faq" class="py-16 sm:py-24 bg-white" aria-labelledby="faq-title">
      <div class="max-w-[900px] mx-auto px-6 sm:px-8">
        
        <div class="mb-12 sm:mb-16">
          <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Dúvidas Técnicas</span>
          <h2 id="faq-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1]" style="transition-delay: 80ms;">
            Perguntas Frequentes
          </h2>
        </div>

        <div class="reveal-fade border-t border-slate-200/60" style="transition-delay: 140ms;">
          ${faqItemsHtml}
        </div>

      </div>
    </section>
  `;
}
