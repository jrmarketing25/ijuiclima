import { siteConfig } from '../../data/site.js';

export function renderProjects() {
  const { projects } = siteConfig;

  const mainProject = projects.items.find(p => p.isMain) || projects.items[0];
  const secondaryProjects = projects.items.filter(p => !p.isMain);

  // secondaryProjects index 0 => delay 80
  // secondaryProjects index 1 => delay 160
  // secondaryProjects index 2 => delay 240
  const secondaryHtml = secondaryProjects.map((item, index) => {
    const delay = (index + 1) * 80;
    return `
      <article class="reveal-up group relative rounded overflow-hidden border border-white/10 bg-slate-900 aspect-[16/10] shadow-xs cursor-pointer" data-project-id="${item.id}" style="transition-delay: ${delay}ms;">
        <img 
          src="${item.image}" 
          alt="${item.alt || item.title}" 
          class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] filter brightness-95"
          loading="lazy"
          width="600"
          height="375"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 transition-opacity duration-[600ms] group-hover:bg-black/10">
          <div class="transform transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-mono font-semibold text-[#0090D0] uppercase tracking-wider">
                ${item.category}
              </span>
              <span class="text-[10px] text-slate-400 font-mono">
                ${item.location}
              </span>
            </div>
            <h3 class="font-display text-sm sm:text-base font-bold text-white leading-tight">
              ${item.title}
            </h3>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section id="projetos" class="py-16 sm:py-24 bg-[#0c111a] text-white" aria-labelledby="projetos-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <!-- Header da Seção -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div>
            <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0090D0] block mb-2">Acervo de Execuções</span>
            <h2 id="projetos-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold tracking-tight text-white leading-[1.1]" style="transition-delay: 80ms;">
              ${projects.title}
            </h2>
            <p class="reveal-up text-sm sm:text-base text-slate-400 mt-3" style="transition-delay: 140ms;">
              ${projects.description}
            </p>
          </div>
        </div>

        <!-- Grid Editorial Assimétrico -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Fotografia Principal Grande (60% - lg:col-span-7) -->
          <article class="reveal-up lg:col-span-7 group relative rounded overflow-hidden border border-white/10 bg-slate-900 aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[400px] shadow-xs cursor-pointer" data-project-id="${mainProject.id}">
            <img 
              src="${mainProject.image}" 
              alt="${mainProject.alt || mainProject.title}" 
              class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] filter brightness-95"
              loading="lazy"
              width="800"
              height="550"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 transition-colors duration-[600ms] group-hover:bg-black/10">
              <div class="transform transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-mono font-semibold text-[#0090D0] uppercase tracking-wider">
                    DESTAQUE • ${mainProject.category}
                  </span>
                  <span class="text-xs text-slate-400 font-mono">
                    ${mainProject.location}
                  </span>
                </div>
                <h3 class="font-display text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                  ${mainProject.title}
                </h3>
              </div>
            </div>
          </article>

          <!-- Fotografias Secundárias (40% - lg:col-span-5) -->
          <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            ${secondaryHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
