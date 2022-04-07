function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learning react',
            isCompleted: false,
            due:'09:51'
        },
        {
            text: 'meeting friend for lunch',
            isCompleted: false,
            due:'19:51'
        },
        {
            text:'building todo app',
            isCompleted: false,
            due:'07;43'
        }
    ]);

    const addTodo = (text, due) => {
        const newTodos = [...todos, {text: text, isCompleted:false, due: due}];
        setTodos(newTodos);
    }
    
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);

    }
    return(<>
        <div className="app">
            <div className="todo-list">
                {todos.map((todo,i) => 
                    <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
            </div>
            <div className="todo-list">
            <TodoForm addTodo={addTodo}/>
            </div>
            
        </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
