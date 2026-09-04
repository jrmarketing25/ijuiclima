import { siteConfig } from '../../data/site.js';

export function renderHero() {
  const { hero } = siteConfig;

  return `
    <section class="relative bg-white pt-6 pb-12 sm:pb-16 lg:py-0 overflow-hidden" aria-labelledby="hero-title">
      
      <!-- Imagem de Fundo Integrada (Desktop) - preenche toda a metade direita e sangra até a borda -->
      <div class="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[56%] pointer-events-none z-0 overflow-hidden">
        <img 
          src="${hero.image.url}" 
          alt="${hero.image.alt}" 
          class="w-full h-full object-cover object-[center_right] filter contrast-[1.01]"
          loading="eager"
          fetchpriority="high"
          width="1024"
          height="768"
        >
        <!-- Fade gradiente suave da esquerda para a direita fundindo organicamente no fundo branco -->
        <div class="absolute inset-0" style="background: linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.95) 12%, rgba(255,255,255,0.55) 28%, rgba(255,255,255,0) 52%);"></div>
      </div>

      <div class="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-[50%_50%] xl:grid-cols-[48%_52%] items-center lg:min-h-[540px] lg:max-h-[600px]">
          
          <!-- Coluna Esquerda: Conteúdo -->
          <div class="flex flex-col items-start justify-center py-6 sm:py-8 lg:py-14 z-10 max-w-[560px]">
            
            <!-- Eyebrow -->
            <span class="hero-animate-up text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#0C3B78] block mb-4">
              ${hero.eyebrow}
            </span>

            <!-- Título Principal -->
            <h1 id="hero-title" class="hero-animate-up font-display text-[42px] sm:text-[52px] lg:text-[58px] xl:text-[64px] font-extrabold text-[#0F141C] tracking-[-0.035em] leading-[1.02] mb-5 sm:mb-6" style="animation-delay: 80ms;">
              Conforto começa<br>com um serviço<br><span class="text-[#0090D0]">bem executado.</span>
            </h1>

            <!-- Texto de apoio -->
            <p class="hero-animate-up font-body text-[15px] sm:text-[16px] text-slate-600 leading-[1.6] max-w-[490px] mb-7 sm:mb-8" style="animation-delay: 160ms;">
              Instalação, manutenção e higienização de ar-condicionado para residências e empresas, com atendimento técnico em Ijuí e região.
            </p>

            <!-- CTAs -->
            <div class="hero-animate-up flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-6 sm:mb-7" style="animation-delay: 240ms;">
              <button type="button" data-open-quote class="btn-primary !h-[50px] sm:!h-[52px] !px-7 sm:!px-8 !rounded-md !text-[15px] font-semibold shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
                <span>${hero.primaryCta}</span>
                <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <a href="#servicos" class="link-editorial group inline-flex items-center gap-2 py-2 px-1 text-[#0C3B78] hover:text-[#0090D0] font-semibold text-[15px] transition-colors duration-200">
                <span>${hero.secondaryCta}</span>
                <svg class="w-4 h-4 text-[#0090D0] transform transition-transform duration-200 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <!-- Prova Local abaixo dos botões -->
            <div class="hero-animate-up inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-white border border-slate-200/90 text-xs sm:text-[13px] text-slate-700 font-medium shadow-2xs" style="animation-delay: 320ms;">
              <svg class="w-3.5 h-3.5 text-[#0C3B78] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Sede própria em <span class="text-[#0090D0] font-semibold">Ijuí/RS</span> <span class="text-slate-300 mx-1.5">|</span> Atendimento em toda a região</span>
            </div>

          </div>

          <!-- Imagem no Mobile/Tablet (abaixo do conteúdo) -->
          <div class="block lg:hidden relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden mt-4">
            <img 
              src="${hero.image.url}" 
              alt="${hero.image.alt}" 
              class="w-full h-full object-cover object-center"
              loading="eager"
              width="1024"
              height="768"
            >
          </div>

        </div>
      </div>
    </section>
  `;
}
