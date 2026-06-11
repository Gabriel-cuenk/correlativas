# Dirección de producto y experiencia

## Principio visual

La aplicación debe sentirse como una mesa de planificación académica: clara, técnica y manipulable. El mapa del plan es el protagonista; la decoración nunca compite con las materias ni con sus relaciones.

## Selección determinista de dirección

Simulación de selección requerida por `gpt-taste`, usando como semilla la longitud del brief consolidado:

```text
seed = brief.length % 97
hero = Editorial Split; font = Geist
components = Horizontal Accordions + Inline Typography Images + Infinite Marquee; motion = Card Stacking + Scrubbing Text Reveals
```

Estas elecciones se aplican con moderación a la portada informativa. El simulador prioriza densidad legible y respuesta inmediata sobre animación ornamental.

## Arquitectura de experiencia

### Atención

Portada editorial breve con selector de carrera visible y una explicación directa: cargar estado, explorar correlativas y comparar escenarios.

### Interés

Vista previa interactiva que explica la diferencia entre habilitada para cursar, habilitada para rendir y bloqueada.

### Deseo

Recorrido visual del impacto de una decisión académica: una materia seleccionada revela requisitos, desbloqueos directos y alcance futuro.

### Acción

Inicio inmediato de una simulación anónima, sin registro.

## Simulador

- Encabezado compacto con carrera, plan y acción para reiniciar.
- Resumen fijo con progreso, materias habilitadas para cursar y materias habilitadas para rendir.
- Mapa horizontal por años con tarjetas de materia compactas.
- Estados distinguibles por color, texto e iconografía, nunca solo por color.
- Panel contextual al seleccionar una materia.
- Barra de comparación visible únicamente cuando existe un escenario.
- Comparación expandible con listas concretas de desbloqueos y requisitos faltantes.
- Control explícito para alternar entre edición de situación base y planificación.
- Advertencias no bloqueantes junto a la acción que las provoca.

## Reglas visuales

- Títulos amplios de hasta tres líneas; el título principal usa un contenedor equivalente a `max-w-6xl`.
- Sin etiquetas decorativas numeradas ni insignias arbitrarias.
- Contraste alto en botones y estados.
- Bento introductorio matemáticamente completo: una grilla de 12 columnas con bloques `7 + 5` y `4 + 4 + 4`, sin celdas vacías y con flujo denso.
- Movimiento de portada mediante revelado de texto y apilado de ejemplos; el mapa académico no usa animaciones que dificulten seguir relaciones.
- Diseño responsive: años en carrusel horizontal controlado en pantallas pequeñas y panel de detalle como hoja inferior.
