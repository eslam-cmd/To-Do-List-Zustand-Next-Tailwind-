// src/components/TodoForm.tsx
"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";

export default function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    addTodo(value);
    setText("");
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full gap-2">
      <input
        className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40"
        placeholder="Add new text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg bg-white px-4 py-2 font-semibold text-black hover:bg-white/90 transition"
      >
        Add
      </button>
    </form>
  );
}
