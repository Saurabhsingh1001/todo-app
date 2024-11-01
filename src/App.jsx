import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput.jsx'
import Todolist from './Components/TodoList.jsx'
import Sidebar from './Components/sidebar.jsx';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const[open, setOpen] = useState(true);

  let addList = (inputText) =>{
    if(inputText !== '')
      setListTodo([...listTodo, inputText]);
  }

  const deleteItem =(key) =>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo]);
  }

  return (
    <div className="main">
    <Sidebar open={open} setOpen={setOpen} />
    <div className={`main-container ${
          open ? 'ml-5' : 'mr-20'
        } flex-1 v-screen`}>
      
        <div className="center-container">
            <TodoInput addList = {addList}/>
            <h1 className="app-heading">Todo</h1>
            <hr/>
            {listTodo.map((listItem, i)=>{
              return (
              <Todolist key={i} index={i} item={listItem} deleteItem ={deleteItem} />
              )
            })}
        </div>
      
    </div>
    </div>
  )
}

export default App
