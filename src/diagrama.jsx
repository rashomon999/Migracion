import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function MigrantsDecisionTree() {
  const [currentPath, setCurrentPath] = useState([]);
  const [stage, setStage] = useState('inicio');

  const handleChoice = (nextStage) => {
    setCurrentPath([...currentPath, stage]);
    setStage(nextStage);
  };

  const handleBack = () => {
    if (currentPath.length > 0) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      setStage(newPath[newPath.length - 1] || 'inicio');
    }
  };

  const stages = {
    inicio: {
      title: '¿Cuál es tu situación actual?',
      type: 'choice',
      options: [
        { value: 's1a', label: 'Voy a migrar por primera vez', icon: '✈️' },
        { value: 's1b', label: 'Ya estoy en Colombia', icon: '🏘️' },
        { value: 's1c', label: 'Tengo PPT y busco trabajo', icon: '💼' }
      ]
    },

    // RAMA: VOY A MIGRAR POR PRIMERA VEZ
    s1a: {
      title: '¿Cuál es tu motivo principal para migrar?',
      type: 'choice',
      options: [
        { value: 's2a1', label: 'Persecución o peligro (Refugio)', icon: '⚠️' },
        { value: 's2a2', label: 'Mejores oportunidades económicas', icon: '💰' },
        { value: 's2a3', label: 'Reunificación familiar', icon: '❤️' },
        { value: 's2a4', label: 'Acceso a salud o educación', icon: '🏥' }
      ]
    },

    s2a1: {
  title: '🛡️ RUTA DE REFUGIO – Protección Internacional',
  type: 'recommendation',
  content: {
    description:
      'Si huyes por persecución, violencia o riesgo grave, esta es tu ruta. Colombia aplica la Declaración de Cartagena, una de las definiciones más amplias y protectoras de refugio en el mundo.',
    important:
      '⚠️ Principio clave: NO DEVOLUCIÓN. Nadie puede devolverte a un país donde tu vida, libertad o integridad estén en riesgo.  ',

    steps: [
      // ==========================
      // BLOQUE 1 — DEFINICIÓN COMPLETA
      // ==========================
      {
        num: 'INFO',
        title: '🧩 ¿Quién es un refugiado?',
        desc: `
Un refugiado es una persona que huyó de su país por un temor fundado de persecución por:

• Raza
• Religión
• Nacionalidad
• Opinión política
• Pertenencia a un grupo social

También es refugiada la persona que estaría en riesgo de tortura o tratos crueles si la devuelven.

📌 Colombia (Declaración de Cartagena):
También se considera refugiada la persona cuya vida, seguridad o libertad estén amenazadas por:

• Violencia generalizada
• Conflictos internos
• Violación masiva de derechos humanos
• Agresión extranjera
• Circunstancias que alteren gravemente el orden público

 `.trim()
      },

      // ==========================
      // BLOQUE 2 — PRINCIPIOS
      // ==========================
      {
        num: 'INFO',
        title: '📘 Principios del sistema de refugio',
        desc: `
1. No devolución (non-refoulement):
   Nadie puede ser devuelto donde su vida o libertad estén en peligro.
   Incluye derecho a solicitar asilo y a no ser rechazado en frontera.

2. Confidencialidad:
   Toda la información suministrada es reservada.

3. Debido proceso:
   El solicitante tiene garantías procesales en todas las etapas.

 `.trim()
      },

      // ==========================
      // BLOQUE 3 — MITOS
      // ==========================
      {
        num: 'INFO',
        title: '❌ Mitos comunes (IMPORTANTE)',
        desc: `
No necesitas para solicitar refugio:
• Pasaporte
• Apostillas
• Denuncias policiales
• Pruebas “perfectas”

✔ Tu testimonio es la prueba más importante.

 `.trim()
      },

      // ==========================
      // BLOQUE 4 — QUÉ SÍ AYUDA
      // ==========================
      {
        num: 'INFO',
        title: '✅ Qué SÍ ayuda como evidencia',
        desc: `
• Mensajes de amenaza
• Capturas de pantalla
• Fotos o videos del contexto
• Registros médicos
• Testigos o familiares
• Cualquier documento que respalde tu relato

 `.trim()
      },

      // ==========================
      // BLOQUE 5 — CÓMO SE PRESENTA LA SOLICITUD
      // ==========================
      {
        num: 1,
        title: '📨 Presenta tu solicitud de refugio',
        desc: `
Debes enviar UN SOLO PDF al correo oficial:

solicitudesentramite@cancilleria.gov.co

Incluye:
• Formulario de solicitud
• Fotografía 3x4
• Copia de documento de identidad (si tienes)
• Relato detallado de tu caso
• Evidencias disponibles

⏳ Plazo: Hasta 2 meses después de ingresar a Colombia.
Si te pasaste del plazo, debes justificar la extemporaneidad.

(PDF – Sección: ¿Cómo presentar la solicitud?)`,
        link: 'mailto:solicitudesentramite@cancilleria.gov.co'
      },

      // ==========================
      // BLOQUE 6 — ADMISIBLE / NO ADMISIBLE
      // ==========================
      {
        num: 2,
        title: '🧾 Admisibilidad (30 días hábiles)',
        desc: `
Cancillería evalúa si la solicitud está completa.

• Si falta algo → te piden subsanar la información.
• Si es admitida → autorizan el Salvoconducto SC-2.

 `.trim()
      },

      // ==========================
      // BLOQUE 7 — SALVOCONDUCTO SC-2 (DETALLADO)
      // ==========================
      {
        num: 3,
        title: '🟦 Salvoconducto SC-2 (Completamente actualizado)',
        desc: `
Se otorga solo cuando la solicitud es admitida.
Debes solicitarlo ante Migración Colombia desde su portal web.

Beneficios del SC-2:
1. Permanencia regular en Colombia
2. Acceso a salud (subsidiado o contributivo)
3. Acceso a educación básica y secundaria para menores
4. Derecho a trabajar (Decreto 089 de 2025)

Vigencia: 6 meses  
Prorrogable: de manera indefinida mientras tu caso esté en trámite

 `.trim()
      },

      // ==========================
      // BLOQUE 8 — ENTREVISTA
      // ==========================
      {
        num: 4,
        title: '🗣️ Entrevista de refugio ',
        desc: `
Se realiza para analizar tu caso. Puede ser:
• Presencial
• Virtual
• Mediante formulario (según proceda)

Durante la entrevista debes:
• Decir la verdad
• Colaborar con el entrevistador
• Apoyar tus declaraciones con evidencias disponibles

 `.trim()
      },

      // ==========================
      // BLOQUE 9 — DECISIÓN DE CONARE
      // ==========================
      {
        num: 5,
        title: '📘 Estudio y decisión del caso',
        desc: `
La CONARE revisa tu caso y emite una decisión:

• Si te reconocen como refugiado → pasas a la etapa de visa.
• Si NO te reconocen:
  → puedes interponer recurso de reposición en 10 días hábiles.
  → si la negativa se mantiene, tienes 30 días para regularizarte por otra vía.

 `.trim()
      },

      // ==========================
      // BLOQUE 10 — RECONOCIMIENTO
      // ==========================
      {
        num: 6,
        title: '🏅 Si eres reconocido como refugiado',
        desc: `
Debes realizar tres trámites:

1. Obtener el Documento de Viaje (Cancillería – Bogotá)
2. Solicitar Visa tipo M – Refugiado (SIN COSTO) en SITAC:
   • Resolución de reconocimiento
   • SC-2
   • Documento de Viaje
   • Foto 3x4
   • Carta de solicitud

3. Solicitar Cédula de Extranjería (Migración Colombia)

 `.trim()
      },

      // ==========================
      // BLOQUE 11 — LARGO PLAZO
      // ==========================
      {
        num: 7,
        title: '🌱 A largo plazo',
        desc: `
• La visa M – Refugiado dura 3 años (renovable)
• Debes renovar la visa y la cédula antes de su vencimiento
• Tras 5 años de titularidad continua → puedes solicitar Visa de Residente (indefinida)
  (debe realizarse un traspaso cada 5 años)

 `.trim()
      },

      // ==========================
      // BLOQUE 12 — DEBERES DEL SOLICITANTE
      // ==========================
      {
        num: 8,
        warning: true,
        title: '⚠️ Deberes del solicitante (Actualizado)',
        desc: `
Debes:
• Solicitar renovación del SC-2 30 días antes de su vencimiento
• Informar cambios de domicilio, teléfono o correo
• Revisar constantemente tu correo
• Informar intención de salir del país
• Dar información verídica y completa

 `.trim()
      }
    ],

    // ==========================
    // DOCUMENTOS Y ORGANIZACIONES
    // ==========================
    docs: [
      'Formulario de solicitud',
      'Documento de identidad (si tienes)',
      'Fotografía 3x4',
      'Relato escrito',
      'Evidencias adicionales',
      'Un solo PDF para el envío'
    ],

    orgs: [
      'ACNUR – Orientación y protección',
      'HIAS – Acompañamiento legal y psicosocial',
      'Cruz Roja Colombiana',
      'SNPS – Conferencia Episcopal',
      'OIM – Asistencia complementaria',
      'Ministerio de Relaciones Exteriores – Refugio',
      'Migración Colombia'
    ]
  },

  nextOptions: [{ value: 'inicio', label: 'Volver al inicio' }]
},


    s2a2: {
      title: '¿Tienes pasaporte vigente o vencido (menos de 10 años)?',
      type: 'choice',
      options: [
        { value: 's3a2a', label: 'Sí, pasaporte vigente', icon: '✅' },
        { value: 's3a2b', label: 'Sí, pasaporte vencido (menos de 10 años)', icon: '⏰' },
        { value: 's3a2c', label: 'No tengo pasaporte', icon: '❌' }
      ]
    },

    s3a2a: {
      title: '💼 RUTA DE OPORTUNIDADES LABORALES - Con Pasaporte Vigente',
      type: 'recommendation',
      content: {
        description:
          '¡Estás en la mejor posición! Puedes regularizarte rápidamente y acceder a trabajo formal.',
        steps: [
          {
            num: 1,
            title: 'Apostilla tus documentos',
            desc:
              'Títulos, certificados, diplomas en Venezuela',
            link:
              'https://legalizacionve.mppre.gob.ve/cal/static/legalizacionve/index.html?idkey=43'
          },
          {
            num: 2,
            title: 'Ingresa por puesto de control oficial',
            desc: 'Puestos habilitados (frontera y resto del país)',
            link:
              'https://www.dian.gov.co/aduanas/Paginas/Pasos-de-Frontera.aspx'
          },
          {
            num: 3,
            title: 'Obtén tu PIP',
            desc: 'Permiso de Ingreso y Permanencia se sella en tu pasaporte (gratuito)'
          },
          {
            num: 4,
            title: 'Regístrate en RUMV',
            desc: 'Registro Único de Migrantes Venezolanos',
            link: 'https://www.migracioncolombia.gov.co/'
          },
          {
            num: 5,
            title: 'Solicita PPT',
            desc: 'Permiso por Protección Temporal (válido hasta 2031)',
            link:
              'https://www.migracioncolombia.gov.co/permiso-de-ingreso-y-permanencia-pip/'
          },
          {
            num: 6,
            title: 'Busca trabajo formal',
            desc: 'O solicita PEPFF (tu empleador presenta solicitud)',
            link:
              'https://www.mintrabajo.gov.co/empleo-y-pensiones/movilidad-y-formacion/grupo-de-gestion-de-la-politica-de-migracion-laboral/pepff'
          },
          {
            num: 7,
            title: 'Integración laboral',
            desc:
              'SENA, OIM, Migravalle ofrecen orientación y capacitación',
            link: 'https://www.serviciodeempleo.gov.co/'
          }
        ],
        docs: [
          'Pasaporte vigente',
          'Cédula de identidad',
          'Títulos/certificados apostillados',
          'Currículum',
          'Comprobantes laborales'
        ],
        orgs: ['Migración Colombia', 'OIM', 'Migravalle', 'SENA'],
        important:
          '✅ Con PPT tienes acceso a: trabajo, salud, educación, servicios sociales'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s3a2b: {
      title: '💼 RUTA DE OPORTUNIDADES LABORALES - Con Pasaporte Vencido',
      type: 'recommendation',
      content: {
        description:
          'Tu pasaporte vencido es válido en Colombia (Resolución 2231 de 2021). ¡Puedes ingresar!',
        steps: [
          {
            num: 1,
            title: 'Verifica tu pasaporte',
            desc: 'Debe tener menos de 10 años de vencimiento'
          },
          {
            num: 2,
            title: 'Apostilla documentos',
            desc: 'Títulos, certificados en Venezuela',
            link:
              'https://legalizacionve.mppre.gob.ve/cal/static/legalizacionve/index.html?idkey=43'
          },
          {
            num: 3,
            title: 'Ingresa por puesto de control oficial',
            desc: 'Con tu pasaporte vencido (válido hasta 10 años)'
          },
          { num: 4, title: 'Obtén tu PIP', desc: 'Igual que con pasaporte vigente' },
          {
            num: 5,
            title: 'Sigue el proceso normal',
            desc: 'RUMV → PPT → Búsqueda de trabajo'
          },
          {
            num: 6,
            title: 'Considera renovar pasaporte',
            desc:
              'Puedes hacerlo en embajada/consulado venezolano en Colombia para más facilidades'
          }
        ],
        docs: ['Pasaporte (vencido menos de 10 años)', 'Cédula', 'Títulos apostillados'],
        orgs: ['Migración Colombia', 'OIM'],
        important: '✅ El pasaporte vencido (menos de 10 años) es válido en Colombia'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s3a2c: {
      title: '⚠️ SIN PASAPORTE - Opciones limitadas',
      type: 'recommendation',
      content: {
        description:
          'Sin pasaporte tienes opciones limitadas pero aún puedes migrar con apoyo legal.',
        steps: [
          {
            num: 1,
            title: 'OPCIÓN 1: Solicitar pasaporte',
            desc:
              'En embajada/consulado de Venezuela en Colombia (proceso lento, puede tardar meses)',
            link: 'https://colombia.embajada.gob.ve/'
          },
          {
            num: 2,
            title: 'OPCIÓN 2: Zona de frontera solamente',
            desc:
              'Puedes cruzar SOLO con cédula de identidad por frontera oficial (Cúcuta, Villa del Rosario)',
            warning: true
          },
          {
            num: 3,
            title: 'Si elegiste Opción 2',
            desc:
              '⚠️ Limitación: SOLO puedes permanecer en zona de frontera (No puedes ir a Bogotá, Medellín, etc.)',
            warning: true
          },
          {
            num: 4,
            title: 'Para ir más allá de frontera',
            desc: 'Necesitarás pasaporte y pasar por control migratorio oficial'
          },
          {
            num: 5,
            title: 'OPCIÓN 3: Contactar ACNUR',
            desc: 'Si enfrentas peligro, pueden asesorarte legalmente',
            link: 'https://www.acnur.org'
          },
          {
            num: 6,
            title: '⚠️ EVITA TROCHAS',
            desc:
              'Son controladas por ELN, FARC y contrabandistas. Cobran dinero y es peligroso',
            warning: true
          }
        ],
        docs: ['Cédula de identidad', 'Documentos de identidad alternativos'],
        orgs: ['ACNUR', 'OIM', 'HIAS'],
        important: '⚠️ CRÍTICO: Evita trochas a todo costo. Son peligrosas y ilegales.'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2a3: {
      title: '❤️ RUTA DE REUNIFICACIÓN FAMILIAR',
      type: 'recommendation',
      content: {
        description:
          'Tu familia en Colombia puede ser tu red de apoyo. La reunificación es válida dentro del Estatuto Temporal.',
        steps: [
          {
            num: 1,
            title: 'Recopila información de tu familia',
            desc:
              'Nombres completos, cédulas/pasaportes, fecha de nacimiento, relación de parentesco'
          },
          {
            num: 2,
            title: 'Obtén certificados',
            desc:
              'Actas de matrimonio, nacimiento, divorcio (si aplica) - apostilladas en Venezuela',
            link:
              'https://colombia.embajada.gob.ve/legalizacion-y-apostilla/documentos-apostillables-o-legalizables/'
          },
          { num: 3, title: 'Obtén tu pasaporte', desc: 'Vigente o vencido (menos de 10 años)' },
          { num: 4, title: 'Ingresa por control oficial', desc: 'Con tu pasaporte' },
          {
            num: 5,
            title: 'Regístrate en RUMV',
            desc:
              'Incluye datos de tus familiares para mantener vínculo legal',
            link: 'https://www.migracioncolombia.gov.co/'
          },
          {
            num: 6,
            title: 'Solicita reunificación familiar',
            desc:
              'Dentro del Estatuto Temporal de Protección (válido hasta 2031)'
          },
          {
            num: 7,
            title: 'Obtén tu PPT',
            desc: 'Y comienza a reconstruir tu vida familiar en Colombia'
          }
        ],
        docs: [
          'Pasaporte',
          'Cédula',
          'Actas de parentesco apostilladas',
          'Actas de matrimonio/nacimiento',
          'Documentos de familiares'
        ],
        orgs: ['Migración Colombia', 'OIM', 'ACNUR'],
        important: '❤️ La reunificación familiar es un derecho reconocido en Colombia'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2a4: {
      title: '🏥 RUTA DE ACCESO A SALUD Y EDUCACIÓN',
      type: 'recommendation',
      content: {
        description:
          'Tienes derecho a salud y educación en Colombia, incluso sin estatus regular inicial.',
        steps: [
          {
            num: 1,
            title: 'Antes de partir',
            desc: 'Recopila historial médico completo y nombres de medicamentos'
          },
          {
            num: 2,
            title: 'Contacta OIM o ACNUR',
            desc: 'Para orientación sobre servicios médicos en Colombia',
            link: 'https://colombia.iom.int'
          },
          { num: 3, title: 'Obtén tu pasaporte', desc: 'Vigente o vencido (menos de 10 años)' },
          { num: 4, title: 'Ingresa por control oficial', desc: 'Puestos fronterizos habilitados' },
          {
            num: 5,
            title: 'Acceso inmediato a urgencias',
            desc: '✅ Hospitales públicos atienden emergencias SIN estatus regular'
          },
          {
            num: 6,
            title: 'Regístrate en RUMV',
            desc: 'Para acceso al régimen subsidiado de salud'
          },
          {
            num: 7,
            title: 'Solicita PPT',
            desc: 'Te da acceso garantizado a servicios de salud y educación'
          },
          {
            num: 8,
            title: 'Educación para menores',
            desc:
              'Niños, niñas y adolescentes tienen derecho a estudiar sin importar estatus. Acércate a Secretaría de Educación'
          }
        ],
        docs: [
          'Pasaporte',
          'Historial médico',
          'Certificados de educación anterior',
          'Recetas médicas',
          'Carnet de vacunación'
        ],
        orgs: ['ACNUR', 'OIM', 'Cruz Roja Colombiana', 'HIAS'],
        important:
          '🏥 Derecho a salud de urgencia sin estatus + educación para menores sin restricciones'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    // RAMA: YA ESTOY EN COLOMBIA
    s1b: {
      title: '¿Cómo ingresaste a Colombia?',
      type: 'choice',
      options: [
        { value: 's2b1', label: 'Por un puesto de control migratorio oficial', icon: '✅' },
        { value: 's2b2', label: 'Solo con cédula por la frontera', icon: '🪧' },
        { value: 's2b3', label: 'De forma irregular (sin control migratorio)', icon: '⚠️' }
      ]
    },

    s2b1: {
      title: '✅ Ingresaste por control oficial - ¿Tienes permiso migratorio?',
      type: 'choice',
      options: [
        { value: 's3b1a', label: 'Tengo PPT', icon: '📋' },
        { value: 's3b1b', label: 'Solo tengo PIP', icon: '📄' },
        { value: 's3b1c', label: 'No tengo ningún permiso', icon: '❌' }
      ]
    },

    s3b1a: {
      title: '✅ TIENES PPT - Acceso pleno a derechos',
      type: 'recommendation',
      content: {
        description:
          'Felicidades, tienes el máximo nivel de protección migratoria en Colombia.',
        steps: [
          {
            num: 1,
            title: 'Tu PPT es válido hasta 2031',
            desc: 'Puedes trabajar, estudiar, acceder a salud y servicios sociales'
          },
          {
            num: 2,
            title: 'Verifica tu estatus',
            desc:
              'Puedes consultar si tu PPT está listo en Centro Facilitador de Servicios Migratorios',
            link: 'https://apps.migracioncolombia.gov.co/consultappt/'
          },
          {
            num: 3,
            title: 'Para trabajar formalmente',
            desc:
              'Busca empleo directo o solicita PEPFF (tu empleador lo tramita)',
            link: 'https://app2.mintrabajo.gov.co/PEPFF/login.aspx'
          },
          {
            num: 4,
            title: 'Acceso a salud',
            desc: 'Regístrate en régimen subsidiado de salud (EPS) con tu PPT'
          },
          { num: 5, title: 'Educación', desc: 'Puedes acceder a universidades con tu PPT' },
          {
            num: 6,
            title: 'Vivienda y servicios',
            desc: 'Acceso a créditos y servicios con tu PPT'
          },
          {
            num: 7,
            title: 'Recomendación',
            desc:
              'Únete a comunidades de migrantes para apoyo y oportunidades',
            link: 'https://co.gruposwats.com/venezolanos-en-bogota.html'
          }
        ],
        docs: ['PPT vigente', 'Cédula de identidad'],
        orgs: ['Migración Colombia', 'Empleadores', 'OIM'],
        important: '✅ Con PPT tienes derechos casi iguales a un ciudadano colombiano'
      },

      nextOptions: [
        { value: 's1c', label: 'Ver información de búsqueda de trabajo' },
        { value: 'inicio', label: 'Empezar de nuevo' }
      ]
    },

    s3b1b: {
      title: '📄 TIENES SOLO PIP - Necesitas regularizar',
      type: 'recommendation',
      content: {
        description:
          'El PIP es temporal. Necesitas obtener tu PPT para acceso a servicios y trabajo.',
        steps: [
          { num: 1, title: 'Tu PIP expira', desc: 'Fue otorgado por X días en control migratorio' },
          {
            num: 2,
            title: 'URGENTE: Regístrate en RUMV',
            desc: 'Registro Único de Migrantes Venezolanos',
            link: 'https://www.migracioncolombia.gov.co/'
          },
          {
            num: 3,
            title: 'Solicita PPT',
            desc: 'Puedes hacerlo de manera virtual',
            link:
              'https://www.migracioncolombia.gov.co/permiso-de-ingreso-y-permanencia-pip/'
          },
          {
            num: 4,
            title: 'Reúne documentos',
            desc: 'Cédula, pasaporte, comprobante de residencia en Colombia'
          },
          { num: 5, title: 'Tiempo de tramitación', desc: 'Generalmente 15-30 días' },
          {
            num: 6,
            title: 'Sin PPT tienes limitaciones',
            desc: '❌ Acceso limitado a trabajo formal, salud, educación superior'
          },
          {
            num: 7,
            title: 'Una vez tengas PPT',
            desc: 'Tendrás acceso pleno a servicios (válido hasta 2031)'
          }
        ],
        docs: ['PIP en pasaporte', 'Cédula', 'Pasaporte', 'Comprobante de residencia'],
        orgs: ['Migración Colombia'],
        important: '⚠️ No esperes, regulariza tu situación antes de que expire tu PIP'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s3b1c: {
      title: '⚠️ SIN PERMISO MIGRATORIO - Situación irregular urgente',
      type: 'recommendation',
      content: {
        description:
          '⚠️ Estás en riesgo. Necesitas regularizar tu situación INMEDIATAMENTE.',
        steps: [
          {
            num: 1,
            title: 'CONTACTA INMEDIATAMENTE',
            desc: 'ACNUR, OIM o Cruz Roja para acompañamiento legal',
            link: 'https://www.acnur.org'
          },
          {
            num: 2,
            title: 'Busca tu PIP',
            desc: '¿Dónde está tu sello migratorio? Puede estar en tu pasaporte'
          },
          {
            num: 3,
            title: 'Reúne prueba de tu presencia',
            desc: 'Registros escolares, médicos, laborales, recibos de servicios'
          },
          {
            num: 4,
            title: 'Regístrate en RUMV',
            desc: 'Es gratuito. Contacta Migración Colombia',
            link: 'https://www.migracioncolombia.gov.co/'
          },
          {
            num: 5,
            title: 'Solicita PPT por presencia antigua',
            desc: 'Si estabas aquí antes del 31 de enero de 2021, tienes derecho'
          },
          {
            num: 6,
            title: 'También tienes derecho si...',
            desc: 'Ingresaste regularmente entre mayo 2021 y mayo 2023'
          },
          {
            num: 7,
            title: 'Riesgos de no regularizarse',
            desc: '❌ Limitación de servicios, posible deportación, imposibilidad de trabajar'
          }
        ],
        docs: [
          'Cédula',
          'Pasaporte',
          'Prueba sumaria de presencia (cualquier documento)',
          'Registros escolares/médicos/laborales'
        ],
        orgs: ['ACNUR', 'OIM', 'HIAS', 'Cruz Roja', 'Migración Colombia'],
        important: '🔴 CRÍTICO: Regulariza tu situación ya. Eres vulnerable en situación irregular.'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2b2: {
      title: '🪧 ENTRASTE SOLO CON CÉDULA POR FRONTERA',
      type: 'recommendation',
      content: {
        description:
          'Puedes estar en zona de frontera, pero si quieres ir al interior necesitas regularizarte.',
        steps: [
          {
            num: 1,
            title: 'Limitación actual',
            desc:
              'Solo válido para zona de frontera (Cúcuta, Villa del Rosario, San Antonio del Táchira, etc.)',
            warning: true
          },
          { num: 2, title: '¿Quieres ir al interior?', desc: '(Bogotá, Medellín, Cali, Barranquilla, etc.)' },
          {
            num: 3,
            title: 'SÍ quiero ir al interior',
            desc: 'Necesitas: pasaporte + ir a puesto de control oficial'
          },
          {
            num: 4,
            title: 'Consigue tu pasaporte',
            desc:
              'Vigente o vencido (menos de 10 años). Puedes solicitarlo en embajada/consulado de Venezuela',
            link: 'https://colombia.embajada.gob.ve/'
          },
          {
            num: 5,
            title: 'Ve al puesto de control',
            desc:
              'Puestos habilitados en diferentes ciudades',
            link: 'https://www.dian.gov.co/aduanas/Paginas/Pasos-de-Frontera.aspx'
          },
          { num: 6, title: 'Obtén tu PIP', desc: 'Se sella en tu pasaporte (gratuito)' },
          {
            num: 7,
            title: 'Luego regístrate en RUMV y solicita PPT',
            desc: 'Mismo proceso que otros migrantes regularizados'
          },
          {
            num: 8,
            title: '¿Prefieres quedarte en frontera?',
            desc:
              'Puedes permanecer aquí pero necesitas igualmente regularizarte para acceso a servicios'
          }
        ],
        docs: ['Cédula', 'Pasaporte (si tienes)'],
        orgs: ['Migración Colombia', 'OIM', 'ACNUR'],
        important: '⚠️ Con solo cédula NO puedes circular hacia el interior del país legalmente'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2b3: {
      title: '⚠️ INGRESASTE DE FORMA IRREGULAR',
      type: 'recommendation',
      content: {
        description:
          '⚠️ Situación delicada pero con salida legal. Regularización URGENTE.',
        steps: [
          {
            num: 1,
            title: 'PASO 1: Contacta organizaciones de apoyo',
            desc:
              'ACNUR, OIM, HIAS, Cruz Roja. Son gratuitas y confidenciales',
            link: 'https://www.acnur.org'
          },
          {
            num: 2,
            title: 'PASO 2: Reúne prueba de tu presencia',
            desc:
              'Registros escolares, médicos, laborales, de servicios, testigos, fotos fechadas'
          },
          {
            num: 3,
            title: 'PASO 3: Evaluación de elegibilidad',
            desc:
              'Si estabas aquí antes del 31 enero 2021 → Tienes derecho a PPT'
          },
          {
            num: 4,
            title: 'PASO 4: Si ingresaste 2021-2023',
            desc:
              'Y lo hiciste por control oficial (aunque después perdiste documentos) → Tienes derecho a PPT'
          },
          {
            num: 5,
            title: 'PASO 5: Regístrate en RUMV',
            desc: 'Presenta prueba sumaria de presencia',
            link: 'https://www.migracioncolombia.gov.co/'
          },
          { num: 6, title: 'PASO 6: Solicita PPT', desc: 'Con acompañamiento legal de ONG' },
          {
            num: 7,
            title: 'Riesgos actuales',
            desc:
              '❌ Deportación, acceso limitado a servicios, explotación laboral',
            warning: true
          },
          {
            num: 8,
            title: 'Beneficio de regularizarte',
            desc:
              '✅ Protección legal, acceso a trabajo, salud, educación, mayor seguridad'
          }
        ],
        docs: [
          'Cualquier documento de identidad',
          'Prueba sumaria: registros escolares, médicos, laborales, servicios, testigos'
        ],
        orgs: ['ACNUR', 'OIM', 'HIAS', 'Cruz Roja', 'Migración Colombia'],
        important:
          '🔴 CRÍTICO: La regularización es tu mejor opción. Las ONG pueden ayudarte confidencialmente.'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    // RAMA: TENGO PPT Y BUSCO TRABAJO
    s1c: {
      title: '💼 ¿Qué tipo de trabajo buscas?',
      type: 'choice',
      options: [
        { value: 's2c1', label: 'Trabajo formal con contrato', icon: '📋' },
        { value: 's2c2', label: 'Trabajo independiente/Por cuenta propia', icon: '🤝' },
        { value: 's2c3', label: 'Cualquier tipo de empleo', icon: '🔄' }
      ]
    },

    s2c1: {
      title: '📋 BÚSQUEDA DE TRABAJO FORMAL',
      type: 'recommendation',
      content: {
        description:
          'Con PPT tienes derecho a trabajar formalmente. Aquí están tus opciones.',
        steps: [
          {
            num: 1,
            title: 'Opción 1: Busca empleo directo',
            desc: 'Envía currículum a empresas. Ya puedes trabajar con tu PPT'
          },
          {
            num: 2,
            title: 'Opción 2: Programa PEPFF (Recomendado)',
            desc:
              'Permiso Especial de Permanencia para Fomento de la Formalización',
            link: 'https://app2.mintrabajo.gov.co/PEPFF/login.aspx'
          },
          {
            num: 3,
            title: 'Cómo funciona PEPFF',
            desc:
              'Tu EMPLEADOR presenta la solicitud al Ministerio del Trabajo (es gratuito)'
          },
          {
            num: 4,
            title: 'Beneficios del PEPFF',
            desc:
              '✅ Legalidad garantizada, mejor protección laboral, acceso a seguridad social'
          },
          {
            num: 5,
            title: 'Busca empleador cooperante',
            desc:
              'OIM y Migravalle tienen listados de empresas que contratan migrantes'
          },
          {
            num: 6,
            title: 'Capacitación SENA',
            desc: 'Cursos gratuitos de habilidades laborales',
            link: 'https://www.serviciodeempleo.gov.co/'
          },
          {
            num: 7,
            title: 'Portales de empleo',
            desc: 'LinkedIn, Computrabajo, Indeed, OCC (búsqueda general)'
          },
          {
            num: 8,
            title: 'Derechos laborales',
            desc:
              'Con contrato tienes: salario mínimo, prestaciones, seguridad social, vacaciones'
          },
          {
            num: 9,
            title: 'Si hay problemas laborales',
            desc:
              'Contacta Ministerio del Trabajo o sindicatos',
            link: 'https://www.mintrabajo.gov.co/'
          }
        ],
        docs: [
          'PPT vigente',
          'Cédula',
          'Currículum',
          'Certificados laborales apostillados',
          'Referencias'
        ],
        orgs: ['SENA', 'OIM', 'Migravalle', 'Ministerio del Trabajo'],
        important: '✅ Con PPT y contrato formal tienes protección laboral completa'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2c2: {
      title: '🤝 TRABAJO INDEPENDIENTE/POR CUENTA PROPIA',
      type: 'recommendation',
      content: {
        description:
          'Muchos migrantes venezolanos emprenden en Colombia. Aquí están tus opciones.',
        steps: [
          {
            num: 1,
            title: 'Ideas comunes',
            desc: 'Comercio, servicios, artesanía, consultoría, profesionales independientes'
          },
          {
            num: 2,
            title: 'Paso 1: Define tu negocio',
            desc: 'Qué producto/servicio, a quién lo vendes, ubicación'
          },
          {
            num: 3,
            title: 'Paso 2: Formaliza tu negocio',
            desc:
              'Registra tu empresa ante Cámara de Comercio (mínimo requerimiento)'
          },
          {
            num: 4,
            title: 'Paso 3: Obtén NIT',
            desc:
              'Número de Identificación Tributaria (DIAN). Es gratuito'
          },
          {
            num: 5,
            title: 'Paso 4: Afiliate a seguridad social',
            desc:
              'Como trabajador independiente (ARP, EPS, pensión)'
          },
          {
            num: 6,
            title: 'Paso 5: Licencia de funcionamiento',
            desc:
              'Si lo requiere tu municipio (depende del tipo de negocio)'
          },
          {
            num: 7,
            title: 'Financiamiento',
            desc:
              'OIM, Migravalle, Fundaciones locales ofrecen microcréditos para migrantes'
          },
          {
            num: 8,
            title: 'Apoyo comunitario',
            desc:
              'Grupos de WhatsApp y comunidades de emprendedores venezolanos',
            link: 'https://co.gruposwats.com/venezolanos-en-bogota.html'
          },
          {
            num: 9,
            title: 'Capacitación empresarial',
            desc: 'SENA ofrece cursos gratuitos sobre cómo emprender'
          },
          {
            num: 10,
            title: 'Ventaja de formalizar',
            desc:
              '✅ Acceso a créditos, protección legal, confianza de clientes'
          }
        ],
        docs: ['PPT', 'Cédula', 'Plan de negocio simple', 'Comprobante de residencia'],
        orgs: ['Cámara de Comercio', 'DIAN', 'OIM', 'Migravalle', 'SENA'],
        important: '✅ Con PPT puedes formalizar tu propio negocio sin problemas'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    },

    s2c3: {
      title: '🔄 BÚSQUEDA FLEXIBLE DE EMPLEO',
      type: 'recommendation',
      content: {
        description:
          'Abierto a cualquier oportunidad. Aquí están todos tus caminos.',
        steps: [
          { num: 1, title: 'Ventaja: Flexibilidad', desc: 'Puedes combinar trabajo formal, independiente o informal legal' },
          { num: 2, title: 'Opción A: Trabajo formal', desc: 'Empresas que contratan: construcción, comercio, servicios, manufactura' },
          { num: 3, title: 'Opción B: Trabajo independiente', desc: 'Negocios propios, servicios profesionales, comercio' },
          { num: 4, title: 'Opción C: Gig economy', desc: 'Delivery, plataformas digitales (Rappi, Uber, Workana, Upwork)' },
          { num: 5, title: 'Opción D: Sector agrícola/rural', desc: 'Especialmente en Valle del Cauca, existen oportunidades' },
          { num: 6, title: 'Tu estrategia', desc: 'Combina búsqueda de empleo formal + pequeños trabajos = ingresos más estables' },
          { num: 7, title: 'Red de apoyo', desc: 'Comunidades de migrantes comparten oportunidades de empleo' },
          { num: 8, title: 'Capacitación', desc: 'SENA, OIM y Migravalle ofrecen talleres según demanda laboral local' },
          { num: 9, title: 'Menores de edad', desc: 'Si tienes hijos menores, hay restricciones legales para trabajar. Prioriza su educación' },
          { num: 10, title: 'Recomendación', desc: 'Formaliza tu trabajo tanto como sea posible. Protege tus derechos laborales' }
        ],
        docs: ['PPT', 'Cédula', 'Currículum'],
        orgs: ['OIM', 'Migravalle', 'SENA', 'Empleadores diversos'],
        important: '✅ Tu PPT te abre muchas puertas. Elige lo que mejor se adapte a tu situación'
      },

      nextOptions: [{ value: 'inicio', label: 'Empezar de nuevo' }]
    }
  };

  const renderStage = () => {
    const stage_data = stages[stage];
    if (!stage_data) return null;

    if (stage_data.type === 'choice') {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">{stage_data.title}</h2>
          <div className="grid gap-3">
            {stage_data.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleChoice(opt.value)}
                className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 transition text-left font-semibold text-blue-900 flex items-center gap-3"
              >
                <span className="text-2xl">{opt.icon}</span>
                <span>{opt.label}</span>
                <ChevronRight className="ml-auto text-blue-600" />
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (stage_data.type === 'recommendation') {
      const { content, nextOptions } = stage_data;
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">{stage_data.title}</h2>
            <p className="text-lg text-gray-700 font-semibold">{content.description}</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            {content.important && (
              <p className="text-yellow-800 font-semibold">{content.important}</p>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-900">📋 Pasos a seguir:</h3>
            {content.steps && content.steps.map((step) => (
              <div
                key={step.num}
                className={`p-4 rounded-lg border-l-4 ${
                  step.warning ? 'bg-red-50 border-red-400' : 'bg-blue-50 border-blue-400'
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      step.warning ? 'bg-red-500' : 'bg-blue-600'
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    {step.title && <p className="font-semibold text-gray-800">{step.title}</p>}
                    <p
  className={step.warning ? 'text-red-700' : 'text-gray-700'}
  style={{ whiteSpace: 'pre-line' }}
>
  {step.desc}
</p>

                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                      >
                        🔗 {step.link.substring(0, 50)}...
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.docs && (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-900 mb-2">📄 Documentos necesarios:</h3>
                <ul className="space-y-1 text-green-800">
                  {content.docs.map((doc, i) => (
                    <li key={i} className="flex gap-2">
                      <span>✓</span> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.orgs && (
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-900 mb-2">🤝 Organizaciones que ayudan:</h3>
                <ul className="space-y-1 text-purple-800">
                  {content.orgs.map((org, i) => (
                    <li key={i} className="flex gap-2">
                      <span>→</span> {org}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-3 flex-wrap">
            {nextOptions && nextOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setCurrentPath([]);
                  setStage(opt.value);
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center gap-2"
              >
                <ChevronRight size={18} />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-6">
          <h1 className="text-3xl font-bold mb-2">🇻🇪 Guía de Migración a Colombia</h1>
          <p className="text-blue-100">Encuentra tu ruta personalizada según tu situación</p>
        </div>

        {/* Breadcrumb */}
        {currentPath.length > 0 && (
          <div className="mb-4 flex items-center gap-2 text-sm">
            <button
              onClick={() => {
                setCurrentPath([]);
                setStage('inicio');
              }}
              className="text-blue-600 hover:underline font-semibold"
            >
              Inicio
            </button>
            {currentPath.map((p, i) => (
              <span key={i} className="text-gray-500">→ {p.substring(0, 10)}...</span>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          {renderStage()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center">
          {currentPath.length > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Atrás
            </button>
          )}

          {stage !== 'inicio' && (
            <button
              onClick={() => {
                setCurrentPath([]);
                setStage('inicio');
              }}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
              Reiniciar
            </button>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mt-6">
          <p className="text-sm text-indigo-900">
            <strong>💡 Nota importante:</strong> Toda la información aquí es oficial. Migración Colombia, OIM y ACNUR ofrecen asesoría GRATUITA. Desconfía de personas que cobren por trámites migratorios.
          </p>
        </div>
      </div>
    </div>
  );
}
