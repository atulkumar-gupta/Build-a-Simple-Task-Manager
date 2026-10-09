# Task Manager — Full Stack Assessment

A simple, professional Task Manager built with Next.js (frontend) and NestJS (backend) + MongoDB.

## ✨ Features
- Add task (title + description)
- View all tasks
- Mark task as completed
- Delete task
- Search + filter by status (bonus)
- JWT authentication (bonus)

## 🧱 Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | NestJS, TypeScript |
| Database | MongoDB (Mongoose) |
| Auth | JWT + bcrypt |

## 🚀 Run Locally

### 1. Clone
```bash
git clone <your-repo-url>
cd task-manager

# Task Manager — Full Stack Assessment

A simple, professional Task Manager built with **Next.js** (frontend) and **NestJS** (backend) + **MongoDB**.

## ✨ Features

- ➕ Add task (title + description)
- 📋 View all tasks
- ✓ Mark task as completed
- 🗑️ Delete task
- 🔍 Search + filter by status
- 🔐 JWT authentication (signup / login)
- ✅ Form validation + error handling

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | NestJS, TypeScript |
| Database | MongoDB (Mongoose) |
| Auth | JWT + bcryptjs |

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ (Node 20 LTS recommended)
- MongoDB (local or Atlas)

### 1. Clone

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
\`\`\`

### 2. Backend setup

\`\`\`bash
cd backend
npm install

# .env file banao (see .env.example)
cp .env.example .env

npm run start:dev
# → http://localhost:5000/api
\`\`\`

### 3. Frontend setup

\`\`\`bash
cd frontend
npm install

# .env.local banao
cp .env.example .env.local

npm run dev
# → http://localhost:3000
\`\`\`

## 📚 API Documentation

Base URL: \`http://localhost:5000/api\`

### Auth

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | /auth/signup | \`{name, email, password}\` | Register new user |
| POST | /auth/login | \`{email, password}\` | Login & get JWT |

### Tasks (protected — need Bearer token)

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | /tasks | \`{title, description}\` | Create a task |
| GET | /tasks?status=&search= | – | List tasks (with filter) |
| PATCH | /tasks/:id | – | Mark task completed |
| DELETE | /tasks/:id | – | Delete task |

### Example

\`\`\`bash
# Signup
curl -X POST http://localhost:5000/api/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test","email":"test@example.com","password":"test123"}'

# Create task
curl -X POST http://localhost:5000/api/tasks \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <TOKEN>" \\
  -d '{"title":"My task","description":"Test"}'
\`\`\`

## 📁 Project Structure

\`\`\`
task-manager/
├── backend/           # NestJS API
│   ├── src/
│   │   ├── auth/      # Authentication (JWT)
│   │   ├── tasks/     # Tasks CRUD
│   │   └── main.ts
│   └── .env.example
│
└── frontend/          # Next.js UI
    ├── app/
    ├── components/
    ├── services/
    └── .env.example
\`\`\`

## 📦 Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas
# Task Manager

Starter project with a NestJS backend and Next.js frontend.

## Requirements
- Node.js 20+
- npm
- MongoDB connection string (local MongoDB or MongoDB Atlas)

## Backend setup
```bash
cd backend
copy .env.example .env
npm install
npm run start:dev
```
The backend runs at `http://localhost:4000`.

## Frontend setup
Open a second terminal:
```bash
cd frontend
copy .env.example .env.local
npm install
npm run dev
```
The frontend runs at `http://localhost:3000`.

## API
- `GET /tasks` - list tasks
- `POST /tasks` - create a task (`title` required, `description` optional)
- `PATCH /tasks/:id` - mark a task completed
- `DELETE /tasks/:id` - delete a task

## Notes
This is a starter scaffold, not a production-ready application. Configure MongoDB in `backend/.env` before running the backend. Authentication folders are included as requested, but login/signup is not implemented.

