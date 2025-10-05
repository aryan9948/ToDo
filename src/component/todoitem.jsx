import styles from './AppName.module.css'
function ToDoitem({textname,date,onDeleteClick}) {
  return (
    <div class={styles.Container}>
      <div class="row">
        <div class="col-6" id={styles.work}>
            {textname}
        </div>
        <div class="col-4" id={styles.date}>{date}</div>
        <div class="col-2"id={styles.remove}>
          <button class="btn btn btn-danger" onClick ={() => onDeleteClick(textname)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default ToDoitem;
