import { s, type AcademicPlan } from "../../model/academic";

export const quimica2023: AcademicPlan = {
  id: "quimica",
  career: "Ingeniería Química",
  version: "Plan 2023",
  source: "Ordenanza 1876",
  subjects: [
    s(1,"Introducción a la Ingeniería Química",1),s(2,"Ingeniería y Sociedad",1),s(3,"Álgebra y Geometría Analítica",1),s(4,"Análisis Matemático I",1),s(5,"Física I",1),s(6,"Química",1),s(7,"Sistemas de Representación",1),s(8,"Fundamentos de Informática",1),
    s(9,"Introducción a Equipos y Procesos",2,[1,6]),s(10,"Probabilidad y Estadística",2,[3,4]),s(11,"Química Inorgánica",2,[6]),s(12,"Análisis Matemático II",2,[3,4]),s(13,"Física II",2,[4,5]),s(14,"Química Orgánica",2,[6]),s(15,"Legislación",2,[1,2]),s(16,"Inglés I",2),
    s(17,"Balances de Masa y Energía",3,[6,7,8,13,9],[1,3,4]),s(18,"Termodinámica",3,[11,12,13],[4,6]),s(19,"Matemática Superior Aplicada",3,[12],[3,4]),s(20,"Ciencia de los Materiales",3,[9,11,14],[1,6]),s(21,"Fisicoquímica",3,[9,12,13],[3,4,6]),s(22,"Fenómenos de Transporte",3,[9,12,13],[3,4,6]),s(23,"Química Analítica",3,[10,11,14],[2,6]),s(24,"Microbiología y Química Biológica",3,[11,14],[6]),s(25,"Química Aplicada",3,[13,9,11,14],[1,2,6,16]),s(26,"Inglés II",3,[16]),
    s(27,"Diseño, Simulación, Optimización y Seguridad de Procesos",4,[17,19],[7,8,12,26,9]),s(28,"Operaciones Unitarias I",4,[17,18,22],[12,13,9]),s(29,"Tecnología de la Energía Térmica",4,[17,18,21,22],[12,13,9]),s(30,"Economía",4,[10],[2,9,15]),s(31,"Operaciones Unitarias II",4,[18,21,22],[12,13,14,9]),s(32,"Ingeniería de las Reacciones Químicas",4,[17,18,21,22],[12,11,14]),s(33,"Calidad y Control Estadístico de Procesos",4,[10],[4]),s(34,"Organización Industrial",4,[10],[2,9,15]),
    s(35,"Control Automático de Procesos",5,[27,31],[17,19,23]),s(36,"Mecánica Industrial",5,[9,21],[5,11,20]),s(37,"Ingeniería Ambiental",5,[25,28,31,32],[15,17,23]),s(38,"Procesos Biotecnológicos",5,[17,21,22,24],[9,11,14]),s(39,"Higiene y Seguridad en el Trabajo",5,[11,14,17],[9]),s(40,"Máquinas e Instalaciones Eléctricas",5,[28],[9,13]),s(41,"Proyecto Final",5,[27,28,29,31,32,34],[17,21,22,25,30]),
  ],
};
