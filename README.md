# Notes App — Backend

A RESTful API backend for the Notes application built with **Node.js**, **Express 5**, **TypeScript**, and **Supabase**.
Provides authentication validation, note CRUD operations, and secure JWT-based access control.

---

## 🚀 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express 5
* **Language:** TypeScript
* **Database/Auth:** Supabase
* **Validation:** Type-safe schemas
* **Env:** dotenv

---

## ✨ Features

* Supabase JWT authentication middleware
* Secure REST API for notes
* Create, read, update, delete notes
* Favorite toggle support
* CORS-enabled for frontend
* Modular route/controller structure
* Type-safe request handling

---

## 📂 Folder Structure

```text
src/
  server.ts
  app.ts

  routes/
    auth.route.ts
    notes.route.ts

  controllers/
    auth.controller.ts
    notes.controller.ts

  middleware/
    auth-middleware.ts

  lib/
    supabase.ts
```

---

## 🔐 Authentication

Authentication is handled via **Supabase JWT**.

Flow:

1. Client logs in via Supabase
2. Client receives access token
3. Token sent in API request header
4. Middleware verifies token
5. Request proceeds if valid

Header format:

```http
Authorization: Bearer <supabase_access_token>
```

---

## 📡 API Base URL

```text
http://localhost:8000/api/v1
```

---

## 📘 API Endpoints

### Auth

```http
POST /auth/signup
POST /auth/login
```

---

### Notes

```http
GET    /notes
POST   /notes
PUT    /notes/:id
DELETE /notes/:id
```

---

## ⚙️ Environment Variables

Create `.env`:

```env
PORT=8000

SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_service_key

CORS_ORIGIN=http://localhost:3000
```

---

## 🧩 Middleware

### `auth-middleware`

* Extracts Bearer token
* Verifies with Supabase
* Attaches user to request
* Rejects unauthorized requests

---

## ▶️ Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Server starts:

```text
http://localhost:8000
```

---

## 🏗️ Build & Run

Build:

```bash
npm run build
```

Start:

```bash
npm start
```

---

## 🔒 CORS Configuration

Express CORS allows frontend origin:

```ts
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
```

---

## 🧱 Type Safety

Shared schemas define request/response shapes:

```ts
export interface Note {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  userId: string;
}
```
