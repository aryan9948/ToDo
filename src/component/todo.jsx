import styles from './AppName.module.css';
import { useState } from "react";
function ToDo({onNewItem}){
    const [todoName,setTodoName] =useState();
    const [dueDate,setDueDate] = useState();

    const handleNameChange = (event) =>{
      setTodoName(event.target.value);
    };

    const handleDateChange = (event) =>{
      setDueDate(event.target.value);
    };
    const Onclickhandel = () => {
      onNewItem(todoName,dueDate)
      setDueDate("");
      setTodoName("");
    };
    return(
    <div class={styles.ContainerCenter}>
        <div class="row">
          <div class="col-6" >
            <input type="text" name="" id={styles.text}
            
            placeholder="       To Do Here" 
            value={todoName}
            onChange={handleNameChange}/>
          </div>
          <div class="col-4" >
            <input type="date"
            id={styles.day}
            value={dueDate}
            onChange={handleDateChange}></input>
          </div>
          <div class="col-2" id={styles.add}>
            <button class="btn btn btn-primary" 
            onClick={Onclickhandel}>Add</button>
          </div>
        </div>
      </div>
    );
};

export default ToDo;