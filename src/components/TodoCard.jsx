export function TodoCard(data) {
    const {todo , todoIndex , handleDeleteTodo , handleUpdateTodo} = data

    return(
        <div className={"card todo-item " + (todo.complete ? " todo-complete" : " ")}>
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button 
                    onClick={() => handleUpdateTodo(todoIndex)} 
                    disabled={todo.complete}
                >
                Done
                </button>
                <button 
                    onClick={() => handleDeleteTodo(todoIndex)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}