'use client';

import { Task } from '@/services/tasks';

type Props = {
  task: Task;
  onComplete: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
};

export default function TaskItem({ task, onComplete, onDelete }: Props) {
  const completed = task.status === 'completed';
  return (
    <article className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className={`status ${completed ? 'done' : ''}`}>{task.status}</span>
      </div>
      <div className="task-actions">
        {!completed && <button className="secondary" onClick={() => void onComplete(task._id)}>Complete</button>}
        <button className="danger" onClick={() => void onDelete(task._id)}>Delete</button>
      </div>
    </article>
  );
}
