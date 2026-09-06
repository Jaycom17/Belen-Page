import React, { useState } from 'react';
import { Calendar, Mail, MapPin, Phone, MessageCircle, X } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModalContent, setLegalModalContent] = useState<string | null>(null);

  return (
    <>
      <footer className="w-full bg-[#1E3024] text-[#FBF9F3] pt-16 pb-12 border-t border-[#2E4A34]">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A6B4F]/30">
            {/* Col 1 */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-['Sora'] font-semibold text-2xl text-[#FBF9F3] tracking-tight">
                  Belén Valencia
                </span>
                <span className="font-['Karla'] text-[14px] text-[#D69A4C] font-semibold">
                  Asesora y Consultora junior
                </span>
              </div>

              <p className="font-['Karla'] text-[15px] text-[#E5E3D8]/80 max-w-md leading-relaxed">
                Consultoría técnica y orientación para proyectos deportivos, comunitarios y empresariales, desde la identificación de la necesidad hasta la definición de una ruta de acción clara para su desarrollo.
              </p>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="font-['Sora'] font-semibold text-lg text-[#FBF9F3]">
                Navegación
              </span>
              <div className="flex flex-col gap-1.5">
                <a
                  className="font-['Karla'] text-[14px] text-[#E5E3D8]/80 hover:text-[#FBF9F3] transition-colors py-1"
                  href="#sobre-belen"
                >
                  Sobre Belén
                </a>
                <a
                  className="font-['Karla'] text-[14px] text-[#E5E3D8]/80 hover:text-[#FBF9F3] transition-colors py-1"
                  href="#servicios"
                >
                  Líneas de Servicio
                </a>
                <a
                  className="font-['Karla'] text-[14px] text-[#E5E3D8]/80 hover:text-[#FBF9F3] transition-colors py-1"
                  href="#como-funciona"
                >
                  Metodología de Trabajo
                </a>
                <a
                  className="font-['Karla'] text-[14px] text-[#E5E3D8]/80 hover:text-[#FBF9F3] transition-colors py-1"
                  href="#a-quien-ayudo"
                >
                  Sectores de Impacto
                </a>
                <a
                  className="font-['Karla'] text-[14px] text-[#E5E3D8]/80 hover:text-[#FBF9F3] transition-colors py-1"
                  href="#preguntas-frecuentes"
                >
                  Preguntas Frecuentes
                </a>
              </div>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="font-['Sora'] font-semibold text-lg text-[#FBF9F3]">
                Agendas &amp; Contacto
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-[#D69A4C] shrink-0" />
                  <a
                    href="mailto:belenvalencia.acdp@gmail.com"
                    className="font-['Karla'] text-[14px] text-[#E5E3D8]/90 hover:text-[#D69A4C] transition-colors"
                  >
                    belenvalencia.acdp@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-[#D69A4C] shrink-0" />
                  <a
                    href="tel:+573246026211"
                    className="font-['Karla'] text-[14px] text-[#E5E3D8]/90 hover:text-[#D69A4C] transition-colors"
                  >
                    Celular: 3246026211
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-[#D69A4C] shrink-0" />
                  <a
                    href="https://wa.me/573246026211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Karla'] text-[14px] text-[#E5E3D8]/90 hover:text-[#D69A4C] transition-colors"
                  >
                    WhatsApp: 3246026211
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#D69A4C] shrink-0" />
                  <span className="font-['Karla'] text-[14px] text-[#E5E3D8]/80">
                    Sesiones y orientación bajo agenda concertada
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center bg-[#2E4A34] text-[#99B99D] border border-[#4A6B4F] font-['Karla'] text-[14px] font-medium px-4 py-2 rounded hover:bg-[#4A6B4F] hover:text-[#FBF9F3] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] mr-2">
                      event_available
                    </span>
                    <span>Agendar Consulta de Orientación</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-['Karla'] text-[12px] text-[#E5E3D8]/60 text-center md:text-left">
              © {new Date().getFullYear()} Belén Valencia Consultoría. Rigor metodológico, impacto
              comunitario y viabilidad técnica.
            </span>
            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  setLegalModalContent(
                    'Los servicios de consultoría se rigen por acuerdos de alcance concertado, garantizando rigurosidad metodológica, confidencialidad absoluta sobre las ideas e iniciativas de los clientes, y entrega puntual de los productos estructurados.'
                  )
                }
                className="font-['Karla'] text-[12px] text-[#E5E3D8]/60 hover:text-[#FBF9F3] transition-colors underline-offset-2 hover:underline"
              >
                Términos de Consultoría
              </button>
              <button
                onClick={() =>
                  setLegalModalContent(
                    'Toda la información y documentación compartida durante las sesiones de orientación y estructuración está protegida bajo estándares éticos de confidencialidad y tratamiento de datos personales conforme a la Ley Estatutaria 1581 de 2012.'
                  )
                }
                className="font-['Karla'] text-[12px] text-[#E5E3D8]/60 hover:text-[#FBF9F3] transition-colors underline-offset-2 hover:underline"
              >
                Política de Datos &amp; Confidencialidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal terms modal */}
      {legalModalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E3024]/70 backdrop-blur-xs"
          onClick={() => setLegalModalContent(null)}
        >
          <div
            className="bg-[#FBF9F3] border border-[#DCE6DD] rounded-md max-w-md w-full p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 text-[#57564C] hover:text-[#18331F]"
              aria-label="Cerrar ventana legal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-['Sora'] font-semibold text-lg text-[#18331F] mb-3">
              Información Legal &amp; Confidencialidad
            </h3>
            <p className="font-['Karla'] text-sm text-[#57564C] leading-relaxed mb-6">
              {legalModalContent}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 bg-[#2E4A34] text-white text-xs font-semibold rounded"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
