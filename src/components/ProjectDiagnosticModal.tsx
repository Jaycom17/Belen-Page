import React, { useState } from 'react';
import { X, ArrowRight, RotateCcw, Compass, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';

interface DiagnosticOption {
  label: string;
  hint: string;
  weight?: string;
}

interface DiagnosticQuestion {
  title: string;
  subtitle: string;
  options: DiagnosticOption[];
}

interface ProjectDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ProjectDiagnosticModal: React.FC<ProjectDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceForBooking,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!isOpen) return null;

  const questions: DiagnosticQuestion[] = [
    {
      title: '¿Dónde estás parado con tu idea hoy?',
      subtitle: 'Elige la opción que mejor te describa. Sin rodeos:',
      options: [
        {
          label: 'Apenas tengo la idea, todo está en mi cabeza',
          hint: 'Quiero saber por dónde empezar y si de verdad puede funcionar.',
          weight: 'orientacion',
        },
        {
          label: 'Ya estoy trabajando en algo pero me trabo en partes',
          hint: 'Tengo dudas puntuales con el dinero, los costos o cómo explicar bien mi proyecto.',
          weight: 'asesoria',
        },
        {
          label: 'Ya tengo todo escrito y me da miedo entregarlo así nomás',
          hint: 'Quiero que alguien con experiencia le dé una mirada antes de presentarlo.',
          weight: 'revision',
        },
        {
          label: 'Necesito armar el proyecto desde cero y que quede bien hecho',
          hint: 'Quiero un documento formal, ordenado, listo para presentar.',
          weight: 'formulacion',
        },
      ],
    },
    {
      title: '¿Qué estás impulsando exactamente?',
      subtitle: 'Cuéntanos en cuál de estas casillas encaja mejor:',
      options: [
        {
          label: 'Mi propio negocio o emprendimiento',
          hint: 'Quiero que sea rentable y que se sostenga en el tiempo.',
        },
        {
          label: 'Un club o equipo deportivo',
          hint: 'Quiero darle forma seria al club para crecer y conseguir apoyo.',
        },
        {
          label: 'Algo para mi barrio o comunidad',
          hint: 'Una iniciativa donde participa gente y genera un beneficio colectivo.',
        },
        {
          label: 'Una fundación o asociación',
          hint: 'Quiero postular a convocatorias y conseguir financiación.',
        },
        {
          label: 'Mis estudios: tesis, trabajo de grado o temas de clase',
          hint: 'Necesito apoyo académico para avanzar o comprender mejor.',
        },
      ],
    },
    {
      title: '¿Con qué urgencia lo necesitas?',
      subtitle: 'Nos ayuda a saber qué tan intenso debe ser el acompañamiento:',
      options: [
        {
          label: 'Necesito claridad ya, esta semana',
          hint: 'Quiero una sesión rápida para salir de dudas.',
        },
        {
          label: 'No hay apuro, pero quiero resolver bien un tema puntual',
          hint: 'Una sesión más profunda para destrabar ese tema y seguir.',
        },
        {
          label: 'Tengo una fecha límite encima para entregar',
          hint: 'Necesito una revisión rápida y completa antes de entregar.',
        },
        {
          label: 'No tengo prisa y quiero hacerlo bien, con calma',
          hint: 'Un proceso completo, acompañado durante varias semanas.',
        },
      ],
    },
    {
      title: '¿Cuál de estas suena más a ti?',
      subtitle: 'La última pregunta, la más personal:',
      options: [
        {
          label: 'Batallar con materias, exámenes o temas que no entiendo',
          hint: 'Sesiones para reforzar, aclarar dudas y ganar confianza.',
          weight: 'refuerzo-academico',
        },
        {
          label: 'Ando de frente con mi tesis o trabajo de grado',
          hint: 'Ayuda para avanzar seguro: una sesión, un plan de varias o acompañamiento intensivo.',
          weight: 'trabajos-de-grado',
        },
        {
          label: 'Darle forma a mi emprendimiento, club o proyecto comunitario',
          hint: 'Orientación, revisión o construcción del proyecto.',
        },
      ],
    },
  ];

  const handleSelectOption = (index: number) => {
    const updated = [...answers, index];
    setAnswers(updated);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Result screen
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  // Determine recommended service based on answers with weights
  const recommendedServiceId = (() => {
    for (let i = answers.length - 1; i >= 0; i--) {
      const q = questions[i];
      const option = q?.options[answers[i]];
      if (q && option?.weight) {
        return option.weight;
      }
    }
    return 'orientacion';
  })();

  const recommendedService =
    SERVICES.find((s) => s.id === recommendedServiceId) || SERVICES[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1E3024]/70 backdrop-blur-xs p-2.5 sm:p-4"
      onClick={onClose}
    >
      <div className="min-h-full flex justify-center py-2 sm:py-6">
        <div
          className="bg-[#FBF9F3] border border-[#DCE6DD] rounded-lg max-w-lg w-full p-4 sm:p-6 shadow-2xl relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-[#57564C] hover:text-[#18331F] p-1.5 rounded-full hover:bg-[#EBE8DD] transition-colors z-20 cursor-pointer"
            aria-label="Cerrar diagnóstico"
          >
            <X className="w-5 h-5" />
          </button>

          {currentStep < questions.length ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-[#57564C] mb-1.5 pr-8 font-['Karla'] font-medium">
                <span className="flex items-center gap-1 text-[#2E4A34] font-semibold">
                  <Compass className="w-3.5 h-3.5" /> Diagnóstico de Proyecto
                </span>
                <span className="font-semibold text-[#18331F] shrink-0 text-xs">
                  Pregunta {currentStep + 1} de {questions.length}
                </span>
              </div>
              <div className="w-full bg-[#E5E3D8] h-1.5 rounded-full overflow-hidden mb-3.5">
                <div
                  className="bg-[#2E4A34] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="font-['Sora'] font-semibold text-lg sm:text-xl text-[#18331F] mb-0.5 pr-6 leading-snug">
                {questions[currentStep].title}
              </h3>
              <p className="font-['Karla'] text-xs text-[#57564C] mb-3">
                {questions[currentStep].subtitle}
              </p>

              <div className="space-y-2">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-2.5 sm:p-3 rounded-md border border-[#DCE6DD] bg-white hover:border-[#2E4A34] hover:bg-[#F5F1E6] transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <strong className="block text-xs sm:text-[13px] text-[#26261F] font-['Karla'] font-bold group-hover:text-[#2E4A34] leading-snug">
                          {option.label}
                        </strong>
                        <span className="text-[11px] text-[#57564C] mt-0.5 block leading-tight">
                          {option.hint}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#57564C]/40 group-hover:text-[#2E4A34] shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="mt-3 pt-2.5 border-t border-[#DCE6DD] flex justify-start">
                  <button
                    onClick={() => {
                      setCurrentStep(currentStep - 1);
                      setAnswers(answers.slice(0, -1));
                    }}
                    className="text-xs text-[#57564C] hover:text-[#18331F] font-semibold cursor-pointer"
                  >
                    ← Pregunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* RESULT */
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#A66A1E] text-xs uppercase font-bold tracking-wider font-['Karla'] pr-8">
                <Sparkles className="w-4 h-4" /> Recomendación Personalizada
              </div>

              <h3 className="font-['Sora'] font-semibold text-xl text-[#18331F]">
                Tu servicio ideal es:
              </h3>

              {/* Recommended Service Card */}
              <div className="bg-[#F5F1E6] rounded p-3.5 sm:p-4 border-l-4 border-[#2E4A34] border-t border-r border-b border-[#E5E3D8]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#2E4A34] uppercase tracking-wider">
                    {recommendedService.tag}
                  </span>
                  <span className="text-[11px] font-medium text-[#57564C] bg-white px-2 py-0.5 rounded border border-[#DCE6DD]">
                    {recommendedService.duration}
                  </span>
                </div>

                <h4 className="font-['Sora'] font-bold text-lg text-[#26261F] mb-1">
                  {recommendedService.title}
                </h4>
                <p className="font-['Karla'] text-xs text-[#57564C] mb-2.5 leading-relaxed">
                  {recommendedService.description}
                </p>

                <div className="pt-2 border-t border-[#DCE6DD] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#57564C] uppercase block font-semibold">
                      Inversión recomendada
                    </span>
                    <span className="font-['Sora'] text-base font-bold text-[#A66A1E]">
                      {recommendedService.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#2E4A34] font-semibold bg-[#DCE6DD] px-2 py-0.5 rounded">
                    Ajustado a tu etapa
                  </span>
                </div>
              </div>

              {/* Ideal for snippet */}
              <div className="p-2.5 bg-white rounded border border-[#DCE6DD] text-xs">
                <span className="font-bold text-[#18331F] block mb-1">¿Para quién está diseñado?</span>
                <p className="text-[11px] text-[#57564C] leading-relaxed">
                  {recommendedService.idealFor}
                </p>
              </div>

              <p className="font-['Karla'] text-xs text-[#57564C] italic text-center">
                "Te recomiendo el servicio que realmente necesitas, no el más costoso."
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#DCE6DD]">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-[#57564C] hover:text-[#18331F] py-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir diagnóstico</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectServiceForBooking(recommendedService.id);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#A66A1E] hover:bg-[#8A5518] text-white text-xs font-semibold rounded shadow-xs transition-colors cursor-pointer"
                >
                  <span>Agendar este servicio ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
