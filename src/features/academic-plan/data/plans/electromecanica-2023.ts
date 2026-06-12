import { s, type AcademicPlan } from "../../model/academic";

export const electromecanica2023: AcademicPlan = {
  id: "electromecanica",
  career: "Ingeniería Electromecánica",
  version: "Plan 2023",
  source: "Ordenanza 1852",
  subjects: [
    s(1,"Análisis Matemático I",1),s(2,"Química General",1),s(3,"Física I",1),s(4,"Ingeniería Electromecánica I",1),s(5,"Álgebra y Geometría Analítica",1),s(6,"Ingeniería y Sociedad",1),s(7,"Sistemas de Representación",1),s(8,"Representación Gráfica",1),
    s(9,"Física II",2,[1,3]),s(10,"Estabilidad",2,[1,3,5]),s(11,"Ingeniería Electromecánica II",2,[1,4,5]),s(12,"Conocimiento de Materiales",2,[2]),s(13,"Análisis Matemático II",2,[1,5]),s(14,"Programación en Computación",2,[1,5]),s(15,"Probabilidad y Estadística",2,[1,5]),s(16,"Inglés I",2),
    s(17,"Tecnología Mecánica",3,[9,12],[1,2,3,8]),s(18,"Ingeniería Electromecánica III",3,[9,11,13],[1,3,4,5]),s(19,"Mecánica y Mecanismos",3,[8,10,13],[1,3,5,7]),s(20,"Electrotecnia",3,[9,13],[1,3,5]),s(21,"Oleohidráulica y Neumática",3,[9],[1,3]),s(22,"Termodinámica Técnica",3,[9],[1,3]),s(23,"Matemática para Ingeniería Electromecánica",3,[1,3],[1,5]),s(24,"Higiene y Seguridad Industrial",3,[9],[1,2,3,6]),s(25,"Inglés II",3,[16]),
    s(26,"Elementos de Máquinas",4,[17,18,19],[9,10,11,12,13,14,16]),s(27,"Electrónica Industrial",4,[20],[9]),s(28,"Mecánica de los Fluidos y Máquinas Fluidodinámicas",4,[19,22],[9,10,13,14,23]),s(29,"Máquinas Eléctricas",4,[20],[9,23]),s(30,"Mediciones Eléctricas",4,[20,23],[9,13,23]),s(31,"Máquinas Térmicas",4,[22],[9,23]),s(32,"Economía",4,[11],[6]),s(33,"Legislación",4,[11],[6]),
    s(34,"Redes de Distribución e Instalaciones Eléctricas",5,[28,29],[20,23]),s(35,"Máquinas y Equipos de Transporte",5,[21,26,27,28],[16,17,18,23,24]),s(36,"Instalaciones Térmicas y Mecánicas",5,[27,30],[19,22,23]),s(37,"Centrales y Sistemas de Transmisión",5,[27,28,29,30],[19,20,22,23]),s(38,"Gestión y Mantenimiento Electromecánico",5,[21,27,28,29],[17,18,19,20,23,24]),s(39,"Organización Industrial",5,[31,32],[11,15]),s(40,"Automatización y Control Industrial",5,[23,26,27,28,29],[19,20,22,24]),s(41,"Proyecto Final",5,[25,27,28,30],[17,18,19,20,22,23,24]),
  ],
};
