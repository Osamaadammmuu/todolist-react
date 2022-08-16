function Todo({text ,todo , todos , settodos}) {
  const deleteHandler = () => {
    settodos(todos.filter((el) => el.id !== todo.id))
  };
  const completeHandler = () => {
    settodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item , completed: !item.completed
        }
      }
      return item;
    }))
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : "" }`}> {text}</li>
      <div className="marks">
        <button onClick={completeHandler} className="complete-btn">
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
        <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
export default Todo;
