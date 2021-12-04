function Todo({todo, index, remove}){
    function handle(){
        if (!window.confirm(`Are you remove "${todo.text}" from Todo list?`)) {
            return;
          }
        remove(index);
    }
    return <div className="todo">{todo.text}<button type="button" class="btn btn-outline-success" onClick={handle}>
    Done
    </button></div>;
}

