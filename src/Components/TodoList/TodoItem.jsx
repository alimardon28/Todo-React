import React  from 'react';
import './TodoList.css';

const Todoitem = ({todo , onDelete , isCompleted , changeIsCompleted}) => {

    return (
        <>
           <div className='todo-item'>
                    <p style={{textDecoration: isCompleted? 'line-through' : ''}} className='todo__item-box'>{todo?.title}</p>
                 <div className="check__box">
                   <input onChange={(event) => {changeIsCompleted(event, todo?.id)}} className='check' checked={isCompleted} type="checkbox" />
                   <button className='trash' onClick={() => {onDelete(todo?.id)}}><i className='bi bi-trash3'></i></button>
                  </div>
         </div>
      </>
    );
}

export default Todoitem;
