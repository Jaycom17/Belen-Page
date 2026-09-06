import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-belen" className="w-full bg-[#FBF9F3] py-16 sm:py-20 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial context & structural indicator */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#A66A1E]">
              <span className="font-['Karla'] text-[12px] uppercase tracking-wider font-semibold">
                Asesora y Consultora junior
              </span>
              <div className="h-px w-12 bg-[#A66A1E]/40" />
            </div>

            <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
              Sobre Belén
            </h2>

            <div className="inline-flex items-center gap-2 text-[#2E4A34] font-['Sora'] font-medium text-[17px] sm:text-[18px]">
              <span className="w-2 h-2 rounded-full bg-[#A66A1E]" />
              <span>Consultoría técnica y orientación de proyectos</span>
            </div>

            <p className="font-['Karla'] text-base sm:text-[17px] text-[#26261F] leading-relaxed">
              Te ayudo a entender, organizar y evaluar tus ideas, identificando qué necesitas, qué tan viable puede ser y cuáles son los pasos para llevarlas adelante.
            </p>

            <p className="font-['Karla'] text-[15px] text-[#57564C] leading-relaxed">
              Brindo orientación y consultoría para proyectos deportivos, comunitarios y empresariales, desde la identificación de la necesidad hasta la definición de una ruta de acción clara para su desarrollo.
            </p>
          </div>

          {/* Right Column: 3 Pillars with crisp structural tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pillar 1 */}
            <div className="bg-[#F5F1E6] p-4 sm:p-5 rounded flex flex-col gap-2 shadow-xs border border-[#E5E3D8] hover:border-[#2E4A34]/30 transition-colors">
              <div className="w-10 h-10 rounded bg-[#2E4A34] flex items-center justify-center text-[#FBF9F3] mb-1">
                <span className="material-symbols-outlined text-[22px]">psychology_alt</span>
              </div>
              <h3 className="font-['Sora'] font-semibold text-[17px] text-[#26261F] leading-snug">
                Organizar &amp; Evaluar
              </h3>
              <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed">
                Entender tu idea, identificar requerimientos y determinar qué tan viable es desde el inicio.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F1E6] p-4 sm:p-5 rounded flex flex-col gap-2 shadow-xs border border-[#E5E3D8] hover:border-[#A66A1E]/40 transition-colors">
              <div className="w-10 h-10 rounded bg-[#A66A1E] flex items-center justify-center text-[#FBF9F3] mb-1">
                <span className="material-symbols-outlined text-[22px]">alt_route</span>
              </div>
              <h3 className="font-['Sora'] font-semibold text-[17px] text-[#26261F] leading-snug">
                Ruta de Acción Clara
              </h3>
              <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed">
                Paso a paso metódico para llevar tu iniciativa adelante con certeza técnica y financiera.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5F1E6] p-4 sm:p-5 rounded flex flex-col gap-2 shadow-xs border border-[#E5E3D8] hover:border-[#4A6B4F]/40 transition-colors">
              <div className="w-10 h-10 rounded bg-[#4A6B4F] flex items-center justify-center text-[#FBF9F3] mb-1">
                <span className="material-symbols-outlined text-[22px]">handshake</span>
              </div>
              <h3 className="font-['Sora'] font-semibold text-[17px] text-[#26261F] leading-snug">
                Acompañamiento Cercano
              </h3>
              <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed">
                Enfoque práctico para proyectos deportivos, comunitarios y empresariales a tu medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
