import React from 'react';
import {ITodoItem} from "../../interfaces/ITodo";
import ToDoItem from "./ToDoItem";
type ToDoListProps = {
    todo: ITodoItem[]
    completeToDo: (id:number)=>void
    removeToDo: (id:number)=>void

}

const ToDoList: React.FC<ToDoListProps> = ({todo, completeToDo, removeToDo}) => {
    if(todo.length === 0 ) return (
        <div>
            <h1>No Todos</h1>
        </div>
    );
    return (
        <ul>
            {todo.map(item=><ToDoItem key={item.id} {...item} completeToDo={completeToDo} removeToDo={removeToDo} />)}
        </ul>
    );
};

export default ToDoList;