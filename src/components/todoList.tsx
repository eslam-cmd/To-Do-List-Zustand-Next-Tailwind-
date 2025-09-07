// src/components/TodoList.tsx
"use client";

import { useMemo, useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./todoItem";

type Filter = "all" | "active" | "completed";

export default function TodoList() {
  const todos = useTodoStore((s) => s.todos);
  const clearCompleted = useTodoStore((s) => s.clearCompleted);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className={`rounded-md px-3 py-1 text-sm font-semibold transition ${
              filter === "all"
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`rounded-md px-3 py-1 text-sm font-semibold transition ${
              filter === "active"
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setFilter("active")}
          >
            No completed
          </button>
          <button
            className={`rounded-md px-3 py-1 text-sm font-semibold transition ${
              filter === "completed"
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setFilter("completed")}
          >
            completed
          </button>
        </div>

        <button
          onClick={clearCompleted}
          className="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/20 transition"
        >
          Clear completed
        </button>
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 ? (
          <li className="text-white/80">There are no tasks.</li>
        ) : (
          filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </div>
  );
}
