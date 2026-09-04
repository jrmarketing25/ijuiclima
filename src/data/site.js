// Ijuí Clima — Configuração e Conteúdo Centralizado V2
// 100% FOTOGRAFIAS REAIS da Ijuí Clima otimizadas em WebP (/public/images/ijui-clima/).
// Zero fotografias stock genéricas. Nomes web-safe normalizados.

export const siteConfig = {
  company: {
    name: "Ijuí Clima",
    legalName: "Ijuí Clima — Climatização Residencial e Empresarial",
    city: "Ijuí",
    state: "RS",
    locationString: "Ijuí — Rio Grande do Sul",
    regionCovered: "Ijuí e região noroeste gaúcha",
    
    phone: "(55) 99236-8448",
    phoneRaw: "5555992368448",
    whatsapp: "(55) 99236-8448",
    whatsappRaw: "5555992368448",
    email: "contato@ijuiclima.com.br",
    instagram: "@ijui_clima",
    instagramUrl: "https://www.instagram.com/ijui_clima/",
    
    hours: {
      weekdays: "Segunda a Sexta: 08:00 às 18:00",
      saturday: "Sábado: 08:00 às 12:00",
      sunday: "Fechado"
    },
    
    address: {
      street: "R. Albino Brendler, 554",
      neighborhood: "Centro",
      city: "Ijuí",
      state: "RS",
      country: "Brasil"
    }
  },

  seo: {
    title: "Ijuí Clima | Instalação e Manutenção de Ar-Condicionado em Ijuí",
    description: "Instalação, manutenção e higienização de ar-condicionado em Ijuí. Atendimento profissional para residências e empresas. Solicite seu orçamento.",
    canonicalUrl: "https://ijuiclima.com.br/",
    ogImage: "/images/logo-ijui-clima.png"
  },

  navigation: [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como trabalhamos", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" }
  ],

  hero: {
    eyebrow: "CLIMATIZAÇÃO PROFISSIONAL • IJUÍ/RS",
    headline: "Climatização profissional para o conforto do seu ambiente.",
    description: "Instalação, manutenção e higienização de ar-condicionado com atendimento especializado, cuidado técnico e acabamento profissional.",
    primaryCta: "Solicitar orçamento",
    secondaryCta: "Conhecer serviços",
    segments: "Residencial • Comercial • Empresarial",
    image: {
      url: "/images/ijui-clima/fachada-nova.webp",
      alt: "Fachada oficial da Ijuí Clima",
      width: 700,
      height: 900
    },
  },

  trustBar: [
    "Instalação profissional",
    "Manutenção especializada",
    "Atendimento residencial e empresarial",
    "Ijuí e região"
  ],

  services: {
    title: "Soluções completas em climatização.",
    description: "Da instalação ao cuidado periódico do equipamento, serviços pensados para manter eficiência, conforto e segurança.",
    items: [
      {
        number: "01",
        title: "Instalação de ar-condicionado",
        description: "Execução nos padrões dos fabricantes, com tubulação 100% cobre, processo de vácuo profundo e acabamento alinhado.",
        tag: "Hi-Wall • Multi-Split • Cassete",
        image: "/images/ijui-clima/instalacao-nova.webp",
        alt: "Técnico uniformizado da Ijuí Clima realizando instalação e alinhamento de ar-condicionado Split"
      },
      {
        number: "02",
        title: "Manutenção preventiva",
        description: "Revisão periódica de corrente elétrica, medição de pressões, desobstrução de drenos e limpeza técnica para economia de energia.",
        tag: "Eficiência • Menor Consumo",
        image: "/images/ijui-clima/manutencao-preventiva-nova.webp",
        alt: "Técnico da Ijuí Clima realizando revisão e manutenção de evaporadora de ar-condicionado"
      },
      {
        number: "03",
        title: "Manutenção corretiva",
        description: "Diagnóstico objetivo de vazamentos de fluido refrigerante, testes em placas Inverter e reparo seguro de componentes.",
        tag: "Diagnóstico Objetivo • Reparo Seguro",
        image: "/images/ijui-clima/manutencao-corretiva-nova.webp",
        alt: "Diagnóstico técnico e medição de pressão em sistema de refrigeração pela Ijuí Clima"
      },
      {
        number: "04",
        title: "Higienização e limpeza",
        description: "Desmontagem técnica da evaporadora para sanitização profunda de serpentina, turbina e bandeja, eliminando ácaros, mofo e odores.",
        tag: "Saúde Respiratória • Sanitização",
        image: "/images/ijui-clima/higienizacao-nova.webp",
        alt: "Procedimento técnico de higienização e limpeza de serpentina e filtros de ar-condicionado"
      },
      {
        number: "05",
        title: "Climatização residencial",
        description: "Planejamento térmico adequado para quartos, salas e residências em Ijuí, assegurando operação silenciosa e preservação estética.",
        tag: "Casas • Apartamentos",
        image: "/images/ijui-clima/climatizacao-residencial-nova.webp",
        alt: "Instalação de ar-condicionado Split em ambiente residencial com acabamento ripado"
      },
      {
        number: "06",
        title: "Climatização empresarial",
        description: "Atendimento voltado a escritórios, lojas, clínicas e comércios, com manutenção programada e flexibilidade de horários.",
        tag: "Comércios • Escritórios • Clínicas",
        image: "/images/ijui-clima/climatizacao-empresarial-nova.webp",
        alt: "Climatização empresarial com unidade Cassete de 4 vias instalada em ambiente corporativo"
      }
    ]
  },

  installation: {
    headline: "Uma boa climatização começa por uma instalação bem executada.",
    text: "Uma instalação profissional ajuda o equipamento a trabalhar corretamente, reduz riscos de problemas futuros e contribui para eficiência, segurança e acabamento do ambiente.",
    image: {
      url: "/images/ijui-clima/ijui-clima-12.webp",
      alt: "Técnico da Ijuí Clima executando instalação de ar-condicionado com alinhamento milimétrico"
    },
    pillars: [
      {
        title: "Eficiência",
        description: "O equipamento alcança o ponto térmico programado com menor consumo de energia e sem sobrecarregar o compressor."
      },
      {
        title: "Segurança",
        description: "Conexões elétricas protegidas e fixação estrutural rígida para evaporadoras e condensadoras externas."
      },
      {
        title: "Durabilidade",
        description: "Processo rigoroso de desidratação (vácuo profundo) que impede acidez prejudicial ao óleo lubrificante do motor."
      },
      {
        title: "Acabamento",
        description: "Passagem limpa e discreta das linhas frigoríficas, furações vedadas e respeito ao acabamento das paredes."
      }
    ]
  },

  process: {
    headline: "Simples para você. Cuidadoso em cada etapa.",
    description: "Do primeiro contato à entrega, cada etapa é conduzida de forma clara e organizada.",
    steps: [
      {
        number: "01",
        title: "Solicitação",
        description: "Você nos explica o que precisa."
      },
      {
        number: "02",
        title: "Avaliação",
        description: "Entendemos o ambiente e a necessidade."
      },
      {
        number: "03",
        title: "Orçamento",
        description: "Apresentamos a solução e o investimento."
      },
      {
        number: "04",
        title: "Execução",
        description: "Realizamos o serviço com organização e cuidado."
      },
      {
        number: "05",
        title: "Finalização",
        description: "Testamos o equipamento e orientamos o cliente."
      }
    ]
  },

  solutions: {
    residential: {
      badge: "RESIDENCIAL",
      headline: "Conforto para os ambientes que fazem parte da sua rotina.",
      text: "Climatização de casas, apartamentos, quartos, salas e demais ambientes residenciais.",
      image: "/images/ijui-clima/espaco-residencial.webp",
      alt: "Ambiente residencial com climatização silenciosa integrada de forma discreta",
      highlights: [
        "Aparelhos com baixo nível de ruído para noites de sono tranquilas",
        "Estudo de fluxo de ar para não incidir diretamente sobre sofás e camas",
        "Preservação do acabamento em gesso, pintura e móveis planejados"
      ]
    },
    corporate: {
      badge: "EMPRESARIAL",
      headline: "Climatização profissional para o seu negócio.",
      text: "Soluções para escritórios, lojas, consultórios, espaços comerciais e empresas.",
      image: "/images/ijui-clima/espaco-empresarial.webp",
      alt: "Sala corporativa de reuniões com ar-condicionado Cassete embutido no teto",
      highlights: [
        "Estabilidade térmica contínua para equipes de trabalho e clientes",
        "Contratos de revisão programada para prevenção de paradas inesperadas",
        "Atendimento com agenda flexível para não interferir no fluxo de clientes"
      ]
    }
  },

  differentials: {
    headline: "O detalhe também faz parte do serviço.",
    items: [
      {
        number: "01",
        title: "Atendimento profissional",
        description: "Comunicação clara, pontualidade no agendamento e transparência em todas as orientações prestadas."
      },
      {
        number: "02",
        title: "Organização durante o serviço",
        description: "Utilização de proteções para pisos e móveis, mantendo a rotina do imóvel com o mínimo de interferência."
      },
      {
        number: "03",
        title: "Cuidado com o ambiente",
        description: "Ao término do trabalho, o local é entregue rigorosamente limpo e organizado para uso imediato."
      },
      {
        number: "04",
        title: "Orientação técnica",
        description: "Explicação prática sobre as funções do controle remoto, modos de economia e frequência de limpeza de telas."
      },
      {
        number: "05",
        title: "Atenção ao acabamento",
        description: "Alinhamento com nível das unidades, furações vedadas contra infiltração e cabos organizados."
      },
      {
        number: "06",
        title: "Solução adequada a cada necessidade",
        description: "Dimensionamento exato de carga térmica (BTUs) para que o investimento atenda à realidade do seu espaço."
      }
    ]
  },

  projects: {
    title: "Serviços realizados",
    description: "Alguns trabalhos executados pela Ijuí Clima.",
    notice: "Registros de execuções reais em Ijuí e região.",
    items: [
      {
        id: "proj-1",
        isMain: true,
        title: "Instalação de Bateria de Condensadoras em Cobertura",
        category: "Climatização Comercial",
        location: "Ijuí — RS",
        image: "/images/ijui-clima/splits-em-series.webp",
        alt: "Bateria de unidades condensadoras de ar-condicionado instaladas em cobertura pela Ijuí Clima"
      },
      {
        id: "proj-2",
        isMain: false,
        title: "Climatização Cassete para Sala de Reuniões",
        category: "Corporativo",
        location: "Ijuí — RS",
        image: "/images/ijui-clima/espaco-empresarial.webp",
        alt: "Sala corporativa de reuniões com ar-condicionado Cassete de 4 vias instalado pela Ijuí Clima"
      },
      {
        id: "proj-3",
        isMain: false,
        title: "Instalação Residencial de Split com Alinhamento Técnico",
        category: "Residencial",
        location: "Ijuí — RS",
        image: "/images/ijui-clima/colaborador-trabalhando.webp",
        alt: "Técnico da Ijuí Clima executando instalação de split residencial com alinhamento e precisão"
      },
      {
        id: "proj-4",
        isMain: false,
        title: "Revisão Técnica de Pressão e Diagnóstico de Fluido",
        category: "Manutenção",
        location: "Ijuí — RS",
        image: "/images/ijui-clima/manutencao.webp",
        alt: "Medição de pressão de fluido refrigerante com manifold executada por técnico da Ijuí Clima"
      }
    ]
  },

  about: {
    headline: "Climatização feita com responsabilidade.",
    copy: "A Ijuí Clima oferece soluções em climatização para clientes residenciais e empresariais em Ijuí e região, com foco em atendimento profissional, cuidado técnico e qualidade na execução.",
    image: {
      url: "/images/ijui-clima/Equipe.webp",
      alt: "Equipe técnica e instaladores profissionais uniformizados da Ijuí Clima"
    },
    facilityImage: {
      url: "/images/ijui-clima/fachada-empresa.webp",
      alt: "Fachada da sede da Ijuí Clima em Ijuí - RS"
    },
    vehicleImage: {
      url: "/images/ijui-clima/veiculo-ijui-clima.webp",
      alt: "Veículo oficial de atendimento e instalação da Ijuí Clima"
    },
    pillars: [
      {
        label: "Compromisso Técnico",
        text: "Trabalho realizado com ferramental de precisão e materiais em conformidade com as exigências dos fabricantes."
      },
      {
        label: "Atendimento Local",
        text: "Sede em Ijuí — RS para garantir rapidez de resposta, pontualidade e facilidade de contato."
      },
      {
        label: "Transparência",
        text: "Orçamentos claros com detalhamento dos serviços a serem executados, sem surpresas."
      }
    ]
  },

  faq: [
    {
      question: "Quanto custa instalar um ar-condicionado?",
      answer: "O custo de instalação varia de acordo com a capacidade do aparelho em BTUs, a distância da tubulação de cobre entre a evaporadora interna e a condensadora externa (respeitando a metragem mínima recomendada pelo fabricante), a complexidade de fixação e a infraestrutura elétrica disponível. Realizamos uma avaliação prévia objetiva para apresentar uma proposta clara e sem custos ocultos."
    },
    {
      question: "Como saber qual capacidade de ar-condicionado preciso?",
      answer: "O dimensionamento térmico considera a área em metros quadrados, a incidência de sol durante o dia (manhã ou tarde), o número de aberturas de vidro, a circulação média de pessoas e os equipamentos eletroeletrônicos no local. Avaliamos esses fatores para indicar a capacidade exata em BTUs, evitando aparelhos subdimensionados que gastam mais energia."
    },
    {
      question: "Vocês instalam aparelhos comprados em outras lojas?",
      answer: "Sim! Fazemos a instalação de equipamentos novos adquiridos em qualquer loja física ou pela internet. O serviço é executado conforme os manuais técnicos de garantia (tubulação 100% cobre, vácuo com vacuômetro digital e teste de estanqueidade), preservando a garantia oficial do fabricante."
    },
    {
      question: "Qual a importância da manutenção preventiva?",
      answer: "A manutenção preventiva periódica remove o acúmulo de poeira nas serpentinas e turbina, permitindo que o compressor funcione na temperatura e pressão corretas. Isso reduz o consumo de energia elétrica em até 30%, diminui o risco de quebras no auge do verão e evita pingadeiras em paredes e móveis."
    },
    {
      question: "Com que frequência devo limpar ou higienizar o aparelho?",
      answer: "Em residências, os filtros laváveis devem ser limpos pelo usuário uma vez por mês, enquanto a higienização química profunda profissional das partes internas deve ser feita a cada 6 a 12 meses. Em clínicas, escritórios e comércios com fluxo diário constante, a higienização técnica deve ser feita semestralmente ou trimestralmente."
    },
    {
      question: "A Ijuí Clima atende empresas?",
      answer: "Sim. Atendemos empresas, clínicas, escritórios, consultórios e lojas em Ijuí e região, oferecendo instalação, reparos pontuais e contratos de manutenção preventiva com horários programados."
    },
    {
      question: "Vocês atendem outras cidades além de Ijuí?",
      answer: "O atendimento diário principal é concentrado no município de Ijuí — RS. Cidades vizinhas da região noroeste gaúcha são atendidas mediante consulta prévia de disponibilidade para serviços e instalações completas."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "Você pode solicitar um orçamento diretamente pelo WhatsApp clicando nos botões disponíveis na página ou através do formulário rápido de pré-orçamento. Se puder indicar o tipo de serviço, o tamanho aproximado do cômodo ou enviar fotos do local, agilizamos o retorno com a proposta correspondente."
    }
  ],

  finalCta: {
    headline: "Conforto começa com uma climatização bem planejada.",
    text: "Fale com a Ijuí Clima e solicite seu orçamento.",
    buttonText: "Solicitar orçamento pelo WhatsApp",
    location: "Ijuí • Rio Grande do Sul"
  }
};
