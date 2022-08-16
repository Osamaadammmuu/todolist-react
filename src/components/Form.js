function Form({setStatus ,  setInputTxt, todos, settodos, inputTxt }) {
  const inputTxtHandler = (e) => {
    setInputTxt(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    settodos([
      ...todos,
      { text: inputTxt, completed: false, id: Math.random() * 1000 },
    ]);
    setInputTxt("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <form className="form">
      <div className="input">
        <input value={inputTxt} type="text" onChange={inputTxtHandler} />
        <button onClick={submitTodoHandler}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler}>
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
