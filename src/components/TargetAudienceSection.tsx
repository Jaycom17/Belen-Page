import React from 'react';
import { TARGET_AUDIENCE } from '../data/content';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="a-quien-ayudo" className="w-full bg-[#F5F1E6] py-16 sm:py-20 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-1 max-w-xl">
          <div className="flex items-center gap-2 text-[#A66A1E]">
            <span className="font-['Karla'] text-[12px] uppercase tracking-wider font-semibold">
              Sectores &amp; Organizaciones
            </span>
            <div className="h-px w-10 bg-[#A66A1E]/30" />
          </div>
          <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
            ¿A quién ayudo?
          </h2>
          <p className="font-['Karla'] text-[15px] sm:text-base text-[#57564C]">
            Atiendo a líderes y colectivos que necesitan validar, estructurar o viabilizar
            iniciativas con impacto real.
          </p>
        </div>

        {/* 5 Quadrants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TARGET_AUDIENCE.map((item, index) => (
            <div
              key={index}
              className="bg-[#FBF9F3] p-5 rounded shadow-xs flex flex-col gap-2.5 border border-[#E5E3D8] hover:border-[#2E4A34]/40 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded bg-[#DCE6DD] flex items-center justify-center text-[#2E4A34] mb-1">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <h3 className="font-['Sora'] font-semibold text-[17px] text-[#26261F] leading-snug">
                {item.title}
              </h3>
              <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
