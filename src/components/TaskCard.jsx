export function TaskCard (data) {
    const { task , handleUpdateTask , handleDeleteTask , taskIndex } = data

    return (
        <div className = { "todo-item" + (task.complete ? " todo-complete" : " ") }>
            <p>{ task.input }</p>
            <div className = "todo-buttons">
                <button 
                    onClick = { () => handleUpdateTask(taskIndex) }
                    disabled = { task.complete }
                >
                    Done
                </button>
                <button 
                    onClick = { () => handleDeleteTask(taskIndex) }
                >
                    Delete
                </button>
            </div>
        </div>
    )
}