import { useState } from "react";
//todoList css import
import './TodoList.css';
function TodoList() {
    const [todos, setTodos] = useState([]); //빈 배열로 설정
    const [input, setInput] = useState('');
  
    //addTodo라는 기능이 들어간 버튼을 클릭하면 
    const addTodo = () => {
        setTodos([[...todos], { text: input, completed: false }]); //기존에 작성된 할 일 복제 후 추가
       //todos 기본으로 아무런 리스트가없는 빈 배열이 존재
       //setTodos로 기본으로 아무런 리스트가없는 목록에 새로운 목록을 하나씩 추가함
        //[...todos]= 기존에 있던 리스트를 복사해서 
        //value값이 input으로 들어온 value값을 text라는 key에 저장 
        setInput('');
    };
  //할 일을 완료하면 완료처리를 해주는 버튼 
  //실수로 완료했더라도 되돌릴수있게했다
    const toggleTodo = (index) => {
      const newTodos =[...todos]; //새로운 할일 추가
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input className="todo-input"
            value={input} 
            onChange={ (e) => setInput(e.target.value)  } 
            placeholder="새로운 할 일을  추가하세요."
          />
          <button className="todo-button" onClick={addTodo} >할 일 추가하기</button>
        </div>
        <ul className="todo-ul" >
          {todos.map((todo, index) => (
            <li className="todo-li" 
              key={index} 
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  