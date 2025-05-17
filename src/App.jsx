import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TaskInput } from './components/TaskInput'
import { Footer } from './components/Footer'
import { useState , useEffect , useRef } from 'react'
import { TaskList } from './components/TaskList'

function App () {

  const id = useRef(1000)
  const [tasks , setTasks] = useState([])
  const [activeTab , setActiveTab] = useState('All')

  function setUnique () {
    return ++id.current
  }

  function handleAddTask (taskName) {
    let newTasks = [...tasks , {unique : setUnique() , input : taskName , complete : false}]
    setTasks(newTasks)
    handleSaveData(newTasks)
  }

  function handleDeleteTask (taskIndex) {
    let newTasks = tasks.filter((task , indx) => indx != taskIndex )
    setTasks(newTasks)
    handleSaveData(newTasks)
  }

  function handleUpdateTask (taskIndex) {
    let newTasks = [...tasks]
    newTasks[taskIndex].complete = true
    setTasks(newTasks)
    handleSaveData(newTasks)
  }

  function handleSaveData (newTasks) {
    localStorage.setItem('todo-app' , JSON.stringify( { tasks : newTasks } ))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTasks(db.tasks)
  } , [])

  return (
    <>
        <Header taskCount = { tasks.length } />
        <Tabs 
          tasks = { tasks } 
          activeTab = { activeTab } 
          setActiveTab = {setActiveTab}
        />
        <TaskList 
          tasks = { tasks }
          activeTab = { activeTab }
          handleDeleteTask = { handleDeleteTask }
          handleUpdateTask = { handleUpdateTask }
        />
        <TaskInput handleAddTask = { handleAddTask }/>
        <Footer />
    </>
  )
}

export default App