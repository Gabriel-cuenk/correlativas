# Correlativas

Simulador académico para explorar planes de estudio de la UTN, cargar una situación académica temporal y probar escenarios de planificación.

## Desarrollo

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Arquitectura

```text
src/
├── app/                              # App Router: rutas, metadata y estilos globales
│   ├── layout.tsx
│   ├── page.tsx                     # Server Component
│   └── globals.css
└── features/
    └── academic-plan/
        ├── components/              # Frontera cliente y componentes de presentación
        ├── data/                    # Planes académicos estructurados
        └── model/                   # Tipos y reglas puras del dominio
```

`src/app` se mantiene enfocado en convenciones de Next.js. La lógica del producto se organiza por feature para evitar dependencias genéricas entre carpetas globales.

## Documentación

- `CONTEXT.md`: glosario del dominio.
- `PRODUCT.md`: propósito y principios del producto.
- `docs/MVP.md`: alcance funcional.
- `docs/DESIGN.md`: dirección visual.
- `data-source/`: documentos académicos fuente.

## Validación

```bash
npm run lint
npm run build
```
