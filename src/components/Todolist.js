import Todo from "../components/Todo";

function Todolist({todos , settodos , filterTodos}) {
  return (
    <div className="todo-con">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo todos={todos} settodos={settodos} todo={todo} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
