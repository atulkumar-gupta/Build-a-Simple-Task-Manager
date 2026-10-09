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
