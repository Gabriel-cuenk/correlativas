# MVP: simulador de estado académico

## Objetivo

Permitir que una persona cargue temporalmente su estado académico, comprenda qué puede cursar o rendir y compare escenarios para decidir qué materias priorizar.

## Alcance académico inicial

| Carrera | Plan |
| --- | --- |
| Ingeniería Electromecánica | 2023 |
| Ingeniería en Sistemas de Información | 2023 |
| Ingeniería Química | 2023 |
| Licenciatura en Administración Rural | 2026 |

Los datos se obtienen de los diseños curriculares y regímenes de correlatividades incluidos en `data-source/`.

## Flujo principal

1. Seleccionar una carrera y versión del plan.
2. Cargar el estado de las materias mediante una grilla agrupada por año.
3. Abrir el mapa del plan y consultar materias habilitadas para cursar o rendir.
4. Seleccionar una materia para comprender sus requisitos y dependencias.
5. Corregir la situación base desde un modo de edición claramente separado.
6. Crear un escenario temporal cambiando materias a regularizadas o aprobadas.
7. Comparar el escenario con la situación base mediante métricas de impacto.
8. Salir y descartar la simulación.

## Capacidades

- Estados de materia: pendiente, regularizada y aprobada.
- Reglas independientes para habilitar cursado y examen final.
- Composición de requisitos mediante relaciones `Y` y `O`.
- Requisitos globales, como aprobar todas las materias de niveles anteriores.
- Advertencias explicativas para cambios que no satisfacen las correlatividades.
- Impacto inmediato y futuro de regularizar o aprobar una materia.
- Comparación explicativa con materias desbloqueadas, cambios realizados y requisitos todavía faltantes.
- Materias agrupadas por año académico.
- Cambio cíclico de estado por materia y acciones masivas por año.
- Modos separados para editar la situación base y planificar un escenario.
- Un único escenario de planificación activo, reiniciable en cualquier momento.
- Sin cuentas, autenticación, perfiles ni persistencia.

## Estructura de datos propuesta

Los planes se mantienen como datos estructurados versionados dentro del proyecto.

```ts
type AcademicPlan = {
  id: string;
  career: string;
  version: string;
  subjects: Subject[];
};

type Subject = {
  id: string;
  code?: string;
  name: string;
  year: number;
  term?: "annual" | "first" | "second";
  kind?: "standard" | "elective" | "final-project" | "professional-practice";
  courseRequirements: Requirement;
  examRequirements: Requirement;
};

type Requirement =
  | { type: "all"; requirements: Requirement[] }
  | { type: "any"; requirements: Requirement[] }
  | { type: "subject"; subjectId: string; state: "regularized" | "approved" }
  | { type: "all-previous-years"; state: "approved" }
  | { type: "none" };
```

## Límites del MVP

- Los documentos fuente no se importan desde la interfaz.
- No se administra ni edita un plan desde la interfaz.
- No se guardan simulaciones al cerrar o recargar.
- No se emiten recomendaciones automáticas; se muestran métricas transparentes.
- La herramienta informa y advierte, pero no certifica la situación académica oficial.
