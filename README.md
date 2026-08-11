# Paramount Psychiatry — Website

Public website foundation for **Paramount Psychiatry**, led by Dr. Pooja Tandon, MD. This repository is being built in phases; this README reflects **Phase 1: Foundation & Project Setup**.

> Phase 1 delivers the tech stack, project structure, design system, reusable components, routing skeleton, and a component-preview home page. Full page content (final homepage, About, Conditions, Services, etc.), the database layer, authentication, and the contact form backend are explicitly **out of scope** for this phase.

## Tech Stack

**Frontend**
- React.js + Vite
- React Router (`react-router-dom`)
- Tailwind CSS v4
- Framer Motion
- Lucide React (icons)
- `@fontsource/fraunces` + `@fontsource/inter` (self-hosted type)

**Backend**
- Node.js + Express.js
- CORS, dotenv
- Centralized error handling

**Database**

Database selection is intentionally deferred. The API layer is being built database-independent (Controller → Service → Repository/Adapter), so PostgreSQL, MongoDB, or Google Sheets can be adopted later without changing the frontend or route contracts. No database packages are installed yet.

## Project Structure

```
paramount-psychiatry/
├── client/                    # React + Vite frontend
│   ├── public/
│   │   └── images/            # Future real image assets
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── layout/        # Navbar, Footer, Layout
│   │   │   ├── ui/            # Container, Section, Button, Card, SectionHeading
│   │   │   └── shared/        # AppointmentButton, Logo
│   │   ├── data/              # site.js, navigation.js
│   │   ├── hooks/
│   │   ├── lib/               # cn.js, motion.js
│   │   ├── pages/
│   │   ├── routes/            # Router configuration
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css          # Design tokens + base styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Express API
│   ├── src/
│   │   ├── config/            # env.js
│   │   ├── controllers/
│   │   ├── middleware/        # notFound, errorHandler
│   │   ├── routes/
│   │   ├── services/          # (reserved for future DB-independent services)
│   │   ├── utils/             # (reserved)
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json                # Convenience root scripts
```

## Installation

From the repository root:

```bash
npm run install:all
```

Or install each package individually — see below.

### Frontend setup

```bash
cd client
npm install
cp .env.example .env
```

### Backend setup

```bash
cd server
npm install
cp .env.example .env
```

## Environment Variables

**`server/.env.example`**

```
PORT=5000
CLIENT_URL=http://localhost:5173
```

**`client/.env.example`**

```
VITE_API_URL=http://localhost:5000/api
```

No secrets, API keys, or database credentials exist in this phase.

## Running Locally

Run each in its own terminal:

```bash
# Frontend — http://localhost:5173
cd client
npm run dev

# Backend — http://localhost:5000
cd server
npm run dev
```

Or from the root, using the convenience scripts:

```bash
npm run dev:client
npm run dev:server
```

## API Health Endpoint

```
GET /api/health
```

Response:

```json
{
  "success": true,
  "message": "Paramount Psychiatry API is running"
}
```

## Building & Linting

```bash
cd client
npm run build   # production build
npm run lint    # oxlint
```

## Database Status

**Database selection is intentionally deferred.** The team is still deciding between PostgreSQL, MongoDB, and Google Sheets. No database driver, ORM, or credentials are present in this codebase. The backend is structured so a repository/adapter layer can be introduced later without touching controllers or the frontend.

## Phase Boundary

This is **Phase 1 only**. It does not include the final homepage, complete content pages, contact form backend, database, authentication, or admin panel. Those are handled in later phases, reviewed and approved individually.
