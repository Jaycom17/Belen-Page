import React, { useState, useMemo } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking?: () => void;
}

type CategoryKey = 'todas' | 'inicio' | 'servicios' | 'modalidad';

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('todas');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQS.forEach((f) => {
      allOpen[f.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'todas') return FAQS;
    return FAQS.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    return {
      todas: FAQS.length,
      inicio: FAQS.filter((f) => f.category === 'inicio').length,
      servicios: FAQS.filter((f) => f.category === 'servicios').length,
      modalidad: FAQS.filter((f) => f.category === 'modalidad').length
    };
  }, []);

  // Split filtered items into 2 columns for a clean balanced layout
  const [leftColumnFaqs, rightColumnFaqs] = useMemo(() => {
    const left: typeof FAQS = [];
    const right: typeof FAQS = [];
    filteredFaqs.forEach((item, index) => {
      if (index % 2 === 0) {
        left.push(item);
      } else {
        right.push(item);
      }
    });
    return [left, right];
  }, [filteredFaqs]);

  const hasOpenItems = Object.values(openIds).some(Boolean);

  return (
    <section id="preguntas-frecuentes" className="w-full bg-[#FBF9F3] py-16 sm:py-20 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-8 sm:gap-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#E5E3D8]/60">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#2E4A34]">
              <span className="font-['Karla'] text-[12px] uppercase tracking-wider font-semibold">
                Claridad &amp; Transparencia
              </span>
              <div className="h-px w-10 bg-[#2E4A34]/30" />
            </div>
            <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="font-['Karla'] text-[15px] sm:text-base text-[#57564C] leading-relaxed">
              Respuestas a las dudas más comunes sobre las sesiones, entregables y metodología de trabajo.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={hasOpenItems ? collapseAll : expandAll}
              className="text-[13px] font-['Karla'] font-medium text-[#2E4A34] hover:text-[#A66A1E] px-3 py-1.5 rounded bg-[#F5F1E6] border border-[#E5E3D8] transition-colors cursor-pointer"
            >
              {hasOpenItems ? 'Colapsar todas' : 'Expandir todas'}
            </button>
          </div>
        </div>

        {/* Filter Tabs by Category */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: 'todas', label: 'Todas', count: categoryCounts.todas },
            { key: 'inicio', label: 'Inicio y Viabilidad', count: categoryCounts.inicio },
            { key: 'servicios', label: 'Servicios y Alcance', count: categoryCounts.servicios },
            { key: 'modalidad', label: 'Modalidad y Valores', count: categoryCounts.modalidad }
          ].map((tab) => {
            const isActive = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key as CategoryKey)}
                className={`px-3.5 py-1.5 rounded text-[13px] font-['Karla'] font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#2E4A34] text-[#FBF9F3] shadow-xs'
                    : 'bg-[#F5F1E6] text-[#57564C] hover:bg-[#EBE7D8] border border-[#E5E3D8]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#FBF9F3]/20 text-[#FBF9F3]' : 'bg-[#E5E3D8] text-[#57564C]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {leftColumnFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`rounded p-4 sm:p-5 shadow-xs border transition-colors duration-150 ${
                      isOpen
                        ? 'bg-[#FCF9EE] border-[#2E4A34]/30'
                        : 'bg-[#F5F1E6] border-[#E5E3D8] hover:border-[#2E4A34]/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between text-left cursor-pointer list-none font-['Sora'] font-semibold text-[15px] sm:text-[16px] text-[#26261F] select-none gap-3"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-2.5">
                        {faq.number ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-['Sora'] font-bold bg-[#2E4A34]/10 text-[#2E4A34] border border-[#2E4A34]/20 shrink-0 mt-0.5">
                            {faq.number < 10 ? `0${faq.number}` : faq.number}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[11px] font-['Karla'] font-medium bg-[#A66A1E]/10 text-[#8A5518] border border-[#A66A1E]/20 shrink-0 mt-0.5">
                            General
                          </span>
                        )}
                        <span className="leading-snug">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2E4A34] shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pt-3 border-t border-[#4A6B4F]/10 mt-3">
                        <p className="font-['Karla'] text-[14px] sm:text-[15px] text-[#57564C] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {rightColumnFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`rounded p-4 sm:p-5 shadow-xs border transition-colors duration-150 ${
                      isOpen
                        ? 'bg-[#FCF9EE] border-[#2E4A34]/30'
                        : 'bg-[#F5F1E6] border-[#E5E3D8] hover:border-[#2E4A34]/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between text-left cursor-pointer list-none font-['Sora'] font-semibold text-[15px] sm:text-[16px] text-[#26261F] select-none gap-3"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-2.5">
                        {faq.number ? (
                          <span className="px-2 py-0.5 rounded text-[11px] font-['Sora'] font-bold bg-[#2E4A34]/10 text-[#2E4A34] border border-[#2E4A34]/20 shrink-0 mt-0.5">
                            {faq.number < 10 ? `0${faq.number}` : faq.number}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[11px] font-['Karla'] font-medium bg-[#A66A1E]/10 text-[#8A5518] border border-[#A66A1E]/20 shrink-0 mt-0.5">
                            General
                          </span>
                        )}
                        <span className="leading-snug">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2E4A34] shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pt-3 border-t border-[#4A6B4F]/10 mt-3">
                        <p className="font-['Karla'] text-[14px] sm:text-[15px] text-[#57564C] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        {/* Bottom Contact Note */}
        <div className="p-4 sm:p-5 rounded bg-[#F5F1E6] border border-[#E5E3D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#2E4A34] text-[#FBF9F3] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="font-['Sora'] font-semibold text-[14px] text-[#26261F]">
                ¿Tienes una duda puntual sobre tu iniciativa?
              </p>
              <p className="font-['Karla'] text-[13px] text-[#57564C]">
                Podemos resolverla directamente por WhatsApp o agendar una consulta de orientación.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#FBF9F3] border border-[#2E4A34]/30 text-[#2E4A34] font-['Karla'] text-[13px] font-medium hover:bg-[#EBE7D8] transition-colors cursor-pointer"
              >
                <span>Agendar Orientación</span>
              </button>
            )}
            <a
              href="https://wa.me/573246026211?text=Hola%20Bel%C3%A9n,%20tengo%20una%20pregunta%20sobre%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#2E4A34] text-[#FBF9F3] font-['Karla'] text-[13px] font-medium hover:bg-[#4A6B4F] transition-colors shrink-0"
            >
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
