import { AcademicPlan, s } from "@/lib/academic";

const isi = [
  s(1,"Análisis Matemático I",1),s(2,"Álgebra y Geometría Analítica",1),s(3,"Física I",1),s(4,"Inglés I",1),s(5,"Lógica y Estructuras Discretas",1),s(6,"Algoritmos y Estructuras de Datos",1),s(7,"Arquitectura de Computadoras",1),s(8,"Sistemas y Procesos de Negocio",1),
  s(9,"Análisis Matemático II",2,[1,2]),s(10,"Física II",2,[1,3]),s(11,"Ingeniería y Sociedad",2),s(12,"Inglés II",2,[4]),s(13,"Sintaxis y Semántica de los Lenguajes",2,[5,6]),s(14,"Paradigmas de Programación",2,[5,6]),s(15,"Sistemas Operativos",2,[7]),s(16,"Análisis de Sistemas de Información",2,[6,8]),
  s(17,"Probabilidad y Estadística",3,[1,2]),s(18,"Economía",3,[],[1,2]),s(19,"Bases de Datos",3,[13,16],[5,6]),s(20,"Desarrollo de Software",3,[14,16],[5,6]),s(21,"Comunicación de Datos",3,[],[3,7]),s(22,"Análisis Numérico",3,[9],[1,2]),s(23,"Diseño de Sistemas de Información",3,[14,16],[4,6,8]),
  s(24,"Legislación",4,[11]),s(25,"Ingeniería y Calidad de Software",4,[19,20,23],[13,14]),s(26,"Redes de Datos",4,[15,21]),s(27,"Investigación Operativa",4,[17,22]),s(28,"Simulación",4,[17],[9]),s(29,"Tecnologías para la Automatización",4,[10,22],[9]),s(30,"Administración de Sistemas de Información",4,[18,23],[16]),
  s(31,"Inteligencia Artificial",5,[28],[17,22]),s(32,"Ciencia de Datos",5,[28],[17,19]),s(33,"Sistemas de Gestión",5,[18,27],[23]),s(34,"Gestión Gerencial",5,[24,30],[18]),s(35,"Seguridad en los Sistemas de Información",5,[26,30],[20,21]),s(36,"Proyecto Final",5,[25,26,30],[12,20,23]),
];

const starter = {
  electromecanica: [s(1,"Análisis Matemático I",1),s(2,"Química General",1),s(3,"Física I",1),s(4,"Ingeniería Electromecánica I",1),s(5,"Álgebra y Geometría Analítica",1),s(9,"Física II",2,[1,3]),s(10,"Estabilidad",2,[1,3,5]),s(11,"Ingeniería Electromecánica II",2,[1,4,5])],
  quimica: [s(1,"Introducción a la Ingeniería Química",1),s(2,"Ingeniería y Sociedad",1),s(3,"Álgebra y Geometría Analítica",1),s(4,"Análisis Matemático I",1),s(5,"Química",1),s(9,"Introducción a Equipos y Procesos",2,[1,5]),s(10,"Probabilidad y Estadística",2,[3,4])],
  rural: [s(1,"Fundamentos de la Administración",1),s(2,"Contabilidad para la Administración",1),s(3,"Fundamentos de la Producción Agropecuaria",1),s(4,"Instalaciones y Maquinarias Agropecuarias",1),s(6,"Producción Vegetal",1,[3,4]),s(8,"Administración de Costos",2,[2]),s(9,"Gestión de la Empresa Agropecuaria",2,[1,2])],
};

export const plans: AcademicPlan[] = [
  {id:"isi",career:"Ingeniería en Sistemas de Información",version:"Plan 2023",source:"Ordenanza 1878",subjects:isi},
  {id:"electromecanica",career:"Ingeniería Electromecánica",version:"Plan 2023",source:"Ordenanza 1852 · carga en progreso",subjects:starter.electromecanica},
  {id:"quimica",career:"Ingeniería Química",version:"Plan 2023",source:"Ordenanza 1876 · carga en progreso",subjects:starter.quimica},
  {id:"rural",career:"Licenciatura en Administración Rural",version:"Plan 2026",source:"Ordenanza 2210 · carga en progreso",subjects:starter.rural},
];
