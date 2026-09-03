import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { siteConfig } from '../src/data/site.js';
import { renderHeader } from '../src/components/layout/Header.js';
import { renderHero } from '../src/components/sections/Hero.js';
import { renderTrustBar } from '../src/components/sections/TrustBar.js';
import { renderServices } from '../src/components/sections/Services.js';
import { renderInstallation } from '../src/components/sections/Installation.js';
import { renderProcess } from '../src/components/sections/Process.js';
import { renderSolutions } from '../src/components/sections/Solutions.js';
import { renderDifferentials } from '../src/components/sections/Differentials.js';
import { renderProjects } from '../src/components/sections/Projects.js';
import { renderAbout } from '../src/components/sections/About.js';
import { renderFAQ } from '../src/components/sections/FAQ.js';
import { renderFinalCTA } from '../src/components/sections/FinalCTA.js';
import { renderFooter } from '../src/components/layout/Footer.js';
import { renderQuickQuoteModal } from '../src/components/ui/QuickQuoteModal.js';
import { renderFloatingWhatsApp } from '../src/components/ui/FloatingWhatsApp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const appHtml = `
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

const template = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags Oficiais -->
  <title>${siteConfig.seo.title}</title>
  <meta name="description" content="${siteConfig.seo.description}">
  <meta name="keywords" content="ar-condicionado Ijuí, instalação de ar-condicionado em Ijuí, manutenção de ar-condicionado em Ijuí, higienização de ar-condicionado, limpeza de ar-condicionado, climatização residencial, climatização empresarial, instalação de split">
  <meta name="author" content="Ijuí Clima">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${siteConfig.seo.canonicalUrl}">
  <meta name="geo.region" content="BR-RS">
  <meta name="geo.placename" content="Ijuí">

  <!-- OpenGraph / Social Meta -->
  <meta property="og:site_name" content="Ijuí Clima">
  <meta property="og:type" content="business.business">
  <meta property="og:title" content="${siteConfig.seo.title}">
  <meta property="og:description" content="${siteConfig.seo.description}">
  <meta property="og:url" content="${siteConfig.seo.canonicalUrl}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:image" content="${siteConfig.seo.canonicalUrl}images/logo-ijui-clima.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${siteConfig.seo.title}">
  <meta name="twitter:description" content="${siteConfig.seo.description}">
  <meta name="twitter:image" content="${siteConfig.seo.canonicalUrl}images/logo-ijui-clima.png">

  <!-- Favicon Oficial -->
  <link rel="icon" type="image/png" href="/images/logo-ijui-clima.png">

  <!-- Preload da Imagem Principal do Hero (LCP Optimization) -->
  <link rel="preload" as="image" href="${siteConfig.hero.image.url}" fetchpriority="high">

  <!-- Google Fonts: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">

  <!-- Schema.org JSON-LD Structured Data: LocalBusiness, Services & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": "https://ijuiclima.com.br/#business",
        "name": "Ijuí Clima",
        "url": "https://ijuiclima.com.br/",
        "logo": "https://ijuiclima.com.br/images/logo-ijui-clima.png",
        "image": "https://ijuiclima.com.br/images/logo-ijui-clima.png",
        "description": "Especialistas em instalação, higienização e manutenção preventiva de ar-condicionado e climatização residencial e empresarial em Ijuí - RS.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ijuí",
          "addressRegion": "RS",
          "addressCountry": "BR"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Ijuí"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Região Noroeste do Rio Grande do Sul"
          }
        ],
        "priceRange": "$$",
        "telephone": "+5555999999999",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "12:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Climatização em Ijuí",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalação de Ar-Condicionado em Ijuí",
                "description": "Instalação com tubulação 100% cobre, vácuo com vacuômetro digital e acabamento profissional."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manutenção Preventiva de Ar-Condicionado em Ijuí",
                "description": "Revisão periódica de pressões e componentes para economia de energia e longevidade do compressor."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Higienização e Limpeza de Ar-Condicionado em Ijuí",
                "description": "Sanitização química profunda contra ácaros, fungos e odores para ambientes residenciais e comerciais."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ijuiclima.com.br/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto custa instalar um ar-condicionado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O custo de instalação varia de acordo com a capacidade do aparelho em BTUs, a distância da tubulação de cobre entre a evaporadora interna e a condensadora externa (respeitando a metragem mínima recomendada pelo fabricante), a complexidade de fixação e a infraestrutura elétrica disponível. Realizamos uma avaliação prévia objetiva para apresentar uma proposta clara e sem custos ocultos."
            }
          },
          {
            "@type": "Question",
            "name": "Como saber qual capacidade de ar-condicionado preciso?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O dimensionamento térmico considera a área em metros quadrados, a incidência de sol durante o dia (manhã ou tarde), o número de aberturas de vidro, a circulação média de pessoas e os equipamentos eletroeletrônicos no local. Avaliamos esses fatores para indicar a capacidade exata em BTUs, evitando aparelhos subdimensionados que gastam mais energia."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês instalam aparelhos comprados em outras lojas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Fazemos a instalação de equipamentos novos adquiridos em qualquer loja física ou pela internet. O serviço é executado conforme os manuais técnicos de garantia (tubulação 100% cobre, vácuo com vacuômetro digital e teste de estanqueidade), preservando a garantia oficial do fabricante."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a importância da manutenção preventiva?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A manutenção preventiva periódica remove o acúmulo de poeira nas serpentinas e turbina, permitindo que o compressor funcione na temperatura e pressão corretas. Isso reduz o consumo de energia elétrica em até 30%, diminui o risco de quebras no auge do verão e evita pingadeiras em paredes e móveis."
            }
          },
          {
            "@type": "Question",
            "name": "Com que frequência devo limpar ou higienizar o aparelho?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Em residências, os filtros laváveis devem ser limpos pelo usuário uma vez por mês, enquanto a higienização química profunda profissional das partes internas deve ser feita a cada 6 a 12 meses. Em clínicas, escritórios e comércios com fluxo diário constante, a higienização técnica deve ser feita semestralmente ou trimestralmente."
            }
          },
          {
            "@type": "Question",
            "name": "A Ijuí Clima atende empresas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Atendemos empresas, clínicas, escritórios, consultórios e lojas em Ijuí e região, oferecendo instalação, reparos pontuais e contratos de manutenção preventiva com horários programados."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês atendem outras cidades além de Ijuí?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O atendimento diário principal é concentrado no município de Ijuí — RS. Cidades vizinhas da região noroeste gaúcha são atendidas mediante consulta prévia de disponibilidade para serviços e instalações completas."
            }
          },
          {
            "@type": "Question",
            "name": "Como solicitar um orçamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Você pode solicitar um orçamento diretamente pelo WhatsApp clicando nos botões disponíveis na página ou através do formulário rápido de pré-orçamento. Se puder indicar o tipo de serviço, o tamanho aproximado do cômodo ou enviar fotos do local, agilizamos o retorno com a proposta correspondente."
            }
          }
        ]
      }
    ]
  }
  </script>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body class="bg-[#FBFBFB] text-[#0F141C] antialiased selection:bg-[#0C3B78] selection:text-white flex flex-col min-h-screen">

  <!-- A11y Skip Link -->
  <a href="#conteudo-principal" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0C3B78] focus:text-white focus:rounded-md focus:shadow-md">
    Pular para o conteúdo principal
  </a>

  <!-- Application Mount Target (Pre-rendered for ultra-fast SEO and instant LCP) -->
  <div id="app" class="flex flex-col min-h-screen">
    <!-- APP_INJECTION_TARGET -->
  </div>

  <!-- Main JavaScript Controller -->
  <script type="module" src="/src/main.js"></script>
</body>
</html>`;

const finalHtml = template.replace('<!-- APP_INJECTION_TARGET -->', appHtml);
fs.writeFileSync(path.join(rootDir, 'index.html'), finalHtml, 'utf8');
console.log('Successfully pre-rendered index.html with enriched SEO tags and modular components!');
