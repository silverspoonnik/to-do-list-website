import Todocard from "./components/todocard"
import Todoinput from "./components/todoinput"
import Todolist from "./components/todolist"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      
     <Todocard></Todocard>
     <Todoinput/>
     <Todolist/>


    </main>
  )
}

export default App
