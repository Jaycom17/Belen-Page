import React, { useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
  onOpenDiagnostic: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenDiagnostic,
}) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="w-full bg-[#F5F1E6] py-16 sm:py-24 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex items-center gap-2 text-[#2E4A34]">
              <span className="font-['Karla'] text-[12px] uppercase tracking-wider font-semibold">
                Portafolio de Asesoría
              </span>
              <div className="h-px w-10 bg-[#2E4A34]/30" />
            </div>
            <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
              Servicios estructurados según tu etapa
            </h2>
            <p className="font-['Karla'] text-[15px] sm:text-base text-[#57564C]">
              Transparencia total en alcance, tiempos y tarifas para que inviertas con certeza.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FBF9F3] rounded shadow-xs font-['Karla'] text-[12px] text-[#57564C] border border-[#DCE6DD]">
              <span className="material-symbols-outlined text-[#2E4A34] text-[18px]">tune</span>
              <span>Servicios modulares e independientes</span>
            </div>
          </div>
        </div>

        {/* Orientation Diagnostic Callout for the Portfolio */}
        <div className="bg-[#FCF9EE] border border-[#DCE6DD] rounded-lg p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#DCE6DD] text-[#2E4A34] flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-5 h-5 text-[#2E4A34]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-['Sora'] font-semibold text-base text-[#18331F]">
                ¿No estás seguro de cuál servicio se adapta mejor a tu etapa?
              </h3>
              <p className="font-['Karla'] text-xs sm:text-[14px] text-[#57564C] max-w-2xl leading-relaxed">
                Realiza el diagnóstico rápido en 3 preguntas clave y recibe al instante la recomendación técnica que tu proyecto requiere.
              </p>
            </div>
          </div>
          <button
            id="portfolio-diagnostic-btn"
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2E4A34] hover:bg-[#1E3024] text-[#FBF9F3] rounded-md font-['Karla'] text-sm font-semibold transition-colors shrink-0 shadow-xs cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-4 h-4" />
            <span>Iniciar Diagnóstico Rápido</span>
          </button>
        </div>

        {/* Services Grid: 4 Cards with 3-4px Structural Accent Left Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceForModal(service)}
              className={`bg-[#FBF9F3] rounded p-6 sm:p-7 shadow-xs flex flex-col justify-between border-l-4 ${service.borderAccentColor} border-t border-r border-b border-[#E5E3D8] hover:shadow-lg hover:border-[#2E4A34]/40 hover:scale-[1.02] transition-all duration-200 group cursor-pointer`}
            >
              <div className="flex flex-col gap-3">
                {/* Header within card */}
                <div className="flex items-center justify-between">
                  <span className="font-['Karla'] text-[12px] text-[#2E4A34] uppercase tracking-wider font-semibold">
                    {service.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#DCE6DD] text-[#2E4A34] rounded font-['Karla'] text-[12px] font-medium">
                    <span className="material-symbols-outlined text-[15px]">
                      {service.durationIcon}
                    </span>
                    <span>{service.duration}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-['Sora'] font-semibold text-xl text-[#26261F] mb-1.5 group-hover:text-[#2E4A34] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-['Karla'] text-[14px] sm:text-[15px] text-[#57564C] leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedServiceForModal(service);
                    }}
                    className="font-['Karla'] text-[13px] text-[#2E4A34] underline underline-offset-2 hover:text-[#A66A1E] transition-colors cursor-pointer"
                  >
                    Más información →
                  </button>
                </div>
              </div>

              {/* Card Footer with Price & Action */}
              <div className="pt-4 mt-5 border-t border-[#DCE6DD]/60 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-['Karla'] text-[12px] text-[#57564C] font-medium">
                    Inversión
                  </span>
                  <span className="font-['Sora'] text-lg sm:text-xl text-[#A66A1E] font-bold">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectServiceForBooking(service.id);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2E4A34] hover:bg-[#1E3024] text-[#FBF9F3] font-['Karla'] text-[13px] font-semibold rounded transition-colors cursor-pointer shadow-sm"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <ServiceDetailModal
          service={selectedServiceForModal}
          onClose={() => setSelectedServiceForModal(null)}
          onSelectForBooking={onSelectServiceForBooking}
        />
      )}
    </section>
  );
};
