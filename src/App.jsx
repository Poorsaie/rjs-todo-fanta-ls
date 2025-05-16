import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { Footer } from './components/Footer'

import { useState , useEffect } from 'react'


function App () {
  const [todos , setTodos] = useState([])
  const [activeTab , setActiveTab] = useState('All')

  function handleAddTodo (data) {
    let newTodos = [...todos , {input : data, complete : false}]
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleDeleteTodo(index) {
    let newTodos = todos.filter((todo, i) => {return i !== index})
    // let newTodos = todos.filter((todo, i) => i !== index)
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleUpdateTodo (index) {
    let newTodos = [...todos]
    newTodos[index].complete = true;
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleSaveData(newTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos : newTodos }))
  }

    useEffect(() => {
      if (!localStorage || !localStorage.getItem('todo-app')) { return }
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
    }, [])
    

  return (
    <>
      <Header todos={todos} />
      <Tabs 
        todos={todos} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <TodoList 
        todos={todos} 
        activeTab={activeTab} 
        handleDeleteTodo={handleDeleteTodo} 
        handleUpdateTodo={handleUpdateTodo} 
      />
      <TodoInput handleAddTodo={handleAddTodo} /> 
      <Footer />
    </>
  )
}

export default App