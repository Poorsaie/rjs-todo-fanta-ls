import { useState } from "react"

export function TaskInput (data) {
    const { handleAddTask } = data
    const [inputValue , setInputValue] = useState("")

    return (
        <div className = "input-container">
            <input 
                value = { inputValue } 
                placeholder = "Add New Task" 
                onChange = {(e) => setInputValue(e.target.value)}
            />
            <button onClick = { () => {
                    if (!inputValue) return
                    handleAddTask(inputValue)
                    setInputValue('')
                }
            }
                 >
                <i className = "fa-solid fa-plus"></i>
            </button>
        </div>
    )
}