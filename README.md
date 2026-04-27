# Resorte Agencia — Sitio web

Sitio institucional de **Resorte Agencia** (Córdoba, Argentina): agencia creativa enfocada en branding, diseño web, e-commerce e integración con WhatsApp Business. Incluye páginas de servicios, portfolio, método de trabajo, contacto e idioma **es / en**.

## Stack

- [Next.js](https://nextjs.org/) 14 (App Router)
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) y utilidades de UI compartidas
- [Framer Motion](https://www.framer.com/motion/) para transiciones de página

## Requisitos

- **Node.js** 18 o superior (recomendado LTS)
- **pnpm** (el repo incluye `pnpm-lock.yaml`). También podés usar `npm` o `yarn` si preferís, ajustando los comandos.

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Otros scripts

| Comando       | Descripción              |
| ------------- | ------------------------ |
| `pnpm build`  | Build de producción      |
| `pnpm start`  | Servidor tras el build   |
| `pnpm lint`   | ESLint (Next.js)         |

## Estructura (resumen)

- `app/` — rutas y layouts del App Router (`page.tsx`, `layout.tsx`, etc.)
- `components/` — navegación, footer, proveedor de idioma, motion y componentes UI
- `lib/` — utilidades y textos compartidos del sitio (`site-copy.ts`, etc.)

## Notas

- El proyecto está marcado como **private** en `package.json`; la licencia y el uso del código dependen de las políticas del equipo Resorte.
- La metadata del layout referencia generación asistida; revisá `app/layout.tsx` si querés ajustar SEO u Open Graph.
