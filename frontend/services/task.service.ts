import api from './api';

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export const TaskService = {
  getAll: async (params?: { status?: string; search?: string }) => {
    const { data } = await api.get<Task[]>('/tasks', { params });
    return data;
  },
  create: async (payload: { title: string; description?: string }) => {
    const { data } = await api.post<Task>('/tasks', payload);
    return data;
  },
  complete: async (id: string) => {
    const { data } = await api.patch<Task>(`/tasks/${id}`);
    return data;
  },
  remove: async (id: string) => {
    const { data } = await api.delete(`/tasks/${id}`);
    return data;
  },
};