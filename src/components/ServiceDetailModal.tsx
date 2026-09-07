import React from 'react';
import { X, Calendar, Clock, CircleDollarSign } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1E3024]/70 backdrop-blur-xs p-2.5 sm:p-4"
      onClick={onClose}
    >
      <div className="min-h-full flex justify-center py-2 sm:py-6">
        <div
          className="bg-[#FBF9F3] border border-[#DCE6DD] rounded-lg max-w-xl w-full p-5 sm:p-6 pt-10 sm:pt-12 shadow-2xl relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[#57564C] hover:text-[#18331F] p-1.5 rounded-full hover:bg-[#EBE8DD] transition-colors z-20 cursor-pointer"
            aria-label="Cerrar detalles del servicio"
          >
            <X className="w-5 h-5" />
          </button>

        {/* Tag & Duration */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-2.5 py-1 rounded text-xs font-semibold ${service.tagColor}`}>
            {service.tag}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EBE8DD] text-[#26261F] rounded text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-[#2E4A34]" />
            {service.duration}
          </span>
          <span className="px-2.5 py-1 bg-[#DCE6DD]/60 text-[#2E4A34] rounded text-xs font-medium">
            {service.modality}
          </span>
        </div>

        <h3 className="font-['Sora'] font-semibold text-2xl text-[#26261F] mb-3">
          {service.title}
        </h3>

        <p className="font-['Karla'] text-[15px] text-[#57564C] mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Price details */}
        {service.priceDetails && service.priceDetails.length > 0 && (
          <div className="bg-[#F5F1E6] p-4 rounded border border-[#E5E3D8] mb-5">
            <h4 className="font-['Sora'] text-xs font-bold text-[#18331F] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CircleDollarSign className="w-3.5 h-3.5 text-[#A66A1E]" />
              Tarifas
            </h4>
            <ul className="space-y-2">
              {service.priceDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#26261F]">
                  <CircleDollarSign className="w-4 h-4 text-[#2E4A34] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 pt-2 border-t border-[#E5E3D8] text-[11px] text-[#57564C]">
              Nota: Tarifas sujetas a variación según la complejidad, requerimientos del servicio y desplazamiento.
            </p>
          </div>
        )}

        {/* Ideal for note */}
        <div className="mb-6 p-3 bg-[#FCF9EE] rounded border border-[#DCE6DD] text-xs text-[#57564C]">
          <strong className="text-[#18331F] block mb-0.5">¿Para quién está diseñado?</strong>
          {service.idealFor}
        </div>

        {/* Inversión & CTA Button */}
        <div className="pt-4 border-t border-[#DCE6DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-['Karla'] text-xs text-[#57564C] block uppercase tracking-wider font-semibold">
              Inversión total
            </span>
            <span className="font-['Sora'] text-2xl font-bold text-[#A66A1E]">
              {service.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-[#57564C]/30 text-[#57564C] font-['Karla'] text-sm font-semibold rounded hover:bg-[#EBE8DD] transition-colors"
            >
              Volver
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(service.id);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A66A1E] hover:bg-[#8A5518] text-[#FBF9F3] font-['Karla'] text-sm font-semibold rounded shadow-sm transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{service.ctaText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
