# CrewCmd — Marketing Site

Marketing and landing page for [CrewCmd](https://github.com/axislabs-dev/crewcmd), the AI-native workspace where humans and AI agents work side by side.

## Stack

- **Next.js 15** (App Router)
- **Payload CMS 3.x** (SQLite adapter)
- **Tailwind CSS 4**
- **TypeScript**
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the landing page.
Open [http://localhost:3000/admin](http://localhost:3000/admin) for the Payload CMS admin panel.

## Project Structure

```
src/
├── app/
│   ├── (frontend)/     # Public-facing pages
│   │   └── page.tsx    # Landing page
│   └── (payload)/      # Payload CMS admin
├── collections/        # Payload CMS collections
├── components/         # React components
```

## Payload CMS Collections

- **Users** — Admin users
- **Media** — Image uploads
- **Pages** — CMS-managed pages
- **Posts** — Blog posts
- **Testimonials** — Customer testimonials
- **FAQ** — Frequently asked questions

## Deploy

Designed for Cloudflare Pages deployment (SSG-friendly).

## License

Part of the CrewCmd project by [Axislabs](https://axislabs.dev).
