import React, { useState }  from 'react';
import Todoitem from './TodoItem';
import './TodoList.css';

function App() {

    const [todos , setTodos] = useState([])

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

    const changeIsCompleted = (event , id) => {
        console.log(id, event.target.checked);

        const ischecked = event.target.checked

        setTodos(state => state.map(element =>{
                if(element.id === id){
                    return{
                        ...element,
                        isCompleted:ischecked
                    }
                }
                return element
            }))
    }


    return (
        <div className='toDoList'>
            <h1 className='todoList__heading'>ToDo List <span className='span'>(React.)</span></h1>
            <div className='todoList'>
               <form className='form'>
                   <input id='todoInput' className='handle__input'  placeholder='todo list' type="text" required/><button type='button' onClick={handleAddTodo}>+</button>
               </form>

               {
                   todos.map(element => {
                       return <Todoitem key={element.id} todo={element}onDelete={hendleDelete} changeIsCompleted={changeIsCompleted}
                       />
                   })
               }
                <div className="all__button">
                 <button className='all__btn'>All</button>
                 <button className='comp__btn'>Completed</button>
                 <button className='unComp__btn'>Uncompleted</button>
              </div>
            </div>
         </div>
        );
    }
export default App;
