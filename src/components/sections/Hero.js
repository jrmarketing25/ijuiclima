import { siteConfig } from '../../data/site.js';

export function renderHero() {
  const { hero } = siteConfig;

  return `
    <section class="relative pt-4 pb-12 sm:pb-16 lg:py-14 overflow-hidden" aria-labelledby="hero-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Lado Textual (42%) -->
          <div class="lg:col-span-5 flex flex-col items-start justify-center">
            
            <!-- Eyebrow -->
            <div class="hero-animate-up inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100/90 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wider mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0C3B78]"></span>
              <span>${hero.eyebrow}</span>
            </div>

            <!-- Headline -->
            <h1 id="hero-title" class="hero-animate-up font-display text-4xl sm:text-5xl lg:text-[clamp(44px,4.5vw,56px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-4" style="animation-delay: 80ms;">
              ${hero.headline}
            </h1>

            <!-- Descrição -->
            <p class="hero-animate-up font-body text-base sm:text-[1.0625rem] text-slate-600 leading-relaxed max-w-xl mb-7" style="animation-delay: 160ms;">
              ${hero.description}
            </p>

            <!-- CTAs -->
            <div class="hero-animate-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-5" style="animation-delay: 240ms;">
              <button type="button" data-open-quote class="btn-primary">
                <span>${hero.primaryCta}</span>
                <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <a href="#servicos" class="link-editorial mt-2 sm:mt-0 ml-1 sm:ml-4">
                <span>${hero.secondaryCta}</span>
                <svg class="link-icon-arrow w-4 h-4 text-[#0090D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <!-- Micro-linha -->
            <div class="hero-animate-up text-[11px] font-medium text-slate-400 tracking-wider uppercase" style="animation-delay: 320ms;">
              ${hero.segments}
            </div>

          </div>

          <!-- Lado Visual (58%) -->
          <div class="lg:col-span-7 relative">
            <div class="hero-animate-scale relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] max-h-[580px]" style="animation-delay: 200ms;">
              <img 
                src="${hero.image.url}" 
                alt="${hero.image.alt}" 
                class="w-full h-full object-cover object-center"
                loading="eager"
                width="840"
                height="630"
              >
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
