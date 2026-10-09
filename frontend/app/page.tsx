'use client';

import { useEffect, useState } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import FilterBar from '@/components/FilterBar';
import { Task, TaskService } from '@/services/task.service';
import toast from 'react-hot-toast';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string>('');
  const [search, setSearch] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      const data = await TaskService.getAll({
        status: status || undefined,
        search: search || undefined,
      });
      setTasks(data);
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [status, search]);

  const handleCreate = async (payload: { title: string; description: string }) => {
    try {
      const t = await TaskService.create(payload);
      setTasks((prev) => [t, ...prev]);
      toast.success('Task added successfully');
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Failed to create task');
    }
  };

  const handleComplete = async (id: string) => {
    try {
      const updated = await TaskService.complete(id);
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
      toast.success('Task marked as completed');
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await TaskService.remove(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      toast.success('Task deleted');
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Failed to delete task');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Task <span className="text-brand-600">Manager</span>
          </h1>
          <p className="text-slate-500 mt-2">
            Organize your day — add, complete, and manage your tasks easily.
          </p>
        </header>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <TaskForm onCreate={handleCreate} />
          </div>

          <div className="p-4 border-b border-slate-100 bg-slate-50/60">
            <FilterBar
              status={status}
              search={search}
              onStatusChange={setStatus}
              onSearchChange={setSearch}
            />
          </div>

          <div className="p-4">
            {loading ? (
              <div className="text-center py-12 text-slate-400">Loading tasks...</div>
            ) : (
              <TaskList
                tasks={tasks}
                onComplete={handleComplete}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>

        <footer className="text-center text-xs text-slate-400 mt-6">
          © {new Date().getFullYear()} Task Manager · Full Stack Assessment
        </footer>
      </div>
    </main>
  );
}