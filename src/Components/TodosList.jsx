import "../Components/TodoItem.css"
import { useState } from "react"
import TodoItem from './TodoItem'
import { getAll, setItem } from "../utils/localStoroge"
function TodoList() {
    const [todos, setTodos] = useState([])
    const handleCheck = (e, id) => {
            setTodos(state => {
                const newTodos =  state.map(item => {
                    if (item.id === id) {
                    return {
                        ...item,
                        isCompleted:e.target.checked
                    }
                }
                return item
            })
            setItem(newTodos)
            return newTodos
        })
    }

    const handleUnCompleted = () => {
        const localTodos = getAll()
        const unCompleted = localTodos.filter(todo => !todo.isCompleted)
        setTodos(unCompleted)
    }
    const handleCompleted = () => {
        const localTodos = getAll()
        const completed = localTodos.filter(todo => todo.isCompleted)
        setTodos(completed)
    }
    const handleShowAll = () => {
         const localTodos = getAll()
        setTodos(localTodos)
    }

    const addTodo = (e) => {
        e.preventDefault()
        let titleInput = document.querySelector('.todolist__input__field')

        const todo = {
            id: (todos[todos.length - 1] || 0)?.id + 1,
            title:titleInput.value,
            isCompleted:false
        }

        setTodos(state => {
            const newTodos = [...state, todo]
            setItem(newTodos)
            return newTodos
        })
        titleInput.value = ""
    }

    const handleDelete = (id) => {
        setTodos((state) => {
            const newTodos = state.filter(item => item.id !== id)
            setItem(newTodos)
            return newTodos
        })
    }
    return <div className="todolist">
        <form onSubmit={addTodo} className="todolist__input">
            <input className="todolist__input__field" placeholder="Todo ..." type="text" />
            <button className="todoBtn"><i className="bi bi-plus-lg"></i></button>
        </form>
        {
            todos.length === 0 ? <p className="tosdoss">Todos not found</p> : todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} handleCheck={ handleCheck}/>
            })
        }
        <div className="todolist__filters">
            <button className="AllBtn btn bg-primary text-light" onClick={handleShowAll}>All</button>
            <button className="unCompleted btn bg-success text-light" onClick={handleUnCompleted}>UnCompleted</button>
            <button className="completed btn bg-warning text-light" onClick={handleCompleted}>Completed</button>
        </div>
    </div>
}

export default TodoList