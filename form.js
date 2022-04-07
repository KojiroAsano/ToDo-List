function TodoForm({addTodo}){


    const [text, setText] = React.useState('');
    const [due, setDue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();

        console.log(e);
        if(!text) return;
        if(!due) return;
        addTodo(text, due);
  
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">I need to do</label>
            <input
                id="text"
                type="text"
                className="input"
                onChange={e => setText(e.target.value)}
                placeholder="Add Todo ..."
            />
            <label htmlFor="due">By</label>
            <input
                id="due"
                type="time"
                className="input"
                onChange={e => setDue(e.target.value)}
            />
            <button type="submit">
            Add to Todo list
            </button>
        </form>
    );
}
