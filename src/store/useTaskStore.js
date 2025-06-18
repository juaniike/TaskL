import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(persist(
  (set) => ({
    tasks: [],
    nextId: 1,

    addTask: (task) =>
      set((state) => ({ 
        tasks: [...state.tasks, { ...task, id: state.nextId }],
        nextId: state.nextId + 1
      })),

    editTask: (id, updatedTask) => 
      set((state) => ({
        tasks: state.tasks.map((task) => 
        task.id === id ? {...task, ...updatedTask} : task),
        })),

    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      })),

    toggleDone: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    })),
  }),

));
