import React from 'react';
import {ITodoItem} from "../../interfaces/ITodo";

interface IToDoItem extends ITodoItem{
    completeToDo: (id:number)=>void
    removeToDo: (id:number)=>void

}

const ToDoItem: React.FC<IToDoItem> = ({id, title, completed, completeToDo, removeToDo}) => {
    const classes = ['todo'];
    if (completed) classes.push('completed');
    return (
        <li className={classes.join(' ')} >
            <label>
                <input type="checkbox" checked={completed} onChange={()=>completeToDo(id)}/>
                <span>
                 {title}
                </span>
            </label>
            <i className="material-icons red-text" onClick={()=>removeToDo(id)}>delete</i>

        </li>
    );
};

export default ToDoItem;