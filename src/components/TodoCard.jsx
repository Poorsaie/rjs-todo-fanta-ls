export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props
    
    return(
        <div className="card todo-itme">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button
                    onClick={() => handleCompleteTodo(todoIndex)} 
                    disabled={todo.complete}>
                Done</button>
                <button 
                    onClick={() => handleDeleteTodo(todoIndex)}
                >
                Delete</button>
            </div>
        </div>
    )
}