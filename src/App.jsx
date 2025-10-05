import AppName from "./component/app-component.jsx";
import ToDo from "./component/todo.jsx";
import ToDoItems from "./component/Todoitems.jsx";
import "./App.css";
import { useState } from "react";
import Message from "./welcomemessage.jsx";
function App() {
  const [todoitems,setTodoitems] = useState([]);
  const handlenewitem = (itemName,itemDueDate) => {
    const newTodoItems = [
      ...todoitems,{
        todo:itemName,deudate:itemDueDate
      },
    ];
    setTodoitems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) =>item.todo!==todoItemName)
    setTodoitems(newTodoItems);
  }
  return (
    <center>
      <AppName />
      <ToDo onNewItem={handlenewitem} />
      {todoitems.length==0 && <Message/>}
      <ToDoItems todoitems={todoitems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}
export default App;
