import { siteConfig } from '../../data/site.js';

export function renderQuickQuoteModal() {
  const { company } = siteConfig;

  return `
    <div id="quote-modal-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 opacity-0 pointer-events-none transition-opacity duration-300"></div>
    
    <div id="quote-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none scale-95 transition-all duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        <div class="flex items-start justify-between mb-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#0C3B78]">Pré-Orçamento Ijuí Clima</span>
            <h3 id="modal-title" class="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Qual é a sua necessidade?
            </h3>
          </div>
          <button id="close-quote-modal" type="button" class="p-1.5 text-slate-400 hover:text-slate-700 rounded-md focus:outline-none" aria-label="Fechar diálogo">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form id="quote-form" class="space-y-4 text-left">
          
          <!-- Passo 1: Serviço -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">1. Selecione o Serviço</label>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="service" value="Instalação de ar-condicionado" checked class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Instalação</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="service" value="Manutenção preventiva" class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Preventiva</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="service" value="Higienização e limpeza" class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Higienização</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="service" value="Manutenção corretiva" class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Reparo / Conserto</span>
              </label>
            </div>
          </div>

          <!-- Passo 2: Tipo de Imóvel -->
          <div>
            <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">2. Tipo de Imóvel</label>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="property" value="Residencial (Casa / Apartamento)" checked class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Residencial</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="property" value="Empresarial / Comercial" class="text-[#0C3B78] focus:ring-[#0C3B78]">
                <span>Empresarial</span>
              </label>
            </div>
          </div>

          <!-- Passo 3: Cidade / Bairro -->
          <div>
            <label for="quote-city" class="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">3. Cidade / Bairro</label>
            <input type="text" id="quote-city" name="city" value="${company.locationString}" required class="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:border-[#0C3B78] focus:ring-1 focus:ring-[#0C3B78]">
          </div>

          <!-- Observações adicionais -->
          <div>
            <label for="quote-details" class="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">4. Detalhes ou observações (opcional)</label>
            <input type="text" id="quote-details" name="details" placeholder="Ex: aparelho de 12.000 BTUs para sala" class="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:border-[#0C3B78] focus:ring-1 focus:ring-[#0C3B78]">
          </div>

          <!-- Submit -->
          <div class="pt-2">
            <button type="submit" class="btn-primary w-full justify-center !h-12 !text-sm">
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.54 1.77.822 2.796.822 3.182 0 5.768-2.587 5.768-5.767 0-3.18-2.586-5.767-5.768-5.767zm7.55 5.767c0 4.164-3.388 7.552-7.55 7.552-1.332 0-2.583-.349-3.674-.963l-4.148 1.088 1.107-4.045c-.694-1.144-1.077-2.474-1.077-3.632 0-4.164 3.388-7.552 7.55-7.552 4.162 0 7.55 3.388 7.55 7.552z"/></svg>
              <span>Enviar solicitação para o WhatsApp</span>
            </button>
            <p class="text-[11px] text-center text-slate-400 mt-2">
              Sua mensagem será pré-formatada para resposta ágil no canal oficial.
            </p>
          </div>

        </form>

      </div>
    </div>
  `;
}

