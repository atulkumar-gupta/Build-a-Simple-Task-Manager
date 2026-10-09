'use client';

import { Task } from '@/services/task.service';

interface Props {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onComplete, onDelete }: Props) {
  if (!tasks.length) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-3">📝</div>
        <p className="text-slate-500">No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => {
        const done = task.status === 'completed';
        return (
          <li
            key={task._id}
            className={`flex items-start justify-between gap-4 rounded-xl border p-4 transition shadow-sm ${
              done
                ? 'bg-emerald-50/60 border-emerald-200'
                : 'bg-white border-slate-200 hover:shadow-md'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className={`font-semibold truncate ${
                    done ? 'line-through text-slate-400' : 'text-slate-800'
                  }`}
                >
                  {task.title}
                </h3>
                <span
                  className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    done
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {task.status}
                </span>
              </div>
              {task.description && (
                <p className="text-sm text-slate-500 mt-1 break-words">
                  {task.description}
                </p>
              )}
              <p className="text-xs text-slate-400 mt-2">
                Created: {new Date(task.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {!done && (
                <button
                  onClick={() => onComplete(task._id)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition"
                >
                  ✓ Complete
                </button>
              )}
              <button
                onClick={() => onDelete(task._id)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}