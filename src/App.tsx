import React, {useState} from 'react';
import NavBar from "./components/navbar/Navbar";
import './index.css'
import ToDoForm from "./todo__form/ToDoForm";
import {ITodoItem} from "./interfaces/ITodo";
import ToDoList from "./components/ToDo/ToDoList";

const App: React.FC = () => {
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

    return (
        <>
            <NavBar/>
            <div className="container">
                <ToDoForm
                    createToDo={createToDo}
                />
                <ToDoList
                    todo={todo}
                    completeToDo={completeToDo}
                    removeToDo={removeToDo}
                />
            </div>
        </>
    );
};

export default App;