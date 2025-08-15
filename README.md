# Fullstack Food Ordering System

A fullstack food ordering system built with **React** (TypeScript) on the frontend and **Node.js** (TypeScript) on the backend.  
The backend uses **Express** with Sequelize (PostgreSQL) and integrates **Auth0** for authentication.  

---

## Frontend

### How to Run
**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm run build
```

### Tech Choices
- **React with TypeScript** – Strict typing and better development experience.
- **Tailwind CSS** – Utility-first CSS for rapid styling.
- **TanStack React Query** – Handles server state, caching, background updates, and automatic refetching for better data synchronization.

#### Trade-offs
- **TanStack Query** can be verbose when setting up queries and mutations, but its benefits are significant:
  - Automatic caching of data.
  - Background updates to keep UI fresh.
  - Easy query invalidation.
  - Reduced need for manual API state management.

### Known Issues / Areas for Improvement
- Some components can be further modularized for better reusability.
- **Confirm Order total price** is currently stored as a number — should use a Decimal library to avoid floating-point rounding issues.

---

## Backend

### How to Run
1. Run Sequelize migrations:
```bash
npx sequelize-cli db:migrate
```
2. Seed the database:
```bash
npx sequelize-cli db:seed:all
```
3. Start development server:
```bash
npm run dev
```
4. Build for production:
```bash
npm run build
```

### Tech Choices
- **Node.js with Express** – Minimal, performant web framework.
- **PostgreSQL** – Reliable and feature-rich relational database.
- **Sequelize ORM** – Simplifies DB queries with model-based approach.
- **Auth0** – Easier to set up authentication without building from scratch (trade-off: harder to customize deeply).

### Known Issues / Areas for Improvement
- Authentication flow can be enhanced (more fine-grained role-based access).
- Implement **checkJwt** middleware on protected APIs.
- Add **CSRF protection**.
- Write automated tests (unit/integration).

---

## Authentication
We chose **Auth0** for authentication because:
- It’s quick to set up with hosted login pages and SDKs.
- Good documentation and community support.
- Trade-off: Harder to fully customize than a self-built authentication solution.

---

## Deployment
Currently **not deployed**.

---

## Author
Built as part of a technical project test.

