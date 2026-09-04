import { siteConfig } from '../../data/site.js';

export function renderHero() {
  const { hero } = siteConfig;

  return `
    <section class="relative bg-white pt-4 sm:pt-6 pb-10 sm:pb-14 lg:py-8 overflow-hidden" aria-labelledby="hero-title">
      <div class="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-8 lg:gap-0 items-center lg:min-h-[560px] lg:max-h-[620px]">
          
          <!-- Coluna Esquerda: Conteúdo (46%) -->
          <div class="flex flex-col items-start justify-center lg:py-6 lg:pr-8 xl:pr-10 z-10">
            
            <!-- Eyebrow -->
            <span class="hero-animate-up text-xs font-bold uppercase tracking-[0.08em] text-[#0C3B78] block mb-3.5">
              ${hero.eyebrow}
            </span>

            <!-- Título Principal -->
            <h1 id="hero-title" class="hero-animate-up font-display text-[38px] sm:text-5xl lg:text-[clamp(46px,4vw,62px)] font-extrabold text-[#0F141C] tracking-[-0.035em] leading-[1.02] mb-5 max-w-[560px]" style="animation-delay: 80ms;">
              Conforto começa com um serviço <span class="text-[#0090D0]">bem executado.</span>
            </h1>

            <!-- Texto de apoio -->
            <p class="hero-animate-up font-body text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-[540px] mb-7" style="animation-delay: 160ms;">
              ${hero.description}
            </p>

            <!-- CTAs -->
            <div class="hero-animate-up flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6" style="animation-delay: 240ms;">
              <button type="button" data-open-quote class="btn-primary !h-[54px] !px-8 !rounded-[10px] !text-[15px] shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
                <span>${hero.primaryCta}</span>
                <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <a href="#servicos" class="link-editorial group inline-flex items-center gap-2 py-3 px-2 sm:px-3 text-[#0C3B78] hover:text-[#0090D0] font-semibold text-[15px] transition-colors duration-200">
                <span>${hero.secondaryCta}</span>
                <svg class="w-4 h-4 text-[#0090D0] transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <!-- Prova Local abaixo dos botões -->
            <div class="hero-animate-up inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium" style="animation-delay: 320ms;">
              <span class="w-2 h-2 rounded-full bg-[#0090D0] animate-pulse"></span>
              <span>${hero.localProof}</span>
            </div>

          </div>

          <!-- Coluna Direita: Fotografia Integrada (54%) -->
          <div class="relative w-full h-[360px] sm:h-[460px] lg:h-[580px] lg:max-h-[620px] rounded-xl lg:rounded-2xl overflow-hidden">
            <!-- Fade sutil na lateral esquerda no desktop para fusão perfeita -->
            <div class="hidden lg:block absolute inset-0 pointer-events-none z-10" style="background: linear-gradient(90deg, rgba(255,255,255,.9) 0%, rgba(255,255,255,.35) 8%, rgba(255,255,255,0) 22%);"></div>

            <img 
              src="${hero.image.url}" 
              alt="${hero.image.alt}" 
              class="hero-animate-scale w-full h-full object-cover object-[center_20%] lg:object-center filter contrast-[1.02]"
              loading="eager"
              fetchpriority="high"
              width="1400"
              height="1050"
            >
          </div>

        </div>
      </div>
    </section>
  `;
}
