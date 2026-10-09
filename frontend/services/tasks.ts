const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  createdAt: string;
  updatedAt: string;
};

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || 'Request failed');
  }
  return response.json() as Promise<T>;
}

export const getTasks = () => request<Task[]>('/tasks');
export const createTask = (title: string, description: string) =>
  request<Task>('/tasks', { method: 'POST', body: JSON.stringify({ title, description }) });
export const completeTask = (id: string) =>
  request<Task>(`/tasks/${encodeURIComponent(id)}`, { method: 'PATCH' });
export const deleteTask = (id: string) =>
  request<{ message: string }>(`/tasks/${encodeURIComponent(id)}`, { method: 'DELETE' });
