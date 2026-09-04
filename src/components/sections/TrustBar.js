import { siteConfig } from '../../data/site.js';

export function renderTrustBar() {
  const { trustBar } = siteConfig;

  const iconSvgs = {
    tool: `
      <svg class="w-5 h-5 text-[#0090D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    `,
    gear: `
      <svg class="w-5 h-5 text-[#0090D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    `,
    team: `
      <svg class="w-5 h-5 text-[#0090D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    `,
    location: `
      <svg class="w-5 h-5 text-[#0090D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    `
  };

  const itemsHtml = trustBar.map((item, index) => {
    const icon = iconSvgs[item.icon] || iconSvgs.tool;
    const paddingClasses = index === 0 
      ? 'lg:pr-8' 
      : index === trustBar.length - 1 
      ? 'lg:pl-8' 
      : 'lg:px-8';

    return `
      <div class="flex items-center gap-4 group py-2 sm:py-1.5 ${paddingClasses}">
        <div class="w-11 h-11 rounded-xl bg-blue-50/90 border border-blue-100/70 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-blue-100/80 group-hover:border-blue-200/90 shadow-2xs">
          ${icon}
        </div>
        <div class="min-w-0">
          <h3 class="text-[14.5px] font-bold text-slate-900 leading-tight tracking-tight">
            ${item.title}
          </h3>
          <p class="text-[12.5px] text-slate-500 leading-snug mt-1">
            ${item.description}
          </p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="bg-slate-50/80 border-y border-slate-200/75" aria-label="Diferenciais e Padrão de Atendimento">
      <div class="reveal-fade max-w-[1280px] mx-auto px-6 sm:px-8 py-6 lg:py-7">
        <div class="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
