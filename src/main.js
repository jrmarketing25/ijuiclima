// Ijuí Clima — Modular Controller & Component Assembler
import './style.css';
import { siteConfig } from './data/site.js';
import { renderHeader } from './components/layout/Header.js';
import { renderHero } from './components/sections/Hero.js';
import { renderTrustBar } from './components/sections/TrustBar.js';
import { renderServices } from './components/sections/Services.js';
import { renderInstallation } from './components/sections/Installation.js';
import { renderProcess } from './components/sections/Process.js';
import { renderSolutions } from './components/sections/Solutions.js';
import { renderDifferentials } from './components/sections/Differentials.js';
import { renderProjects } from './components/sections/Projects.js';
import { renderAbout } from './components/sections/About.js';
import { renderFAQ } from './components/sections/FAQ.js';
import { renderFinalCTA } from './components/sections/FinalCTA.js';
import { renderFooter } from './components/layout/Footer.js';
import { renderQuickQuoteModal } from './components/ui/QuickQuoteModal.js';
import { renderFloatingWhatsApp } from './components/ui/FloatingWhatsApp.js';

// Assemble the Modular DOM if not already pre-rendered
function assembleApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // If already pre-rendered statically, do not recreate DOM
  if (appContainer.children.length > 0) return;

  appContainer.innerHTML = `
    ${renderHeader()}
    <main id="conteudo-principal">
      ${renderHero()}
      ${renderTrustBar()}
      ${renderServices()}
      ${renderInstallation()}
      ${renderProcess()}
      ${renderSolutions()}
      ${renderDifferentials()}
      ${renderProjects()}
      ${renderAbout()}
      ${renderFAQ()}
      ${renderFinalCTA()}
    </main>
    ${renderFooter()}
    ${renderFloatingWhatsApp()}
    ${renderQuickQuoteModal()}
  `;
}

// Initialize Interactive Behaviors
document.addEventListener('DOMContentLoaded', () => {
  assembleApp();
  initStickyHeader();
  initMobileMenu();
  initFaqAccordion();
  initQuoteModal();
  initScrollReveal();
  initActiveNav();
  initServicesHover();
});

// 1. Sticky Header with Scroll Threshold
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-xs', 'py-2.5', 'sm:py-3.5');
      header.classList.remove('py-3.5', 'sm:py-5', 'lg:py-7', 'bg-transparent');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-xs', 'py-2.5', 'sm:py-3.5');
      header.classList.add('py-3.5', 'sm:py-5', 'lg:py-7', 'bg-transparent');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. Mobile Drawer Navigation
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full', 'invisible');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full', 'invisible');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) {
      closeDrawer();
    }
  });
}

// 4. Accessible FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 5. Quick Quote / WhatsApp Lead Modal
function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const backdrop = document.getElementById('quote-modal-backdrop');
  const openButtons = document.querySelectorAll('[data-open-quote]');
  const closeButton = document.getElementById('close-quote-modal');
  const quoteForm = document.getElementById('quote-form');

  if (!modal || !backdrop) return;

  const openModal = (defaultService = '') => {
    modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    modal.classList.add('opacity-100', 'scale-100');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');

    if (defaultService && quoteForm) {
      const radios = quoteForm.querySelectorAll('input[name="service"]');
      radios.forEach(radio => {
        if (radio.value.toLowerCase().includes(defaultService.toLowerCase()) || defaultService.toLowerCase().includes(radio.value.toLowerCase())) {
          radio.checked = true;
        }
      });
    }
  };

  const closeModal = () => {
    modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    modal.classList.remove('opacity-100', 'scale-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeButton) closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(quoteForm);
      const service = formData.get('service') || 'Instalação';
      const property = formData.get('property') || 'Residencial';
      const city = formData.get('city') || siteConfig.company.locationString;
      const details = formData.get('details') || '';

      const phone = siteConfig.company.whatsappRaw;
      const text = `Olá, Ijuí Clima! Gostaria de solicitar um orçamento:%0A%0A*Serviço:* ${encodeURIComponent(service)}%0A*Tipo de Imóvel:* ${encodeURIComponent(property)}%0A*Localização:* ${encodeURIComponent(city)}${details ? `%0A*Observação:* ${encodeURIComponent(details)}` : ''}%0A%0APoderiam me informar disponibilidade e proposta?`;

      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
      closeModal();
    });
  }
}

// 6. Services Hover Image Swap
function initServicesHover() {
  const serviceItems = document.querySelectorAll('.service-item');
  const featuredImg = document.getElementById('service-featured-img');
  
  if (!featuredImg || serviceItems.length === 0) return;

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const newSrc = item.getAttribute('data-service-img');
      if (newSrc && featuredImg.src !== newSrc && !featuredImg.src.endsWith(newSrc)) {
        featuredImg.style.opacity = '0';
        featuredImg.style.transform = 'scale(1.02)';
        setTimeout(() => {
          featuredImg.src = newSrc;
          featuredImg.style.opacity = '1';
          featuredImg.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });
}

// 7. Scroll Reveal Observer V2
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-fade, .reveal-line-x, .reveal-line-y');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Obey stagger if using transition-delay
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '60px 0px 60px 0px', // Trigger smoothly slightly before entry
    threshold: 0
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// 7. Active Nav Link Intersection Observer
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active-nav-link');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-nav-link');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px', // Center region of viewport
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}
