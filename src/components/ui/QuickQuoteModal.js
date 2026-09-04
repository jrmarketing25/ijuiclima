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
              <svg class="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
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

