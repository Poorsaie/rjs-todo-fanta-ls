import { TodoCard  } from "./TodoCard"

export function TodoList (data) {
    const { todos, activeTab } = data
    const currentTodos = activeTab === "All" ?
        todos :
            activeTab === "Open" ?
                todos.filter(todo => !todo.complete) :
                todos.filter(todo => todo.complete)

    return(
        <>
            { currentTodos.map((todo, index) => {
                return(
                    <TodoCard 
                        key={index} 
                        todoIndex={index} 
                        todo={todo} 
                        {...data}
                    />
                )
            })}
        </>
    )
}