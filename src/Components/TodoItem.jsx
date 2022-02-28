function TodoItem({ todo, handleCheck, onDelete }) {

    return (
        <div className="todolist__item">
            <input className="todolist__item__check" onChange={(e)=> {handleCheck(e, todo.id)}} checked={todo?.isCompleted} type="checkbox" />
            <p className="todolist__item__title">{ todo?.title}</p>
            <button onClick={()=>{onDelete(todo.id)}} className="todolist__item__btn">del</button>
        </div>)
}

export default TodoItem