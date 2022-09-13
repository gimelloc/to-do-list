import { createContext, ReactNode, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:saved";

export interface Task {
    id: string;
    title: string;
    isCompleted: boolean; 
  }

interface TaskContextType {
    tasks: Task[];
    tasksQuantity: number;
    completedTasks: number;
    addTask: (taskTitle: string) => void;
    removeTask: (taskId: string) => void;
    markTaskCompleted: (taskId: string) => void;
}

interface TaskContextProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider({ children }: TaskContextProviderProps){
    const [tasks, setTasks] = useState<Task[]>([]);

    function loadSavedTasks(){
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved){
            setTasks(JSON.parse(saved));
        }
    }

    useEffect(() => {
        loadSavedTasks();
    }, [])

    function saveTasks(newTasks: Task[]){
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }

    function addTask(taskTitle: string){
        saveTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            }
        ])
    };

    function removeTask(taskId: string){
        const newTasks = tasks.filter((task) => task.id !== taskId);
        saveTasks(newTasks);
    }

    const tasksQuantity = tasks.length;

    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    function markTaskCompleted(taskId: string){
        const newTasks = tasks.map((task) => {
            if(task.id === taskId){
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                }
            }
            return task;
        })
        saveTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            tasksQuantity,
            completedTasks,
            addTask,
            removeTask,
            markTaskCompleted,
        }}>
            {children}
        </TaskContext.Provider>
    )
}