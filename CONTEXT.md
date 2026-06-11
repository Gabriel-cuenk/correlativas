# Glosario del dominio

## Carrera

Trayecto académico ofrecido por la facultad que conduce a un título. El sistema contempla Ingeniería Electromecánica, Ingeniería en Sistemas de Información, Ingeniería Química y Licenciatura en Administración Rural.

## Plan académico

Conjunto versionado de materias, reglas de correlatividad y requisitos de una carrera. Cada plan académico pertenece a una única carrera y se identifica por su versión, año o resolución.

Para el alcance del sistema, cada versión del plan y su régimen de correlatividades se consideran comunes a todas las facultades regionales de la Universidad Tecnológica Nacional.

## Versión del plan

Identidad de una edición concreta de un plan académico. Permite evaluar el estado y las posibilidades académicas de un alumno sin que cambios posteriores en la carrera alteren sus reglas.

## Simulación académica

Sesión anónima y temporal en la que una persona selecciona una versión del plan, carga su situación académica y explora escenarios de planificación. La simulación se descarta al salir y no representa una cuenta ni un perfil persistente.

## Carga de situación académica

Proceso inicial de una simulación académica en el que la persona asigna a cada materia un estado pendiente, regularizado o aprobado. Las materias se presentan agrupadas por año académico y la carga mantiene automáticamente la coherencia entre estados.

Cada materia permite recorrer cíclicamente los estados pendiente, regularizada y aprobada. Cada año académico ofrece acciones para marcar todas sus materias como aprobadas o reiniciarlas a pendiente.

## Mapa del plan

Vista principal de una simulación académica que presenta las materias agrupadas por año académico. Al seleccionar una materia revela sus requisitos para cursar y rendir, las materias que habilita al regularizarla o aprobarla, sus dependencias indirectas y las acciones disponibles para simular cambios.

El mapa utiliza revelado progresivo: una materia solo se muestra cuando está regularizada, aprobada o habilitada para cursar. Las materias todavía bloqueadas permanecen ocultas hasta que el estado académico satisface sus requisitos.

## Advertencia de correlatividad

Aviso que aparece cuando una persona asigna a una materia un estado cuyos requisitos académicos no están satisfechos. La advertencia explica los requisitos faltantes, pero no impide el cambio ni la exploración del escenario.

## Estado académico

Situación cargada dentro de una simulación académica respecto de las materias de una versión del plan, determinada por las materias regularizadas y aprobadas.

## Estado de materia

Situación mutuamente excluyente de una materia dentro de una simulación académica. Puede ser pendiente, regularizada o aprobada. Una materia aprobada representa el estado más avanzado y presupone que fue regularizada.

## Pendiente

Estado de una materia que todavía no fue regularizada ni aprobada.

## Regularizada

Estado de una materia cursada satisfactoriamente, pero todavía no aprobada.

## Aprobada

Estado final de una materia aprobada, ya sea mediante examen final o promoción directa.

## Situación académica base

Estado académico cargado al comenzar una simulación académica. Sirve como punto de comparación para los escenarios de planificación y se descarta al salir.

## Edición de situación base

Modo de la simulación académica que permite corregir o actualizar la situación académica base. Los cambios realizados en este modo alteran el punto de comparación de los escenarios posteriores.

## Escenario de planificación

Variación temporal derivada de la situación académica base. Permite cambiar hipotéticamente estados de materias y analizar sus efectos sin modificar la situación académica base.

Cada simulación académica mantiene un único escenario de planificación activo, que puede reiniciarse para explorar una alternativa diferente.

## Modo de planificación

Modo de la simulación académica que permite crear y modificar un escenario de planificación sin alterar la situación académica base.

## Impacto académico

Conjunto de materias que quedan habilitadas para cursar o rendir como consecuencia de los cambios propuestos en un escenario de planificación.

## Comparación de escenario

Lectura explicativa de las diferencias entre la situación académica base y el escenario de planificación activo. Presenta los cambios hipotéticos realizados, las nuevas materias habilitadas para cursar, las nuevas materias habilitadas para rendir y las materias que continúan bloqueadas junto con sus requisitos faltantes.

## Prioridad académica

Valor comparativo que ayuda al alumno a decidir qué materia conviene regularizar o aprobar primero según el impacto académico esperado.

La prioridad se presenta mediante métricas transparentes: materias habilitadas inmediatamente para cursar, materias habilitadas inmediatamente para rendir, materias dependientes directas e indirectas y año académico de las materias desbloqueadas. La persona interpreta estas métricas según su objetivo.

## Dependencia directa

Relación en la que una materia aparece explícitamente como requisito académico de otra.

## Dependencia indirecta

Relación en la que una materia influye sobre otra a través de una o más dependencias intermedias.

## Materia

Unidad curricular perteneciente a una versión del plan académico. Puede tener requisitos distintos para quedar habilitada para cursar y para rendir.

## Habilitada para cursar

Estado de una materia cuyos requisitos de cursado están satisfechos por el estado académico del alumno. Indica que el alumno puede inscribirse para cursarla.

## Habilitada para rendir

Estado de una materia cuyos requisitos de examen final están satisfechos por el estado académico del alumno. Indica que el alumno puede rendirla para intentar aprobarla.

## Regla de correlatividad

Condición académica que relaciona materias dentro de una versión del plan y determina cuándo una materia queda habilitada para cursar o para rendir.

## Grupo de requisitos

Composición de requisitos dentro de una regla de correlatividad. Un grupo puede exigir que se cumplan todos sus requisitos mediante una relación `Y`, o que se cumpla al menos uno mediante una relación `O`.

## Requisito académico

Condición sobre una materia correlativa que exige que esta se encuentre regularizada o aprobada. Los requisitos académicos pueden combinarse en grupos.

## Requisito global

Condición académica que se evalúa sobre un conjunto de materias o sobre una regla general del plan, en lugar de depender de una única materia. Puede exigir, por ejemplo, aprobar todas las materias de niveles anteriores.

## Materia especial

Materia como Proyecto Final, Práctica Profesional Supervisada o una electiva que puede utilizar requisitos académicos comunes y requisitos globales. Se presenta y evalúa dentro del mapa del plan como cualquier otra materia.
