import ToDoitem from "./todoitem";
const ToDoItems=({todoitems,onDeleteClick})=>{
    return(
    <div classname="items-container">
    {todoitems.map((item)=>(
    <ToDoitem textname={item.todo} date={item.deudate} onDeleteClick={onDeleteClick}/>))}
    </div>
    );
};
export default ToDoItems;