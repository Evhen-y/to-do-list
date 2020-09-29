import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'
const TodoList = ({todos, onDeleted, onToggleDone, onToggleImpotment}) => {
    const elements = todos.map((item)=>{
        const { id, ...itemProps} = item
        return(
            <li key= {id} className = 'list-group-item'>
                <TodoListItem {...itemProps}
                onDelet={() => onDeleted(id)}
                onToggleImpotment = {() => onToggleImpotment(id)}
        onToggleDone = {() => onToggleDone(id)}
                />
            </li>
        )
        })



    return(
        <ul className = 'list-group todo-list'>
        {elements}
        </ul>

)
}

export default TodoList