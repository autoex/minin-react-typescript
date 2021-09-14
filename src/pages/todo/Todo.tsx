import React, {useEffect, useState} from 'react';
import {ITodoItem} from "../../interfaces/ITodo";
import ToDoForm from "../../todo__form/ToDoForm";
import ToDoList from "../../components/ToDo/ToDoList";

const Todo: React.FC = () => {
    const [todo, setTodo] = useState<ITodoItem[]>([]);
    const createToDo = (title: string) => {
        setTodo(
            [{
                id: Date.now(),
                title: title,
                completed: false,
            }, ...todo]
        )
    };
    const completeToDo = (id: number) => {
        setTodo(prev => prev.map(item => {
                if (item.id === id) {
                    return {...item, completed: !item.completed}
                }
                return item
            }
            )
        )
    };
    const removeToDo = (id: number) => {
        setTodo(prev => prev.filter(item => item.id !== id)
        )

    };

    useEffect(()=> {
        const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodoItem[];
        setTodo(saved)

    }, []);


    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todo))

    }, [todo])
    return (
        <>
            <ToDoForm
                createToDo={createToDo}
            />
            <ToDoList
                todo={todo}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
            />
        </>
    );
};

export default Todo;