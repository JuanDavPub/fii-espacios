import { Bloque, Espacio, PlantaBloque } from "./tipos";

// Los Bloques A, B y C forman un solo conjunto en "U" y comparten un único
// plano por planta (la imagen muestra los tres bloques a la vez).
const PLANTAS_ABC: PlantaBloque[] = [
  { nombre: "Planta Baja", imagen: "/planos/bloque-a-b-c-planta-baja.svg" },
  { nombre: "Planta Media", imagen: "/planos/bloque-a-b-c-planta-media.svg" },
  { nombre: "Planta Alta", imagen: "/planos/bloque-a-b-c-planta-alta.svg" },
];

export const BLOQUES: Bloque[] = [
  {
    id: "a",
    nombre: "Bloque A",
    resumen: "Aulas, oficinas administrativas y zona de gradas",
    descripcion:
      "Edificio de tres niveles ubicado en el extremo oeste del conjunto principal. Comparte la escalera central con el Bloque B y alberga, en planta baja, una zona de gradas/auditorio en su esquina suroeste.",
    plantas: PLANTAS_ABC,
    imagen: PLANTAS_ABC[0].imagen,
  },
  {
    id: "b",
    nombre: "Bloque B",
    resumen: "Aulas centrales organizadas alrededor de un patio interior",
    descripcion:
      "Edificio central del conjunto, de tres niveles, con un vacío/patio interior en planta baja. Conecta mediante dos escaleras (oeste y este) con los bloques A y C respectivamente.",
    plantas: PLANTAS_ABC,
    imagen: PLANTAS_ABC[0].imagen,
  },
  {
    id: "c",
    nombre: "Bloque C",
    resumen: "Aulas, oficinas y zona de gradas (simétrico al Bloque A)",
    descripcion:
      "Edificio de tres niveles ubicado en el extremo este del conjunto principal, con distribución similar al Bloque A y una zona de gradas/auditorio en su esquina noreste.",
    plantas: PLANTAS_ABC,
    imagen: PLANTAS_ABC[0].imagen,
  },
  {
    id: "g",
    nombre: "Bloque G de Aulas",
    resumen: "Edificio alargado de aulas en fila, dos niveles",
    descripcion:
      "Construcción rectangular alargada compuesta por una serie de aulas dispuestas en fila a ambos lados de una escalera central. Cuenta con planta baja y planta alta con la misma distribución.",
    plantas: [
      { nombre: "Planta Baja", imagen: "/planos/bloque-g.svg" },
      { nombre: "Planta Alta", imagen: "/planos/bloque-g.svg" },
    ],
    imagen: "/planos/bloque-g.svg",
  },
  {
    id: "d-e",
    nombre: "Bloque D y E",
    resumen: "Unidad de laboratorios, talleres y oficinas en forma de L",
    descripcion:
      "Conjunto formado por dos cuerpos (D y E) que funcionan como una sola unidad en planta de forma de L. Incluye laboratorios, oficinas, depósitos, baños y una escalera de conexión entre cuerpos.",
    plantas: [{ nombre: "Planta Baja", imagen: "/planos/bloque-d-e.svg" }],
    imagen: "/planos/bloque-d-e.svg",
  },
  {
    id: "f",
    nombre: "Bloque F",
    resumen: "Nave de talleres / laboratorio con bodega y baños",
    descripcion:
      "Nave de un solo nivel tipo taller, con un área abierta de trabajo (estructura con columnas), una zona de casilleros/bodega y un módulo de baños en uno de sus extremos.",
    plantas: [{ nombre: "Planta Única", imagen: "/planos/bloque-f.svg" }],
    imagen: "/planos/bloque-f.svg",
  },
];

export const ESPACIOS: Espacio[] = [
  // ================= BLOQUE A =================
  // --- Planta Baja ---
  { id: "a-pb-decanato", codigo: "A-PB-01", nombre: "Decanato", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Despacho del Decanato de la Facultad de Ingeniería Industrial." },
  { id: "a-pb-secretaria-decanato", codigo: "A-PB-02", nombre: "Secretaría del Decanato", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina de secretaría que atiende al Decanato." },
  { id: "a-pb-archivero", codigo: "A-PB-03", nombre: "Archivero", tipo: "deposito", bloqueId: "a", planta: "Planta Baja", descripcion: "Espacio destinado al archivo de documentación administrativa." },
  { id: "a-pb-subdecanato", codigo: "A-PB-04", nombre: "Subdecanato", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Despacho del Subdecanato de la Facultad." },
  { id: "a-pb-secretaria-vicedecanato", codigo: "A-PB-05", nombre: "Secretaría de Vicedecanato", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina de secretaría que atiende al Vicedecanato." },
  { id: "a-pb-secretaria-general", codigo: "A-PB-06", nombre: "Secretaría General", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina de la Secretaría General de la Facultad." },
  { id: "a-pb-area-investigadores", codigo: "A-PB-07", nombre: "Área de Investigadores", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Espacio de trabajo destinado al personal de investigación." },
  { id: "a-pb-administracion-edificio", codigo: "A-PB-08", nombre: "Administración del Edificio", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina encargada de la administración y mantenimiento del edificio." },
  { id: "a-pb-bodega-1", codigo: "A-PB-09", nombre: "Bodega 1", tipo: "deposito", bloqueId: "a", planta: "Planta Baja", descripcion: "Bodega de almacenamiento general." },
  { id: "a-pb-bodega-2", codigo: "A-PB-10", nombre: "Bodega 2", tipo: "deposito", bloqueId: "a", planta: "Planta Baja", descripcion: "Segunda bodega de almacenamiento, contigua a la anterior." },
  { id: "a-pb-interventoria", codigo: "A-PB-11", nombre: "Departamento de Interventoría", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina del Departamento de Interventoría de la Facultad." },
  { id: "a-pb-talento-humano", codigo: "A-PB-12", nombre: "Departamento de Talento Humano", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Oficina del Departamento de Talento Humano." },
  { id: "a-pb-direccion-industrial", codigo: "A-PB-13", nombre: "Dirección de Carrera de Ingeniería Industrial", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Despacho de la Dirección de la carrera de Ingeniería Industrial." },
  { id: "a-pb-sala-docentes-industrial", codigo: "A-PB-14", nombre: "Sala de Docentes de Ingeniería Industrial", tipo: "oficina", bloqueId: "a", planta: "Planta Baja", descripcion: "Sala de trabajo y reuniones para los docentes de la carrera de Ingeniería Industrial." },
  { id: "a-pb-gradas", codigo: "A-PB-15", nombre: "Gradas / Auditorio", tipo: "auditorio", bloqueId: "a", planta: "Planta Baja", descripcion: "Espacio con graderío escalonado para charlas y actividades académicas, en la esquina suroeste del bloque.", capacidad: 80 },
  { id: "a-escalera", codigo: "A-CIR-01", nombre: "Escalera Bloque A-B", tipo: "circulacion", bloqueId: "a", planta: "Planta Baja", descripcion: "Escalera de conexión vertical entre los tres niveles, compartida con el Bloque B." },

  // --- Planta Media ---
  { id: "a-pm-instituto-postgrado", codigo: "A-PM-01", nombre: "Instituto de Postgrado, Investigación y Educación Continua", tipo: "oficina", bloqueId: "a", planta: "Planta Media", descripcion: "Oficinas del instituto encargado de los programas de postgrado, investigación y educación continua." },
  { id: "a-pm-oficina-computo", codigo: "A-PM-02", nombre: "Oficina de Cómputo", tipo: "oficina", bloqueId: "a", planta: "Planta Media", descripcion: "Oficina de soporte y gestión de equipos de cómputo." },
  { id: "a-pm-lab-computacion-101", codigo: "14A-101", nombre: "Laboratorio de Computación 14A-101", tipo: "laboratorio", bloqueId: "a", planta: "Planta Media", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "a-pm-biblioteca", codigo: "14A-101-BIB", nombre: "Biblioteca 14A-101 — Ing. Alfredo Hincapié Segura", tipo: "servicio", bloqueId: "a", planta: "Planta Media", descripcion: "Biblioteca de la Facultad, dedicada al Ing. Alfredo Hincapié Segura." },
  { id: "a-pm-area-prensa", codigo: "A-PM-03", nombre: "Área de Prensa", tipo: "oficina", bloqueId: "a", planta: "Planta Media", descripcion: "Espacio destinado a la oficina de prensa y comunicación de la Facultad." },
  { id: "a-pm-banos", codigo: "A-PM-04", nombre: "Baños M-H", tipo: "bano", bloqueId: "a", planta: "Planta Media", descripcion: "Módulo de baños para hombres y mujeres." },

  // --- Planta Alta ---
  { id: "a-pa-lab-computo-202", codigo: "14A-202", nombre: "Laboratorio de Cómputo 14A-202", tipo: "laboratorio", bloqueId: "a", planta: "Planta Alta", descripcion: "Laboratorio de cómputo para la carrera de Teleinformática." },
  { id: "a-pa-direccion-teleinformatica", codigo: "A-PA-01", nombre: "Dirección de Carrera de Teleinformática", tipo: "oficina", bloqueId: "a", planta: "Planta Alta", descripcion: "Despacho de la Dirección de la carrera de Teleinformática." },
  { id: "a-pa-aula-201", codigo: "14A-201", nombre: "Aula 14A-201", tipo: "aula", bloqueId: "a", planta: "Planta Alta", descripcion: "Aula de clases de la carrera de Teleinformática (código parcialmente visible en el plano).", capacidad: 40 },
  { id: "a-pa-lab-computo-201", codigo: "14A-201-LAB", nombre: "Laboratorio de Cómputo 14A-201", tipo: "laboratorio", bloqueId: "a", planta: "Planta Alta", descripcion: "Laboratorio de cómputo de la carrera de Teleinformática." },
  { id: "a-pa-aula-203", codigo: "14A-203", nombre: "Aula 14A-203", tipo: "aula", bloqueId: "a", planta: "Planta Alta", descripcion: "Aula de clases (código parcialmente visible en el plano).", capacidad: 40 },
  { id: "a-pa-aula-204", codigo: "14A-204", nombre: "Aula 14A-204", tipo: "aula", bloqueId: "a", planta: "Planta Alta", descripcion: "Aula de clases (código parcialmente visible en el plano).", capacidad: 40 },
  { id: "a-pa-aula-205", codigo: "14A-205", nombre: "Aula 14A-205", tipo: "aula", bloqueId: "a", planta: "Planta Alta", descripcion: "Aula de clases de la carrera de Teleinformática.", capacidad: 40 },
  { id: "a-pa-aula-206", codigo: "14A-206", nombre: "Aula 14A-206", tipo: "aula", bloqueId: "a", planta: "Planta Alta", descripcion: "Aula de clases de la carrera de Teleinformática.", capacidad: 40 },
  { id: "a-pa-banos", codigo: "A-PA-02", nombre: "Baños M-H", tipo: "bano", bloqueId: "a", planta: "Planta Alta", descripcion: "Módulo de baños para hombres y mujeres." },
  { id: "a-pa-sala-docentes-teleinformatica", codigo: "A-PA-03", nombre: "Sala de Docentes de Teleinformática", tipo: "oficina", bloqueId: "a", planta: "Planta Alta", descripcion: "Sala de trabajo y reuniones para los docentes de la carrera de Teleinformática." },
  { id: "a-pa-sala-reuniones-tutorias", codigo: "A-PA-04", nombre: "Sala de Reuniones y Tutorías de Teleinformática", tipo: "oficina", bloqueId: "a", planta: "Planta Alta", descripcion: "Espacio para reuniones y tutorías académicas de la carrera de Teleinformática." },

  // ================= BLOQUE B =================
  // --- Planta Baja ---
  { id: "b-pb-lab-fisica-1", codigo: "14B-001", nombre: "Laboratorio de Física 1 (LAB ESP 14B-001)", tipo: "laboratorio", bloqueId: "b", planta: "Planta Baja", descripcion: "Laboratorio especializado para prácticas de Física 1." },
  { id: "b-pb-lab-fisica-2", codigo: "14B-002", nombre: "Laboratorio de Física 2 (LAB ESP 14B-002)", tipo: "laboratorio", bloqueId: "b", planta: "Planta Baja", descripcion: "Laboratorio especializado para prácticas de Física 2." },
  { id: "b-pb-banos", codigo: "B-PB-01", nombre: "Baños H-M", tipo: "bano", bloqueId: "b", planta: "Planta Baja", descripcion: "Módulo de baños para hombres y mujeres." },
  { id: "b-pb-sala-conferencias", codigo: "B-PB-02", nombre: "Sala de Conferencias Econ. Vicente Rodríguez", tipo: "servicio", bloqueId: "b", planta: "Planta Baja", descripcion: "Sala de conferencias dedicada al Econ. Vicente Rodríguez, usada para charlas y eventos académicos." },
  { id: "b-pb-bodega-documentos", codigo: "B-PB-03", nombre: "Bodega de Documentos", tipo: "deposito", bloqueId: "b", planta: "Planta Baja", descripcion: "Bodega destinada al archivo y resguardo de documentos." },
  { id: "b-pb-oficina-informacion-carreras", codigo: "B-PB-04", nombre: "Oficina de Información de Carreras", tipo: "oficina", bloqueId: "b", planta: "Planta Baja", descripcion: "Oficina de atención e información sobre las carreras de la Facultad." },
  { id: "b-escalera-oeste", codigo: "B-CIR-01", nombre: "Escalera Bloque A-B", tipo: "circulacion", bloqueId: "b", planta: "Planta Baja", descripcion: "Escalera de conexión vertical compartida con el Bloque A." },
  { id: "b-escalera-este", codigo: "B-CIR-02", nombre: "Escalera Bloque B-C", tipo: "circulacion", bloqueId: "b", planta: "Planta Baja", descripcion: "Escalera de conexión vertical compartida con el Bloque C." },

  // --- Planta Media ---
  { id: "b-pm-lab-computo-101", codigo: "14B-101", nombre: "Laboratorio de Cómputo 14B-101", tipo: "laboratorio", bloqueId: "b", planta: "Planta Media", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "b-pm-facultad-gestor-academico", codigo: "B-PM-01", nombre: "Facultad de Ing. Industrial — Gestor General de Formación Académica", tipo: "oficina", bloqueId: "b", planta: "Planta Media", descripcion: "Oficina del Gestor General de Formación Académica de la Facultad de Ingeniería Industrial." },
  { id: "b-pm-aula-101", codigo: "14B-101-AULA", nombre: "Aula 14B-101", tipo: "aula", bloqueId: "b", planta: "Planta Media", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "b-pm-aula-102", codigo: "14B-102", nombre: "Aula 14B-102", tipo: "aula", bloqueId: "b", planta: "Planta Media", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "b-pm-aula-103", codigo: "14B-103", nombre: "Aula 14B-103", tipo: "aula", bloqueId: "b", planta: "Planta Media", descripcion: "Aula de clases.", capacidad: 40 },

  // --- Planta Alta ---
  { id: "b-pa-lab-da-vinci", codigo: "B-PA-01", nombre: "Laboratorio Da Vinci de Proyectos Teleinformáticos", tipo: "laboratorio", bloqueId: "b", planta: "Planta Alta", descripcion: "Laboratorio destinado al desarrollo de proyectos de la carrera de Teleinformática." },
  { id: "b-pa-aula-201", codigo: "14B-201", nombre: "Aula 14B-201", tipo: "aula", bloqueId: "b", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "b-pa-aula-202", codigo: "14B-202", nombre: "Aula 14B-202", tipo: "aula", bloqueId: "b", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "b-pa-lab-computo-201", codigo: "14B-201-LAB", nombre: "Laboratorio de Cómputo 14B-201", tipo: "laboratorio", bloqueId: "b", planta: "Planta Alta", descripcion: "Laboratorio de cómputo de la carrera de Teleinformática." },

  // ================= BLOQUE C =================
  // --- Planta Baja ---
  { id: "c-pb-aula-003", codigo: "14C-003", nombre: "Aula 14C-003", tipo: "aula", bloqueId: "c", planta: "Planta Baja", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pb-aula-004", codigo: "14C-004", nombre: "Aula 14C-004", tipo: "aula", bloqueId: "c", planta: "Planta Baja", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pb-aula-005", codigo: "14C-005", nombre: "Aula 14C-005", tipo: "aula", bloqueId: "c", planta: "Planta Baja", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pb-aula-006", codigo: "14C-006", nombre: "Aula 14C-006", tipo: "aula", bloqueId: "c", planta: "Planta Baja", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pb-aula-007", codigo: "14C-007", nombre: "Aula 14C-007", tipo: "aula", bloqueId: "c", planta: "Planta Baja", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pb-lab-microcontroladores", codigo: "C-PB-01", nombre: "Laboratorio de Microcontroladores", tipo: "laboratorio", bloqueId: "c", planta: "Planta Baja", descripcion: "Laboratorio especializado en microcontroladores (rotulado «LAB MICROCONTROLLER» en el plano)." },
  { id: "c-pb-banos", codigo: "C-PB-02", nombre: "Baños H-M", tipo: "bano", bloqueId: "c", planta: "Planta Baja", descripcion: "Módulo de baños para hombres y mujeres." },
  { id: "c-pb-feuiis", codigo: "C-PB-03", nombre: "FEUIIS — Federación de Estudiantes", tipo: "oficina", bloqueId: "c", planta: "Planta Baja", descripcion: "Oficina de la Federación de Estudiantes Universitarios de la Facultad (rotulada «FUEIIS ESTUDIANTES» en el plano)." },
  { id: "c-escalera", codigo: "C-CIR-01", nombre: "Escalera Bloque B-C", tipo: "circulacion", bloqueId: "c", planta: "Planta Baja", descripcion: "Escalera de conexión vertical compartida con el Bloque B." },

  // --- Planta Media ---
  { id: "c-pm-lab-computo-101", codigo: "14C-101", nombre: "Laboratorio de Cómputo 14C-101", tipo: "laboratorio", bloqueId: "c", planta: "Planta Media", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "c-pm-lab-computo-102", codigo: "14C-102", nombre: "Laboratorio de Cómputo 14C-102", tipo: "laboratorio", bloqueId: "c", planta: "Planta Media", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "c-pm-aula-101", codigo: "14C-101-AULA", nombre: "Aula 14C-101", tipo: "aula", bloqueId: "c", planta: "Planta Media", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pm-aula-102-redes", codigo: "14C-102-AULA", nombre: "Aula 14C-102 / Laboratorio de Redes de Mantenimiento", tipo: "laboratorio", bloqueId: "c", planta: "Planta Media", descripcion: "Aula que funciona también como laboratorio de redes de mantenimiento." },
  { id: "c-pm-aula-103", codigo: "14C-103", nombre: "Aula 14C-103", tipo: "aula", bloqueId: "c", planta: "Planta Media", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pm-banos", codigo: "C-PM-01", nombre: "Baños M-H", tipo: "bano", bloqueId: "c", planta: "Planta Media", descripcion: "Módulo de baños para hombres y mujeres." },
  { id: "c-pm-secretaria-sistemas", codigo: "C-PM-02", nombre: "Secretaría de Sistemas de Información", tipo: "oficina", bloqueId: "c", planta: "Planta Media", descripcion: "Oficina de secretaría de la carrera de Sistemas de Información." },
  { id: "c-pm-sala-profesores-sistemas", codigo: "C-PM-03", nombre: "Sala de Profesores (Ing. en Sistemas)", tipo: "oficina", bloqueId: "c", planta: "Planta Media", descripcion: "Sala de trabajo y reuniones para los docentes de la carrera de Ingeniería en Sistemas." },
  { id: "c-pm-dts", codigo: "C-PM-04", nombre: "Departamento Técnico de Sistemas (D.T.S.)", tipo: "oficina", bloqueId: "c", planta: "Planta Media", descripcion: "Oficina del Departamento Técnico de Sistemas." },
  { id: "c-pm-vinculacion-bienestar", codigo: "C-PM-05", nombre: "Vinculación con la Comunidad — Bienestar Estudiantil", tipo: "oficina", bloqueId: "c", planta: "Planta Media", descripcion: "Oficina de Vinculación con la Comunidad y Bienestar Estudiantil." },

  // --- Planta Alta ---
  { id: "c-pa-aula-201", codigo: "14C-201", nombre: "Aula 14C-201", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-aula-202", codigo: "14C-202", nombre: "Aula 14C-202", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-aula-203", codigo: "14C-203", nombre: "Aula 14C-203", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-aula-204", codigo: "14C-204", nombre: "Aula 14C-204", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-aula-205", codigo: "14C-205", nombre: "Aula 14C-205", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-aula-206", codigo: "14C-206", nombre: "Aula 14C-206", tipo: "aula", bloqueId: "c", planta: "Planta Alta", descripcion: "Aula de clases.", capacidad: 40 },
  { id: "c-pa-lab-computo-201", codigo: "14C-201-LAB", nombre: "Laboratorio de Cómputo 14C-201", tipo: "laboratorio", bloqueId: "c", planta: "Planta Alta", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "c-pa-lab-computo-202", codigo: "14C-202-LAB", nombre: "Laboratorio de Cómputo 14C-202", tipo: "laboratorio", bloqueId: "c", planta: "Planta Alta", descripcion: "Laboratorio de cómputo para clases y prácticas." },
  { id: "c-pa-archivero", codigo: "C-PA-01", nombre: "Archivero", tipo: "deposito", bloqueId: "c", planta: "Planta Alta", descripcion: "Espacio destinado al archivo de documentación." },
  { id: "c-pa-banos", codigo: "C-PA-02", nombre: "Baños H-M", tipo: "bano", bloqueId: "c", planta: "Planta Alta", descripcion: "Módulo de baños para hombres y mujeres." },

  // ---------------- BLOQUE G ----------------
  {
    id: "g-pb-aula1",
    codigo: "G-PB-01",
    nombre: "Aula G-PB-01",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Baja",
    descripcion: "Primera aula de la fila oeste de la planta baja del Bloque G.",
    capacidad: 35,
  },
  {
    id: "g-pb-aula2",
    codigo: "G-PB-02",
    nombre: "Aula G-PB-02",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Baja",
    descripcion: "Aula intermedia de la fila oeste, junto a la escalera central.",
    capacidad: 35,
  },
  {
    id: "g-pb-aula3",
    codigo: "G-PB-03",
    nombre: "Aula G-PB-03",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Baja",
    descripcion: "Primera aula de la fila este, junto a la escalera central.",
    capacidad: 35,
  },
  {
    id: "g-pb-aula4",
    codigo: "G-PB-04",
    nombre: "Aula G-PB-04",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Baja",
    descripcion: "Aula final de la fila este de la planta baja.",
    capacidad: 35,
  },
  {
    id: "g-escalera",
    codigo: "G-CIR-01",
    nombre: "Escalera central",
    tipo: "circulacion",
    bloqueId: "g",
    planta: "Planta Baja",
    descripcion: "Escalera que conecta planta baja y planta alta, ubicada en el centro del bloque.",
  },
  {
    id: "g-pa-aula1",
    codigo: "G-PA-01",
    nombre: "Aula G-PA-01",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Alta",
    descripcion: "Aula de la fila oeste en planta alta, sobre el aula G-PB-01.",
    capacidad: 35,
  },
  {
    id: "g-pa-aula2",
    codigo: "G-PA-02",
    nombre: "Aula G-PA-02",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Alta",
    descripcion: "Aula de la fila oeste en planta alta, junto a la escalera central.",
    capacidad: 35,
  },
  {
    id: "g-pa-aula3",
    codigo: "G-PA-03",
    nombre: "Aula G-PA-03",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Alta",
    descripcion: "Aula de la fila este en planta alta, junto a la escalera central.",
    capacidad: 35,
  },
  {
    id: "g-pa-aula4",
    codigo: "G-PA-04",
    nombre: "Aula G-PA-04",
    tipo: "aula",
    bloqueId: "g",
    planta: "Planta Alta",
    descripcion: "Aula final de la fila este en planta alta.",
    capacidad: 35,
  },

  // ---------------- BLOQUE D y E ----------------
  {
    id: "de-taller-principal",
    codigo: "D-01",
    nombre: "Taller / Laboratorio principal",
    tipo: "laboratorio",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Espacio amplio en el cuerpo D destinado a prácticas de laboratorio o taller.",
    capacidad: 30,
  },
  {
    id: "de-oficinas-d",
    codigo: "D-02",
    nombre: "Oficinas técnicas",
    tipo: "oficina",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Conjunto de oficinas pequeñas adyacentes al taller principal del cuerpo D.",
  },
  {
    id: "de-deposito",
    codigo: "D-03",
    nombre: "Depósito / Bodega de materiales",
    tipo: "deposito",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Bodega de almacenamiento de materiales y herramientas del taller.",
  },
  {
    id: "de-banos",
    codigo: "D-04",
    nombre: "Baños",
    tipo: "bano",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Módulo de baños ubicado en la conexión entre los cuerpos D y E.",
  },
  {
    id: "de-escalera",
    codigo: "DE-CIR-01",
    nombre: "Escalera de conexión D-E",
    tipo: "circulacion",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Escalera ubicada en la unión entre ambos cuerpos del bloque.",
  },
  {
    id: "de-aula-e",
    codigo: "E-01",
    nombre: "Laboratorio E-01",
    tipo: "laboratorio",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Laboratorio amplio ubicado en el cuerpo E, en el extremo sur del conjunto.",
    capacidad: 30,
  },
  {
    id: "de-oficina-e",
    codigo: "E-02",
    nombre: "Oficina E-02",
    tipo: "oficina",
    bloqueId: "d-e",
    planta: "Planta Baja",
    descripcion: "Oficina ubicada junto al ingreso del cuerpo E.",
  },

  // ---------------- BLOQUE F ----------------
  {
    id: "f-taller",
    codigo: "F-01",
    nombre: "Taller / Nave de prácticas",
    tipo: "taller",
    bloqueId: "f",
    planta: "Planta Única",
    descripcion: "Área principal de la nave, de planta abierta con estructura de columnas, destinada a prácticas de taller.",
    capacidad: 25,
  },
  {
    id: "f-oficina",
    codigo: "F-02",
    nombre: "Oficina / Sala de control",
    tipo: "oficina",
    bloqueId: "f",
    planta: "Planta Única",
    descripcion: "Pequeña oficina ubicada en la esquina de ingreso de la nave.",
  },
  {
    id: "f-bodega",
    codigo: "F-03",
    nombre: "Bodega / Casilleros",
    tipo: "deposito",
    bloqueId: "f",
    planta: "Planta Única",
    descripcion: "Zona de almacenamiento y casilleros ubicada junto a los baños, en el extremo este de la nave.",
  },
  {
    id: "f-banos",
    codigo: "F-04",
    nombre: "Baños",
    tipo: "bano",
    bloqueId: "f",
    planta: "Planta Única",
    descripcion: "Módulo de baños distribuido en tres compartimentos, ubicado al extremo este de la nave.",
  },
];

export function getBloque(id: string): Bloque | undefined {
  return BLOQUES.find((b) => b.id === id);
}

export function getEspaciosDeBloque(bloqueId: string): Espacio[] {
  return ESPACIOS.filter((e) => e.bloqueId === bloqueId);
}

export function getEspacio(id: string): Espacio | undefined {
  return ESPACIOS.find((e) => e.id === id);
}
