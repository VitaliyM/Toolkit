import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }

  const addTodo = () => {
    if (text.trim().length) {        //Убрать все пробелы, проверить есть ли длина
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('');                  //Сбрасываем поле на пустое значение
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId)) //Метод filter возвращает все элементы соответсвующие условию
  }

  return (
    <div className="App">
      <label>
        <input className='input-place' value={text} onChange={ (e) => setText(e.target.value) } />
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)} />
              <span>{todo.text}</span>
              <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
            </li>)
        }

      </ul>
    </div>
  );
}

export default App;
