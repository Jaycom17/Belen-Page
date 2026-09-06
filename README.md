# Belén Valencia — Sitio Web

Landing page de **Belén Valencia**, asesora y consultora junior en formulación, estructuración y viabilidad de proyectos deportivos, comunitarios y empresariales. Sitio en español (Colombia).

**Stack:** React 19 · Vite 6 · TypeScript · Tailwind CSS 4 · pnpm

## Desarrollo local

Requisito: Node.js 20+ y pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm run lint     # typecheck
pnpm run build    # genera dist/
```

## Deploy (CI/CD)

Cada push a `main` construye y despliega automáticamente a Hostinger vía FTPS (`.github/workflows/deploy.yml`).

Secrets requeridos en **Settings → Secrets and variables → Actions**:

| Nombre | Descripción |
|--------|-------------|
| `FTP_SERVER` | Host FTP (ej. `ftp.tudominio.com`) |
| `FTP_USERNAME` | Usuario FTP |
| `FTP_PASSWORD` | Contraseña FTP |

Variable opcional `FTP_SERVER_DIR` (por defecto la raíz del FTP, que Hostinger mapea a `public_html`).

## SEO

Incluye technical SEO: canonical, Open Graph/Twitter, JSON-LD (`ProfessionalService` + `FAQPage`, éste último generado desde `src/data/content.ts`), `robots.txt`, `sitemap.xml` y `.htaccess` con HTTPS, redirección interna SPA y caché de assets.