import { siteConfig } from '../../data/site.js';

export function renderProcess() {
  const { process } = siteConfig;

  // Desktop: Clean step with hovering.
  const stepsDesktopHtml = process.steps.map((step, index) => `
    <article class="reveal-up process-step-item group relative flex-1 cursor-default" data-step-index="${index}" style="transition-delay: ${index * 120 + 200}ms;">
      
      <!-- Indicator Progress (animated line on hover for interactivity) -->
      <div class="absolute top-[-24px] left-0 h-[1px] bg-[#0C3B78] w-0 group-hover:w-full transition-all duration-350 ease-out z-10"></div>

      <!-- Large Clean Number -->
      <span class="block font-display font-light text-slate-300 group-hover:text-[#0C3B78] transition-colors duration-300 leading-none mb-3" style="font-size: clamp(40px, 4vw, 64px);">
        ${step.number}
      </span>

      <!-- Content -->
      <h3 class="font-display text-[15px] sm:text-base font-bold text-slate-500 group-hover:text-slate-900 transition-colors duration-300 mb-2">
        ${step.title}
      </h3>
      <p class="text-[14.5px] text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed pr-6">
        ${step.description}
      </p>

    </article>
  `).join('');

  // Mobile: Large number on left, vertical track, content right.
  const stepsMobileHtml = process.steps.map((step, index) => `
    <article class="reveal-up relative flex items-start gap-5 sm:gap-6 pb-8 sm:pb-9 last:pb-0" style="transition-delay: ${index * 120 + 100}ms;">
      
      <!-- Large Number on Left -->
      <div class="relative shrink-0 w-12 sm:w-16 flex flex-col items-center">
        <span class="font-display font-light text-[#0C3B78] leading-none z-10 bg-white pb-2" style="font-size: clamp(40px, 10vw, 48px);">
          ${step.number}
        </span>
        <!-- Subtle Vertical Track -->
        ${index < process.steps.length - 1 ? `
          <div class="absolute top-10 bottom-[-24px] w-[1px] bg-slate-100">
             <div class="reveal-line-y w-full h-full bg-[#0090D0]" style="transition-duration: 900ms; transition-delay: ${index * 120 + 200}ms;"></div>
          </div>
        ` : ''}
      </div>

      <!-- Content -->
      <div class="flex-1 pt-2">
        <h3 class="font-display text-[15px] sm:text-base font-bold text-slate-900 mb-1.5">
          ${step.title}
        </h3>
        <p class="text-[14.5px] text-slate-600 leading-relaxed">
          ${step.description}
        </p>
      </div>

    </article>
  `).join('');

  return `
    <section id="processo" class="py-20 sm:py-28 bg-white" aria-labelledby="processo-title">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="max-w-2xl mb-14 lg:mb-20">
          <span class="reveal-up text-xs font-semibold uppercase tracking-wider text-[#0C3B78] block mb-3">Metodologia Clara</span>
          <h2 id="processo-title" class="reveal-up font-display text-3xl sm:text-[clamp(36px,4vw,48px)] font-bold text-[#0F141C] tracking-tight leading-[1.1] mb-5" style="transition-delay: 80ms;">
            ${process.headline}
          </h2>
          <p class="reveal-up text-[15px] sm:text-base text-slate-600 leading-relaxed" style="transition-delay: 140ms;">
            ${process.description}
          </p>
        </div>

        <!-- Desktop Flow with Continuous Track -->
        <div class="hidden lg:flex flex-col relative">
          <!-- Horizontal Track Line -->
          <div class="absolute top-0 left-0 right-0 h-[1px] bg-slate-100">
             <!-- Progressive reveal line -->
             <div class="reveal-line-x h-full bg-[#0090D0]" style="transition-duration: 1100ms; transition-delay: 150ms;"></div>
          </div>

          <div class="flex items-start justify-between gap-6 pt-6">
            ${stepsDesktopHtml}
          </div>
        </div>

        <!-- Mobile / Tablet Flow -->
        <div class="lg:hidden">
          ${stepsMobileHtml}
        </div>

      </div>
    </section>
  `;
}
