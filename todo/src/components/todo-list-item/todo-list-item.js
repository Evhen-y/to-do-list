import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends  Component{

    
    render() {
        const  {label, onDelet, onToggleImpotment, onToggleDone,
            done, important } =this.props


        let classNames ="todo-list-item"
            if (done) {
                classNames += ' done'
            }
            if (important) {
                classNames += ' important'
            }

            return(
                <span className= {classNames}>
                <span
            className="todo-list-item-label"

             onClick={ onToggleDone } >
                {label}
                </span>
                <button type = 'button'
            className='btn btn-outline-success btn-sm'
                onClick={onToggleImpotment}>
                <i className= 'fa fa-exclamation'/>
                </button>

                <button type = 'button'
            className='btn btn-outline-danger btn-sm'
                onClick={onDelet}>
                <i className= 'fa fa-trash-o'/>
                </button>
                </span>
            )
        }


}

