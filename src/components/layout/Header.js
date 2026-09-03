import { siteConfig } from '../../data/site.js';

export function renderHeader() {
  const { company, navigation } = siteConfig;

  const navLinksHtml = navigation.map(item => `
    <a href="${item.href}" class="nav-link">
      ${item.label}
    </a>
  `).join('');

  const mobileNavLinksHtml = navigation.map(item => `
    <a href="${item.href}" class="mobile-nav-link text-lg font-medium text-slate-900 hover:text-[#0C3B78] py-2.5 border-b border-slate-100 transition-colors">
      ${item.label}
    </a>
  `).join('');

  return `
    <!-- Top Notice / Status Bar (Compacto & Objetivo) -->
    <aside class="bg-[#0C111A] text-slate-300 text-xs py-2 px-4 border-b border-white/5" aria-label="Informações de atendimento">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#0090D0] animate-pulse"></span>
          <span class="tracking-wide">Atendimento especializado em <strong>${company.locationString}</strong> e região</span>
        </div>
        <div class="flex items-center gap-6 text-slate-400">
          <span class="hidden md:inline">${company.hours.weekdays}</span>
          <a href="https://wa.me/${company.whatsappRaw}?text=Olá!%20Gostaria%20de%20falar%20com%20o%20atendimento%20da%20Ijuí%20Clima." target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors">
            <svg class="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Plantão WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>

    <!-- Main Header Reconstruído -->
    <header id="main-header" class="sticky top-0 z-40 w-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] py-5 sm:py-7 border-b border-transparent">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        <!-- Logo com presença e nitidez superior -->
        <a href="#" class="flex items-center gap-3 group focus:outline-none rounded-md py-1" aria-label="${company.name} - Início">
          <div class="h-14 sm:h-[4.25rem] flex items-center">
            <img src="/images/logo-ijui-clima.png" alt="${company.name}" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" width="175" height="56">
          </div>
        </a>

        <!-- Navegação Desktop Equilibrada (15px, peso 500, indicador inferior sutil) -->
        <nav class="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Navegação Principal">
          ${navLinksHtml}
        </nav>

        <!-- CTA & Menu Mobile -->
        <div class="flex items-center gap-3 sm:gap-4">
          <button type="button" data-open-quote class="btn-primary !h-12 !px-6 !text-sm !hidden sm:!inline-flex">
            <span>Solicitar orçamento</span>
            <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>

          <!-- Toggle Mobile -->
          <button id="mobile-menu-toggle" type="button" class="lg:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-none rounded-md" aria-label="Abrir menu de navegação" aria-expanded="false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Menu Sofisticado -->
    <div id="mobile-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden"></div>
    <div id="mobile-drawer" class="fixed inset-y-0 right-0 max-w-sm w-full bg-white z-50 p-6 sm:p-8 shadow-2xl transform translate-x-full invisible transition-transform duration-300 ease-out flex flex-col justify-between lg:hidden">
      <div>
        <div class="flex items-center justify-between pb-6 border-b border-slate-100">
          <img src="/images/logo-ijui-clima.png" alt="${company.name}" class="h-9 w-auto">
          <button id="mobile-menu-close" type="button" class="p-2 text-slate-400 hover:text-slate-800 focus:outline-none rounded-md" aria-label="Fechar menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <nav class="mt-6 flex flex-col gap-2" aria-label="Navegação móvel">
          ${mobileNavLinksHtml}
        </nav>
      </div>

      <div class="pt-6 border-t border-slate-100 flex flex-col gap-3">
        <button type="button" data-open-quote class="btn-primary w-full justify-center !h-12 !text-sm">
          <span>Solicitar orçamento</span>
          <svg class="btn-icon-arrow w-4 h-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
        <a href="https://wa.me/${company.whatsappRaw}?text=Olá!%20Vim%20pelo%20site%20da%20Ijuí%20Clima%20e%20gostaria%20de%20um%20atendimento." target="_blank" rel="noopener noreferrer" class="btn-secondary w-full justify-center !h-12 !text-sm">
          <svg class="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>WhatsApp Direto</span>
        </a>
        <p class="text-xs text-center text-slate-400 mt-1">${company.locationString}</p>
      </div>
    </div>
  `;
}
