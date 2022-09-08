import React, {useState} from 'react'
import './Todo.css'

const Todo = () => {
    const [input, setInput] = useState('');
    const[todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    // const [todos, setTodos] = useState([
    //     'Take a walk.',
    //     'Make a presentation.',
    //     'Cook food.',
    //     'Feed the dog.'
    // ]);

    // //local storage setup 
    // const getLocalTodos = () =>{
    //     if(localStorage.getItem('todos')== null) {
    //         localStorage.setitem('todos', JSON.stringify([]));
    //     }else{
    //         let todoLocal = JSON.parse(localStorage.getItem('todos'));
    //         setTodos(todoLocal);
    //     }

    // }
// set items to localStorage
const saveLocalTodos = (todo) => {
    // check if there is already items in localStorage
    if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
    } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        todoLocal.push(todo);
        localStorage.setItem('todos', JSON.stringify(todoLocal));
    }
}

    console.log(input);
    console.log(todos);

     function handleSubmit() {
     setTodos([...todos, input])
     saveLocalTodos(input)
         setInput('') 
        }

// remove all the iteam in the array
         function removeall(){
            setTodos([])
            localStorage.SetItem('todo', JSON.stringify([]))
         }
// Delete individual the iteam in the array

         function deleteTodo(index){
            const newTodos=[...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
         }

// Update individual the iteam in the array
         function updateTodo(index){
            const newTodos=[...todos];
            //newTodos[index]= input
            newTodos.splice(index, 1, input);
            setTodos(newTodos);
            setInput('');
         }

    return (
        <div className='todo'>
            <div className="todo-logo">
                <h3>Todo App</h3>
            </div>

            <div className="todo-form">
                <form>
                    <input
                        type="text"
                        className="task"
                        name="input"
                        value={input}
                        onChange={ e => setInput(e.target.value)}
                    />
                    <input
                        type="submit"
                        className="button"
                        name="button"
                        value="Add Todo" 
                        disabled={!input}
                        onClick={handleSubmit}
                    />
                </form>
            </div>

            <div className="todo-lists">
                <h3>Task Lists</h3>
                <ul>
                    {todos.map((todo) => (
                        <li>{todo}
                        <button className="update"
                        onClick={ () =>updateTodo(todos.indexOf(todo))}
                        > 
                        update</button>
                        
                        <button className="delete"
                         onClick={ () =>deleteTodo(todos.indexOf(todo))}
                         > 
                         delete</button>

                        </li>
                        
                    ))
                    }
                </ul>
            </div>

            <div className="todo-removeall">
                <button className='button'
                 onClick={removeall}
                >
                    Remove All
                </button>
            </div>
        </div>
    )
}

export default Todo