import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/content';

export const WhyWorkWithMeSection: React.FC = () => {
  return (
    <section id="por-que-conmigo" className="w-full bg-[#FBF9F3] py-16 sm:py-20 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="bg-[#1E3024] text-[#FBF9F3] rounded p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-md">
          {/* Blueprint grid watermark inside dark section */}
          <div className="absolute inset-0 pointer-events-none opacity-10 blueprint-grid-dark" />

          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-['Karla'] text-[12px] text-[#D69A4C] uppercase tracking-wider font-semibold">
                Mis diferenciadores
              </span>
              <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#FBF9F3] tracking-tight">
                ¿Por qué trabajar conmigo?
              </h2>
              <p className="font-['Karla'] text-[15px] sm:text-base text-[#E5E3D8]/90 leading-relaxed">
                Combino formación especializada en proyectos con un acompañamiento cercano y práctico para ayudarte a entender tu idea, identificar lo que necesitas y tomar mejores decisiones para llevarla adelante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
              {WHY_WORK_WITH_ME.map((item, index) => {
                const spanClass =
                  index < 3
                    ? 'md:col-span-1 lg:col-span-2'
                    : index === 3
                    ? 'md:col-span-1 lg:col-span-3'
                    : 'md:col-span-2 lg:col-span-3';

                return (
                  <div
                    key={index}
                    className={`bg-[#2E4A34]/70 p-5 sm:p-6 rounded flex flex-col gap-3 border border-[#4A6B4F]/30 hover:border-[#D69A4C]/50 transition-all duration-200 ${spanClass}`}
                  >
                    <div className="w-10 h-10 rounded bg-[#1A2E20] flex items-center justify-center text-[#D69A4C] border border-[#4A6B4F]/30 shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-['Sora'] font-semibold text-[17px] sm:text-[18px] text-[#FBF9F3] leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-['Karla'] text-[14px] sm:text-[15px] text-[#E5E3D8]/85 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
