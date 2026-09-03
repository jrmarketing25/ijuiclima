import { siteConfig } from '../../data/site.js';

export function renderFooter() {
  const { company } = siteConfig;

  return `
    <footer class="reveal-fade bg-[#080C12] text-slate-400 py-12 sm:py-16 border-t border-white/5" aria-labelledby="footer-title">
      <h2 id="footer-title" class="sr-only">Rodapé Institucional da ${company.name}</h2>
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <!-- Coluna 1: Marca (Logo com Maior Presença) -->
          <div class="lg:col-span-4">
            <a href="#" class="inline-block mb-6" aria-label="${company.name} - Início">
              <img src="/images/logo-ijui-clima.png" alt="${company.name}" class="h-12 sm:h-[3.25rem] w-auto object-contain brightness-110">
            </a>
            <p class="text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-sm mb-6">
              Especialistas em climatização residencial e empresarial em ${company.locationString}. Instalação técnica, manutenção preventiva e higienização com rigor de engenharia.
            </p>
            <div class="text-[13px] text-slate-400 flex items-center gap-2 font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>${company.regionCovered}</span>
            </div>
          </div>

          <!-- Coluna 2: Serviços -->
          <div class="lg:col-span-3">
            <h3 class="text-[13px] font-semibold uppercase tracking-wider text-slate-200 mb-4">Serviços</h3>
            <ul class="space-y-2.5 text-sm sm:text-[14.5px]">
              <li><a href="#servicos" class="hover:text-white transition-colors">Instalação de Ar-Condicionado</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Manutenção Preventiva</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Manutenção Corretiva</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Higienização e Limpeza</a></li>
              <li><a href="#solucoes" class="hover:text-white transition-colors">Climatização Residencial</a></li>
              <li><a href="#solucoes" class="hover:text-white transition-colors">Climatização Empresarial</a></li>
            </ul>
          </div>

          <!-- Coluna 3: Navegação -->
          <div class="lg:col-span-2">
            <h3 class="text-[13px] font-semibold uppercase tracking-wider text-slate-200 mb-4">Navegação</h3>
            <ul class="space-y-2.5 text-sm sm:text-[14.5px]">
              <li><a href="#servicos" class="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#processo" class="hover:text-white transition-colors">Como trabalhamos</a></li>
              <li><a href="#instalacao" class="hover:text-white transition-colors">Padrão de Instalação</a></li>
              <li><a href="#diferenciais" class="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#projetos" class="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#sobre" class="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <!-- Coluna 4: Contato -->
          <div class="lg:col-span-3">
            <h3 class="text-[13px] font-semibold uppercase tracking-wider text-slate-200 mb-4">Contato</h3>
            <ul class="space-y-3 text-sm sm:text-[14.5px]">
              <li class="flex items-start gap-2">
                <span class="text-white font-medium">Local:</span>
                <span>${company.address.street} - ${company.address.neighborhood}<br>${company.address.city} / ${company.address.state}</span>
              </li>
              <li>
                <span class="text-white font-medium">WhatsApp:</span>
                <a href="https://wa.me/${company.whatsappRaw}?text=Olá!%20Gostaria%20de%20um%20atendimento%20da%20Ijuí%20Clima." target="_blank" rel="noopener noreferrer" class="text-[#0090D0] hover:text-white block transition-colors font-medium">
                  ${company.whatsapp}
                </a>
              </li>
              <li>
                <span class="text-white font-medium">E-mail:</span>
                <a href="mailto:${company.email}" class="hover:text-white block transition-colors">
                  ${company.email}
                </a>
              </li>
              <li>
                <span class="text-white font-medium">Instagram:</span>
                <a href="${company.instagramUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-white block transition-colors">
                  ${company.instagram}
                </a>
              </li>
              <li class="pt-2 text-slate-400 text-[13px]">
                ${company.hours.weekdays}<br>${company.hours.saturday}
              </li>
            </ul>
          </div>

        </div>

        <!-- Rodapé Inferior com Separador Discreto -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p>&copy; ${new Date().getFullYear()} ${company.name}. Todos os direitos reservados. ${company.locationString}.</p>
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-slate-400 transition-colors">Política de Privacidade</a>
            <a href="#" class="hover:text-slate-400 transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
