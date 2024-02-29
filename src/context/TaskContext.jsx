import { createContext, useEffect, useState } from "react";


export const TaskContext = createContext();

export const TaksState = (props) => {
    const [task, setTask] = useState([
        {
            id_task: 1,
            id_tipo_task: 1,
            task_name: "DEFAULT TASK TODO",
            task_description: "descripcion por defecto de la tarea tipo TODO",
            fecha_entrega: "2024-03-25"
        },
        {
            id_task: 2,
            id_tipo_task: 2,
            task_name: "DEFAULT TASK IN PROGRESS",
            task_description: "descripcion por defecto de la tarea tipo IN PROGRESS",
            fecha_entrega: "2024-03-24"
        },
        {
            id_task: 3,
            id_tipo_task: 3,
            task_name: "DEFAULT TASK DONE",
            task_description: "descripcion por defecto de la tarea tipo DONE",
            fecha_entrega: "2024-03-23"
        },
        {
            id_task: 4,
            id_tipo_task: 3,
            task_name: "DEFAULT TASK DONE2",
            task_description: "dasdasdsa",
            fecha_entrega: "2024-03-22"
        }
    ]);

    const updateOrAddTask = (payload) => {
        // Busca el índice de la tarea existente con el mismo id_task
        const taskIndex = task.findIndex((t) => t.id_task === payload.id_task);

        // Crea una copia del array 
        let updatedTasks = [...task];

        // Verifica si existe 
        if (taskIndex !== -1) {
            updatedTasks[taskIndex] = payload;
        } else {
            const lastTask = getIdTaskMayor().id_task + 1;
            const newPayload = {
                ...payload,
                id_task: lastTask
            };

            updatedTasks.push(newPayload);
        }

        setTask(updatedTasks);
    };


    const deletedTask = (payload) => {

        setTask(prevTasks => prevTasks.filter(t => t.id_task !== payload.id_task));
    }

    const getIdTaskMayor = () => {
        const tareaConMayorId = task.reduce((tareaActual, tareaSiguiente) => {
            return tareaActual.id_task > tareaSiguiente.id_task ? tareaActual : tareaSiguiente;
        }, { id_task: 0 }); // Proporciona un valor inicial con id_task: 0

        return tareaConMayorId.id_task;
    };


    return (
        <TaskContext.Provider
            value={{

                updateOrAddTask,
                task,
                deletedTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
