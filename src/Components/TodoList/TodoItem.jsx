import React ,  { useState }   from 'react';
import './TodoList.css';

const Todoitem = ({todo , onDelete , isCompleted , changeIsCompleted}) => {

    return (
        <>
           <div className='todo-item'>
                    <p style={{textDecoration: isCompleted ? 'line-through' : ''}} className='todo__item-box'>{todo.title}</p>
                 <div className="check__box">
                   <input onChange={(event) => {changeIsCompleted(event, todo. id)}} className='check' checked={isCompleted} type="checkbox" />
                   <button onClick={() => {onDelete(todo.id)}}>x</button>
                  </div>
         </div>
      </>
    );
}

export default Todoitem;
