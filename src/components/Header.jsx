export function Header (data) {
    const { taskCount } = data
    const expression = taskCount == 1 ? 'task' : 'tasks'
    
    return (
        <h1>
            You Have {taskCount} {expression} To Do
        </h1>
    )
}