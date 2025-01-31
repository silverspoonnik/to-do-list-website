import Todocard from "./components/todocard"
import Todoinput from "./components/todoinput"
import Todolist from "./components/todolist"
import { useState ,useEffect} from "react"
function App() {
  const [count, setCount] = useState(0)
  

  const [todos,setTodos]= useState([])
  const[todoValue,setTodoValue]=useState('')

  function persistData(newList)
  {
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited=todos[index]

    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
    
  }

  function handleDeleteTodo(index){
    const newTodoList= todos.filter((todo,todoIndex)=>{
      return todoIndex!== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(()=>{
    if(!localStorage)
      return

    let localtodos  =localStorage.getItem('todos');
    if(!localtodos)
      return

    localtodos=JSON.parse(localtodos).todos
    setTodos(localtodos)
  },[])
  return (  
    <>
      
     <Todoinput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
     <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>


    </>
  )
}

export default App
