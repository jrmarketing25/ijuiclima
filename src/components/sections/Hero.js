import { siteConfig } from '../../data/site.js';

export function renderHero() {
  const { hero } = siteConfig;

  return `
    <section class="relative bg-white pt-4 sm:pt-6 pb-12 sm:pb-16 lg:py-12 overflow-hidden" aria-labelledby="hero-title">
      <div class="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-10 lg:gap-0 items-center lg:min-h-[580px] lg:max-h-[640px]">
          
          <!-- Coluna Esquerda: Conteúdo (46%) -->
          <div class="flex flex-col items-start justify-center lg:py-4 lg:pr-8 xl:pr-12 z-10">
            
            <!-- Eyebrow -->
            <span class="hero-animate-up text-xs font-bold uppercase tracking-[0.08em] text-[#0C3B78] block mb-3.5 sm:mb-4">
              ${hero.eyebrow}
            </span>

            <!-- Título Principal -->
            <h1 id="hero-title" class="hero-animate-up font-display text-[40px] sm:text-5xl lg:text-[clamp(52px,4.2vw,70px)] font-extrabold text-[#0F141C] tracking-[-0.04em] leading-[0.98] mb-6 max-w-[560px]" style="animation-delay: 80ms;">
              Conforto começa com um serviço <span class="text-[#0090D0]">bem executado.</span>
            </h1>

            <!-- Texto de apoio -->
            <p class="hero-animate-up font-body text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-[520px] mb-8 sm:mb-9" style="animation-delay: 160ms;">
              ${hero.description}
            </p>

            <!-- CTAs -->
            <div class="hero-animate-up flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto mb-7" style="animation-delay: 240ms;">
              <button type="button" data-open-quote class="btn-primary !h-[54px] sm:!h-[56px] !px-8 !rounded-[10px] !text-[15.5px] font-semibold shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
                <span>${hero.primaryCta}</span>
                <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <a href="#servicos" class="link-editorial group inline-flex items-center gap-2.5 py-3 px-2 sm:px-3 text-[#0C3B78] hover:text-[#0090D0] font-semibold text-[15.5px] transition-colors duration-200">
                <span>${hero.secondaryCta}</span>
                <svg class="w-4 h-4 text-[#0090D0] transform transition-transform duration-200 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <!-- Prova Local abaixo dos botões -->
            <div class="hero-animate-up inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-slate-50/90 border border-slate-200/80 text-xs sm:text-[13px] text-slate-600 font-medium" style="animation-delay: 320ms;">
              <svg class="w-3.5 h-3.5 text-[#0090D0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Sede própria em Ijuí/RS <span class="text-slate-300 mx-1">|</span> Atendimento em toda a região</span>
            </div>

          </div>

          <!-- Coluna Direita: Fotografia Integrada (54%) -->
          <div class="relative w-full h-[380px] sm:h-[480px] lg:h-[600px] lg:max-h-[640px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xs">
            <!-- Fade sutil na lateral esquerda no desktop para fusão suave com o fundo -->
            <div class="hidden lg:block absolute inset-0 pointer-events-none z-10" style="background: linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 10%, rgba(255,255,255,0) 24%);"></div>

            <img 
              src="${hero.image.url}" 
              alt="${hero.image.alt}" 
              class="hero-animate-scale w-full h-full object-cover object-[center_20%] lg:object-center filter contrast-[1.02]"
              loading="eager"
              fetchpriority="high"
              width="1024"
              height="768"
            >
          </div>

        </div>
      </div>
    </section>
  `;
}
