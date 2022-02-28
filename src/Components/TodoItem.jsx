function TodoItem({ todo, handleCheck, onDelete }) {

    return (
        <div className="todolist__item">
            <p className="todolist__item__title">{ todo?.title}</p>
            <div className="InputBox">
               <input className="todolist__item__check" onChange={(e)=> {handleCheck(e, todo.id)}} checked={todo?.isCompleted} type="checkbox" />
              <button onClick={()=>{onDelete(todo.id)}} className="todolist__item__btn btn btn-danger"><i className="bi bi-x-lg"></i></button>
            </div>
        </div>)
}

export default TodoItem