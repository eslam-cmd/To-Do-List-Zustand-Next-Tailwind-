// src/app/page.tsx
"use client";

import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
        {/* العنوان */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-medium">Zustand + Tailwind</span>
          </div>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            قائمة المهام
          </h1>
          <p className="mt-1 text-sm sm:text-base text-white/80">
            أضف مهامك، عدّل عليها، وعلّمها كمنجزة — التخزين دائم على جهازك.
          </p>
        </div>

        {/* الصندوق */}
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 shadow-2xl backdrop-blur">
          <TodoForm />
          <div className="mt-4">
            <TodoList />
          </div>
        </div>

        {/* الفوتر */}
        <footer className="mt-6 text-center text-xs text-white/70">
          مبني بـ Next.js + TypeScript + Zustand + Tailwind
        </footer>
      </div>
    </main>
  );
}
