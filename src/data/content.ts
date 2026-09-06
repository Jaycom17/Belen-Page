import { ServiceItem, CaseStudyItem, FaqItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'orientacion',
    tag: 'Paso Inicial',
    tagColor: 'bg-[#DCE6DD] text-[#2E4A34]',
    borderAccentColor: 'border-l-[#2E4A34]',
    title: 'Consulta de orientación',
    duration: '45–60 min',
    durationIcon: 'schedule',
    description: 'Conversación sobre tu idea, identificación de necesidades, orientación inicial, recomendaciones y definición de siguientes pasos. No incluye elaboración del proyecto.',
    price: '$50.000',
    ctaText: 'Agendar orientación',
    deliverables: [
      'Diagnóstico inicial de viabilidad técnica y normativa',
      'Mapeo de necesidades prioritarias y requerimientos clave',
      'Hoja de ruta recomendada con siguientes pasos ejecutables',
      'Recomendación transparente del servicio o trámite requerido'
    ],
    idealFor: 'Personas o equipos con una idea en mente que necesitan saber por dónde empezar y si tiene viabilidad real.',
    modality: 'Virtual (Google Meet / Zoom) o Presencial concertada'
  },
  {
    id: 'asesoria',
    tag: 'Resolución Puntual',
    tagColor: 'bg-[#DCE6DD] text-[#2E4A34]',
    borderAccentColor: 'border-l-[#4A6B4F]',
    title: 'Asesoría especializada',
    duration: '70–90 min',
    durationIcon: 'schedule',
    description: 'Orientación puntual en formulación, estructuración, planeación, presupuesto, flujo de fondos, análisis de viabilidad o revisión de documentos. Ideal si ya avanzaste en tu proyecto y necesitas resolver una fase específica. También aplica para proyectos de grado, tesis y trabajos universitarios.',
    price: '$80.000 – $100.000',
    ctaText: 'Solicitar asesoría',
    deliverables: [
      'Resolución técnica profunda de un bloqueo específico',
      'Revisión o formulación de estructura de costos / flujo de fondos',
      'Alineación metodológica con términos de referencia específicos',
      'Memoria de recomendaciones técnicas por escrito post-sesión'
    ],
    idealFor: 'Líderes de proyectos en marcha, estudiantes universitarios con proyectos de grado o tesis, que tienen dudas específicas sobre presupuesto, viabilidad financiera o marco lógico.',
    modality: 'Virtual o Presencial con material de trabajo previo'
  },
  {
    id: 'revision',
    tag: 'Revisión Técnica & Ajuste',
    tagColor: 'bg-[#F3E1C6]/50 text-[#8A5518]',
    borderAccentColor: 'border-l-[#A66A1E]',
    title: 'Revisión técnica de proyecto',
    duration: '2–3 horas',
    durationIcon: 'schedule',
    description: 'Para cuando ya tienes un proyecto formulado y necesitas una revisión externa: observaciones, inconsistencias, recomendaciones, ajustes sugeridos y un concepto general sobre la estructura.',
    price: '$150.000 – $250.000',
    ctaText: 'Pedir revisión',
    deliverables: [
      'Informe técnico de revisión con matriz de observaciones y hallazgos',
      'Detección de incongruencias entre objetivos, actividades y presupuesto',
      'Ajustes sugeridos para postulación a fondos o convocatorias',
      'Sesión de devolución y retroalimentación de 60 minutos'
    ],
    idealFor: 'Proyectos ya redactados que van a ser presentados ante entidades públicas, convocatorias de cooperación o inversionistas.',
    modality: 'Revisión documental asincrónica + Sesión sincrónica de entrega'
  },
  {
    id: 'estructuracion',
    tag: 'Construcción Integral',
    tagColor: 'bg-[#EBE8DD] text-[#26261F]',
    borderAccentColor: 'border-l-[#26261F]',
    title: 'Estructuración de proyecto',
    duration: '2–3 sem + ses. semanal',
    durationIcon: 'date_range',
    description: 'Acompañamiento completo para construir tu proyecto desde cero, según tu necesidad. Puede incluir diagnóstico, problema/necesidad, objetivos, alternativas, actividades, presupuesto, costos, ingresos, flujo de fondos y cronograma.',
    price: '$500.000 – $950.000',
    ctaText: 'Iniciar estructuración',
    deliverables: [
      'Diagnóstico y árbol de problemas / árbol de objetivos',
      'Matriz de marco lógico completa con indicadores verificables',
      'Presupuesto desglosado, estructura de costos e ingresos y flujo de fondos',
      'Cronograma técnico de ejecución física y financiera',
      'Dossier técnico formal listo para radicación o búsqueda de recursos'
    ],
    idealFor: 'Iniciativas que requieren un documento de proyecto riguroso, formal y con respaldo técnico institucional de alto nivel.',
    modality: 'Proceso de 2 a 3 semanas con sesiones semanales de co-creación'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Cuéntame tu idea',
    desc: 'Agendas una consulta de orientación y hablamos de dónde estás y qué necesitas.',
    badgeIcon: 'record_voice_over',
    badgeText: 'Sesión diagnóstica'
  },
  {
    step: '02',
    title: 'Definimos el camino',
    desc: 'Según la fase de tu proyecto, te recomiendo el servicio que realmente necesitas, no el más caro.',
    badgeIcon: 'alt_route',
    badgeText: 'Ruta personalizada'
  },
  {
    step: '03',
    title: 'Trabajamos juntos',
    desc: 'Ya sea una asesoría puntual o una estructuración completa, avanzamos con seguimiento y comunicación constante.',
    badgeIcon: 'sync',
    badgeText: 'Acompañamiento activo'
  },
  {
    step: '04',
    title: 'Te llevas un proyecto listo',
    desc: 'Con la formulación, presupuesto y estructura que necesitas para presentarlo donde sea.',
    badgeIcon: 'verified',
    badgeText: 'Dossier ejecutable'
  }
];

export const TARGET_AUDIENCE = [
  {
    icon: 'storefront',
    title: 'Emprendedores y pequeños empresarios',
    desc: 'Que necesitan estructurar su idea y validar si es rentable antes de arriesgar capital o buscar socios.'
  },
  {
    icon: 'groups',
    title: 'Organizaciones sociales y comunitarias',
    desc: 'Que buscan formalizar un proyecto para gestionar apoyo, cooperación o financiación institucional.'
  },
  {
    icon: 'sports_soccer',
    title: 'Clubes y organizaciones deportivas',
    desc: 'Que quieren pasar de una actividad informal a un proyecto deportivo formal con proyección y patrocinio.'
  },
  {
    icon: 'foundation',
    title: 'Fundaciones y asociaciones',
    desc: 'Que necesitan revisión técnica o formulación rigurosa para postular con éxito a convocatorias públicas y privadas.'
  },
  {
    icon: 'school',
    title: 'Estudiantes universitarios',
    desc: 'Que necesitan orientación para estructurar proyectos de grado, tesis o trabajos académicos con rigor técnico y metodológico.'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    icon: 'school',
    title: 'Formación especializada',
    desc: 'Cuento con formación profesional y especializada en proyectos de desarrollo, para analizar tus ideas con criterio técnico y no desde soluciones genéricas.'
  },
  {
    icon: 'lightbulb',
    title: 'Claridad para decidir',
    desc: 'No me limito a decirte qué hacer. Te explico qué necesita tu iniciativa, por qué es importante y cuáles son las alternativas que tienes, para que puedas tomar decisiones informadas.'
  },
  {
    icon: 'handshake',
    title: 'Acompañamiento cercano',
    desc: 'Cada iniciativa tiene un contexto diferente. Conozco tu caso, escucho tus necesidades y adapto la orientación a tu realidad, tus objetivos y tus posibilidades.'
  },
  {
    icon: 'visibility',
    title: 'Mirada crítica y objetiva',
    desc: 'Si ya tienes un proyecto, puedo ayudarte a revisarlo, identificar fortalezas, errores, vacíos y oportunidades de mejora, antes de que inviertas más tiempo o recursos en él.'
  },
  {
    icon: 'tune',
    title: 'Servicio a tu medida',
    desc: 'No necesitas contratar una consultoría completa desde el principio. Puedes comenzar con una orientación puntual y avanzar progresivamente hacia servicios de diagnóstico, revisión, estructuración o formulación, según lo que realmente necesites.'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cacao',
    serviceUsed: 'Asesoría especializada',
    title: 'Emprendimiento de productos a base de cacao',
    story: 'Una emprendedora tenía la idea clara: transformar cacao en chocolate y productos derivados, pero no sabía cómo llevarla a un modelo de negocio rentable. Trabajamos juntas en definir la estructura del proyecto, los costos reales de producción, el flujo de fondos y la viabilidad financiera, hasta convertir una idea en un negocio con números claros y un camino definido para crecer.',
    resultPill: 'Estructura de costos, flujo proyectado y viabilidad validada',
    icon: 'eco',
    category: 'Desarrollo Productivo & Agroindustria',
    challenges: [
      'Incertidumbre en costos directos e indirectos de transformación artesanal.',
      'Falta de proyección de flujo de caja para adquisición de maquinaria.',
      'Dificultad para fijar precio competitivo con margen de rentabilidad real.'
    ],
    keyOutcomes: [
      'Modelo financiero automatizado con punto de equilibrio claro.',
      'Reducción del 22% en desperdicio proyectado de insumos.',
      'Presentación exitosa ante fondo semilla local.'
    ]
  },
  {
    id: 'tiro-con-arco',
    serviceUsed: 'Estructuración de proyecto',
    title: 'Proyecto deportivo de tiro con arco',
    story: 'Un club de tiro con arco necesitaba dar el salto de una actividad informal a un proyecto deportivo formal, con la estructura necesaria para crecer y buscar apoyo. Acompañé el proceso desde cero: definición del proyecto, objetivos, actividades y primeros pasos para ponerlo en marcha de forma organizada.',
    resultPill: 'Estatutos, árbol de objetivos y cronograma formal de gestión',
    icon: 'military_tech',
    category: 'Deporte, Formación & Gestión Institucional',
    challenges: [
      'Operación informal sin personería jurídica ni estructura estatutaria.',
      'Falta de un plan de desarrollo deportivo con metas e indicadores.',
      'Incapacidad técnica para postular a comodatos de escenarios municipales.'
    ],
    keyOutcomes: [
      'Estatutos y manual de funciones aprobados por asamblea.',
      'Plan plurianual con metas deportivas y cronograma formativo.',
      'Documento de proyecto radicado ante el instituto de deportes municipal.'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    number: 1,
    category: 'inicio',
    question: '¿Necesito tener un proyecto formulado para contratar una asesoría o consultoría?',
    answer: 'No. Puedes llegar únicamente con una idea. Primero analizaremos qué necesitas y cuál es el camino más conveniente para desarrollarla.'
  },
  {
    id: 'faq-2',
    number: 2,
    category: 'inicio',
    question: '¿Qué tipo de proyectos puedo consultar?',
    answer: 'Brindo orientación para iniciativas deportivas, comunitarias y emprendedoras, entre otras, dependiendo de sus características y objetivos.'
  },
  {
    id: 'faq-3',
    number: 3,
    category: 'inicio',
    question: '¿Qué pasa si no sé por dónde empezar?',
    answer: 'Precisamente para eso está la orientación inicial. Analizamos tu idea, identificamos tus necesidades y definimos los primeros pasos que deberías seguir.'
  },
  {
    id: 'faq-4',
    number: 4,
    category: 'servicios',
    question: '¿Puedo contratar una revisión de un proyecto que ya tengo?',
    answer: 'Sí. Puedes solicitar una revisión técnica y diagnóstico, en la que se identifican fortalezas, inconsistencias, vacíos y aspectos que podrían mejorarse.'
  },
  {
    id: 'faq-5',
    number: 5,
    category: 'servicios',
    question: '¿La consultoría incluye la formulación completa del proyecto?',
    answer: 'Depende del servicio que contrates. Puedes comenzar con una orientación o diagnóstico y, si posteriormente necesitas una estructuración o formulación más completa, se puede definir un servicio adicional.'
  },
  {
    id: 'faq-6',
    number: 6,
    category: 'inicio',
    question: '¿Puedo hacer una consulta puntual sin contratar un proceso completo?',
    answer: 'Sí. Puedes contratar una sesión de orientación para resolver dudas específicas, conocer la viabilidad inicial de una idea o determinar qué necesitas desarrollar.'
  },
  {
    id: 'faq-7',
    number: 7,
    category: 'inicio',
    question: '¿Cómo sé qué servicio necesito?',
    answer: 'No tienes que saberlo antes de contactarme. Cuéntame qué tienes, qué quieres lograr y cuáles son tus dudas; a partir de eso podremos identificar qué tipo de acompañamiento necesitas.'
  },
  {
    id: 'faq-8',
    number: 8,
    category: 'servicios',
    question: '¿La consultoría garantiza que mi proyecto será aprobado o financiado?',
    answer: 'No. La consultoría busca mejorar la calidad, coherencia y preparación de tu iniciativa, pero la aprobación, financiación o viabilidad final depende de las entidades, convocatorias, inversionistas u otros factores externos.'
  },
  {
    id: 'faq-9',
    number: 9,
    category: 'servicios',
    question: '¿Puedo contratarte si ya tengo un proyecto elaborado por otra persona?',
    answer: 'Sí. Puedes solicitar una revisión independiente para obtener una segunda mirada profesional y objetiva sobre su estructura, coherencia y aspectos susceptibles de mejora.'
  },
  {
    id: 'faq-10',
    number: 10,
    category: 'modalidad',
    question: '¿Cuánto cuesta una asesoría o consultoría?',
    answer: 'El valor depende del tipo de servicio, alcance y complejidad de la necesidad. Puedes comenzar con una orientación puntual y posteriormente definir un acompañamiento más amplio si lo requieres.'
  },
  {
    id: 'faq-11',
    number: 11,
    category: 'modalidad',
    question: '¿Qué diferencia hay entre una asesoría y una consultoría?',
    answer: 'La asesoría busca orientarte frente a una necesidad o duda específica. La consultoría implica un análisis más profundo de tu situación para identificar problemas, oportunidades y posibles soluciones. Dependiendo de tu necesidad, podemos trabajar desde una sesión puntual hasta un proceso de acompañamiento más completo.'
  },
  {
    id: 'faq-12',
    number: 12,
    category: 'servicios',
    question: '¿Qué obtengo al finalizar una consultoría?',
    answer: 'No recibes un proyecto de 50 páginas, sino algo mucho más útil en una etapa inicial: claridad sobre su idea, diagnóstico de su situación, recomendaciones y una ruta de acción concreta.'
  },
  {
    id: 'faq-13',
    category: 'modalidad',
    question: '¿Trabajas de forma remota o presencial?',
    answer: 'Ambas modalidades, según lo que prefieras y la disponibilidad. Atiendo consultas virtuales para cualquier lugar de Colombia y el exterior, y sesiones presenciales coordinadas en despacho.'
  },
  {
    id: 'faq-14',
    category: 'modalidad',
    question: '¿Cuánto tiempo toma tener el proyecto listo?',
    answer: 'Depende del servicio y la complejidad. Una asesoría puntual se resuelve en una sesión, mientras que una estructuración completa toma entre 2 y 3 semanas con seguimiento semanal.'
  }
];
