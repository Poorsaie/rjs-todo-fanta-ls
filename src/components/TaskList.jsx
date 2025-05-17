import { TaskCard } from './TaskCard'

export function TaskList (data) {
    const { tasks , activeTab } = data
    const currentTasks = activeTab === "All" ? 
        tasks :
            activeTab === "Open" ? 
                tasks.filter(task => !task.complete) :
                tasks.filter(task => task.complete)

    return (
        <>
            {
                currentTasks.map((task , taskIndex) => {
                    return (
                        <TaskCard 
                            key = { taskIndex }
                            task = { task }
                            taskIndex = { tasks.findIndex(thisTask => thisTask.unique == task.unique) }
                            { ...data }
                        />
                    )
                })
            }
        </>
    )
}