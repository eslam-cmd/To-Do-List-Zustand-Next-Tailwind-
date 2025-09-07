// src/components/TodoItem.tsx
"use client";

import { useState } from "react";
import { Todo, useTodoStore } from "@/store/todoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const removeTodo = useTodoStore((s) => s.removeTodo);
  const editTodo = useTodoStore((s) => s.editTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const onSave = () => {
    const v = draft.trim();
    if (!v) return;
    editTodo(todo.id, v);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`flex h-5 w-5 items-center justify-center rounded border transition ${
            todo.completed
              ? "border-emerald-400 bg-emerald-400 text-white"
              : "border-white/40 bg-transparent"
          }`}
          aria-label="toggle"
          title="Cancellation/Termination"
        >
          {todo.completed ? "✓" : ""}
        </button>

        {isEditing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="min-w-[160px] rounded-md border border-white/20 bg-white/10 px-2 py-1 text-white outline-none focus:ring-2 focus:ring-white/30"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") onSave();
              if (e.key === "Escape") {
                setIsEditing(false);
                setDraft(todo.text);
              }
            }}
          />
        ) : (
          <span
            className={`text-white ${
              todo.completed ? "line-through text-white/60" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            onClick={onSave}
            className="rounded-md bg-emerald-400/90 px-3 py-1 text-sm font-semibold text-white hover:bg-emerald-400 transition"
            title="Save"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="rounded-md bg-white/15 px-3 py-1 text-sm font-semibold text-white hover:bg-white/25 transition"
            title="Update"
          >
            Update
          </button>
        )}

        <button
          onClick={() => removeTodo(todo.id)}
          className="rounded-md bg-red-500/90 px-3 py-1 text-sm font-semibold text-white hover:bg-red-500 transition"
          title="Delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
