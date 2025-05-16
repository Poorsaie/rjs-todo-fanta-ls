export function Header (data) {
    const { todos } = data
    const totalTodos = todos.length
    const expression = todos.length == 1 ? 'task' : 'tasks'

    return (
        <header>
            <h1>You Have { totalTodos } { expression } To Do</h1>
        </header>
    )
}