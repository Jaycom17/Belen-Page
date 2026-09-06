import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#F5F1E6] overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-24"
    >
      {/* Subtle architectural blueprint background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 blueprint-grid"
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#DCE6DD]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 z-10">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-[#DCE6DD]/80 text-[#2E4A34] rounded font-['Karla'] text-[12px] font-medium uppercase tracking-wider border border-[#2E4A34]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A66A1E]" />
              <span>Belén Valencia • Asesora y Consultora junior</span>
            </div>

            <h1 className="font-['Sora'] font-semibold text-3xl sm:text-4xl lg:text-[40px] text-[#26261F] tracking-tight leading-[1.18]">
              Convierto tu idea en un{' '}
              <span className="text-[#2E4A34] italic font-semibold">proyecto sólido</span>, listo
              para crecer
            </h1>

            <p className="font-['Karla'] text-base sm:text-lg text-[#57564C] max-w-xl leading-relaxed">
              Asesoría y consultoría en formulación, estructuración y viabilidad de proyectos
              deportivos, comunitarios y empresariales.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-booking-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center bg-[#A66A1E] text-[#FBF9F3] font-['Karla'] text-[15px] font-medium px-6 py-3 rounded hover:bg-[#8A5518] active:bg-[#683D00] transition-colors shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Agenda tu consulta de orientación</span>
              </button>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center bg-[#FBF9F3] text-[#2E4A34] border border-[#2E4A34]/20 font-['Karla'] text-[15px] font-medium px-5 py-3 rounded shadow-sm hover:bg-[#DCE6DD]/50 transition-colors"
              >
                <span>Conocer metodología</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 mt-3 border-t border-[#4A6B4F]/15">
              <div className="flex flex-col">
                <span className="font-['Sora'] text-xl sm:text-2xl text-[#2E4A34] font-bold">
                  100%
                </span>
                <span className="font-['Karla'] text-[12px] text-[#57564C] font-medium">
                  Rigurosidad Técnica
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Sora'] text-xl sm:text-2xl text-[#2E4A34] font-bold">
                  4 Fases
                </span>
                <span className="font-['Karla'] text-[12px] text-[#57564C] font-medium">
                  Metodología Clara
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Sora'] text-xl sm:text-2xl text-[#2E4A34] font-bold">
                  A Medida
                </span>
                <span className="font-['Karla'] text-[12px] text-[#57564C] font-medium">
                  Sin Sobrecostos
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Decorative Offset Frame */}
              <div className="absolute inset-0 bg-[#4A6B4F]/20 rounded translate-x-3 translate-y-3 -z-10" />

              {/* Main Portrait Card */}
              <div className="relative bg-[#FBF9F3] rounded overflow-hidden shadow-md border border-[#DCE6DD]">
                <img
                  alt="Belén Valencia consultora especialista en formulación y estructuración de proyectos de desarrollo"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center"
                  src="/hero-belen.jpg"
                  width="512"
                  height="382"
                  fetchpriority="high"
                />

                {/* Blueprint Overlay Pill on Image */}
                <div className="absolute top-4 left-4 bg-[#FBF9F3]/95 backdrop-blur-sm px-3 py-1.5 rounded shadow-sm flex items-center gap-1.5 border border-[#DCE6DD]">
                  <span className="material-symbols-outlined text-[#2E4A34] text-[18px]">verified</span>
                  <span className="font-['Karla'] text-[12px] text-[#2E4A34] font-bold tracking-tight">
                    Administración Pública &amp; Proyectos
                  </span>
                </div>
              </div>

              {/* Floating Technical Micro-Card 1 */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#FBF9F3] px-4 py-3 rounded shadow-md flex items-center gap-3 max-w-[250px] z-20 border border-[#DCE6DD]">
                <div className="w-9 h-9 rounded bg-[#DCE6DD] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#2E4A34] text-[20px]">
                    architecture
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Karla'] text-[13px] font-bold text-[#26261F] leading-tight">
                    Metodología Estructurada
                  </span>
                  <span className="font-['Karla'] text-[11px] text-[#57564C] truncate">
                    Alineación con convocatorias
                  </span>
                </div>
              </div>

              {/* Floating Technical Micro-Card 2 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FBF9F3] px-3 py-1.5 rounded shadow-md items-center gap-2 z-20 border border-[#DCE6DD]">
                <span className="w-2 h-2 rounded-full bg-[#A66A1E] animate-pulse" />
                <span className="font-['Karla'] text-[12px] text-[#26261F] font-medium">
                  Viabilidad financiera &amp; impacto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
