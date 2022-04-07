function Todo({todo, index, remove}){
    function handle(){
        if (!window.confirm(`Are you remove "${todo.text}" by ${todo.due} from Todo list?`)) {
            return;
          }
        remove(index);
    }
    return <div className="todo">
        <div className="text">{todo.text}</div>  
        <div className="due">Due: {todo.due}</div>
        <button type="button" className="btn btn-outline-success" onClick={handle}>Done </button></div>;
}
