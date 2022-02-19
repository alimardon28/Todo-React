import React, { useState }  from 'react';
import Todoitem from './TodoItem';
import './TodoList.css';

const Todolist = () => {

    const [todos , setTodos] = useState([

    ])

    const hendleDelete = (id) =>{

        setTodos(state => state.filter(item => item.id !== id))
        }

    const handleAddTodo = () =>{
        let todoInput = document.querySelector('#todoInput')
        const newTodo = {
            id:todos[todos.length -1]?.id + 1 || 1,
            title:todoInput.value,
            isCompleted:false
        }

        setTodos(state => [...state , newTodo])
        todoInput.value = null
    }

    return (
        <div className='toDoList'>
            <h1 className='todoList__heading'>ToDo List <span className='span'>(React.)</span></h1>
            <div className='todoList'>
               <form className='form'>
                   <input id='todoInput' required placeholder='todo list' type="text" /><button type='button' onClick={handleAddTodo}>+</button>
               </form>

               {
                   todos.map(element => {
                       return <Todoitem
                                   key={element.id}
                                   todo={element}
                                   onDelete={hendleDelete}
                       />
                   })
               }
            </div>
         </div>
        );
    }
export default Todolist;
