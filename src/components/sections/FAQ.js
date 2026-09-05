import { siteConfig } from '../../data/site.js';

export function renderFAQ() {
  const { faq } = siteConfig;

  const faqItemsHtml = faq.map((item, index) => `
    <article class="faq-item group border-b border-slate-200/80" data-faq-index="${index}">
      <!-- Accessible Full-Width Button Trigger with min 52px touch area -->
      <button 
        type="button" 
        class="faq-trigger w-full flex items-center justify-between gap-4 py-4 sm:py-4.5 min-h-[52px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3B78] rounded-md transition-colors duration-200" 
        aria-expanded="false" 
        id="faq-trigger-${index}" 
        aria-controls="faq-content-${index}"
      >
        <span class="font-display text-[15px] min-[390px]:text-[16px] sm:text-[17px] font-bold text-slate-800 group-hover:text-[#0C3B78] group-[.is-open]:text-[#0C3B78] transition-colors leading-snug">
          ${item.question}
        </span>
        
        <span class="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 group-hover:bg-blue-50 group-[.is-open]:bg-[#0C3B78] group-[.is-open]:text-white text-slate-500 transition-all duration-300 shrink-0">
          <svg class="faq-icon w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
        </span>
      </button>
      
      <!-- Content Area: Occupies ZERO space when closed -->
      <div 
        id="faq-content-${index}" 
        class="faq-content grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" 
        role="region" 
        aria-labelledby="faq-trigger-${index}"
      >
        <div class="overflow-hidden">
          <p class="text-[15px] text-slate-600 leading-relaxed pb-5 sm:pb-6 pr-2 sm:pr-12">
            ${item.answer}
          </p>
        </div>
      </div>
    </article>
  `).join('');

  return `
    <section id="faq" class="py-16 sm:py-20 lg:py-28 bg-white" aria-labelledby="faq-title">
      <div class="max-w-[900px] mx-auto px-5 max-[375px]:px-4 sm:px-8">
        
        <div class="mb-10 sm:mb-16">
          <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-2 sm:mb-3">Dúvidas Técnicas</span>
          <h2 id="faq-title" class="reveal-up font-display text-[30px] min-[390px]:text-[32px] sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1]" style="transition-delay: 80ms;">
            Perguntas Frequentes
          </h2>
        </div>

        <div class="reveal-fade border-t border-slate-200/80" style="transition-delay: 140ms;">
          ${faqItemsHtml}
        </div>

      </div>
    </section>
  `;
}
