import React from 'react';
import { Calendar, MessageCircle, Mail, Phone } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  const whatsappUrl =
    'https://wa.me/573246026211?text=Hola%20Bel%C3%A9n,%20quisiera%20agendar%20una%20consulta%20de%20orientaci%C3%B3n%20para%20mi%20proyecto';

  return (
    <section id="agenda-tu-consulta" className="w-full bg-[#F5F1E6] py-16 sm:py-24">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="bg-[#FBF9F3] rounded p-6 sm:p-10 lg:p-12 shadow-xs border-l-4 border-[#A66A1E] border-t border-r border-b border-[#E5E3D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="inline-flex items-center gap-1.5 text-[#2E4A34] font-['Karla'] text-[12px] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#A66A1E]" />
                <span>Agendas &amp; Contacto Directo</span>
              </div>

              <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
                ¿Listo para darle estructura a tu proyecto?
              </h2>

              <p className="font-['Karla'] text-base sm:text-lg text-[#57564C] max-w-2xl leading-relaxed">
                Agenda tu consulta de orientación inicial o comunícate directamente para coordinar agenda y modalidad.
              </p>

              {/* Direct Contact Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[#26261F] font-['Karla'] text-[14px]">
                <a
                  href="mailto:belenvalencia.acdp@gmail.com"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F5F1E6] border border-[#E5E3D8] hover:border-[#2E4A34]/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2E4A34]" />
                  <span>belenvalencia.acdp@gmail.com</span>
                </a>
                <a
                  href="tel:+573246026211"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F5F1E6] border border-[#E5E3D8] hover:border-[#2E4A34]/40 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A66A1E]" />
                  <span>Celular: 3246026211</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* CTA 1: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2E4A34] text-[#FBF9F3] font-['Karla'] text-[14px] font-medium px-6 py-3 rounded shadow-xs hover:bg-[#4A6B4F] transition-colors duration-150"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escríbeme por WhatsApp (3246026211)</span>
              </a>

              {/* CTA 2: Agenda consulta */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#A66A1E] text-[#FBF9F3] font-['Karla'] text-[14px] font-medium px-6 py-3 rounded shadow-xs hover:bg-[#8A5518] active:bg-[#683D00] transition-colors duration-150 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Agenda tu consulta de orientación</span>
              </button>

              <span className="font-['Karla'] text-[12px] text-[#57564C] text-center font-medium">
                Respuesta en menos de 24 horas hábiles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
