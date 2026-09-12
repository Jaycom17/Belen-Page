import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="w-full bg-[#FBF9F3] py-16 sm:py-20 border-b border-[#E5E3D8]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
          <span className="font-['Karla'] text-[12px] text-[#2E4A34] uppercase tracking-wider font-semibold">
            Proceso Paso a Paso
          </span>
          <h2 className="font-['Sora'] font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#26261F] tracking-tight">
            ¿Cómo funciona?
          </h2>
          <p className="font-['Karla'] text-[15px] sm:text-base text-[#57564C]">
            Un método estructurado para entender dónde estás, definir qué necesitas y avanzar con
            una ruta clara.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#F5F1E6] p-5 rounded shadow-xs flex flex-col justify-between border border-[#E5E3D8] hover:border-[#2E4A34]/30 transition-all hover:-translate-y-0.5"
            >
              <div className="flex flex-col gap-2">
                <span className="font-['Sora'] text-3xl font-bold text-[#4A6B4F]/40 leading-none">
                  {step.step}
                </span>
                <h3 className="font-['Sora'] font-semibold text-[17px] text-[#26261F] mt-1">
                  {step.title}
                </h3>
                <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed">
                  {step.desc}
                </p>

                {step.includes && (
                  <div className="mt-3">
                    <p className="font-['Karla'] text-[12px] font-semibold uppercase tracking-wide text-[#2E4A34] mb-1.5">
                      Incluye:
                    </p>
                    <ul className="flex flex-col gap-1">
                      {step.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 font-['Karla'] text-[13px] text-[#57564C]"
                        >
                          <span className="material-symbols-outlined text-[14px] text-[#4A6B4F] mt-0.5">
                            check
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.extra && (
                  <p className="font-['Karla'] text-[14px] text-[#57564C] leading-relaxed mt-2">
                    {step.extra}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-[#4A6B4F]/10 flex items-center gap-1.5 text-[#2E4A34] font-['Karla'] text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[16px]">{step.badgeIcon}</span>
                <span>{step.badgeText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
