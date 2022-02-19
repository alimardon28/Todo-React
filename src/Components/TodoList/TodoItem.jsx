import React ,  { useState }   from 'react';
import './TodoList.css';

const Todoitem = ({todo , onDelete}) => {

    return (
        <div className='todo-item'>
           <p className='todo__item-box'>{todo.title}</p>
           <button onClick={() => {onDelete(todo.id)}}>x</button>
        </div>
    );
}

export default Todoitem;
