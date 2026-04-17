import { useState } from 'react';

import './todolist.css'
import TOdoItem from './components/TodoItem.jsx'
import './components/Button'
import Button from './components/Button';
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import TodoHeader from './components/TodoHeader.jsx';
import Checkbox from './components/Checkbox.jsx';
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(text){
        this.id = Date.now(); // 할일 고유 id 
        this.text = text; // 할일 내용
        this.isCompleted = false; //완료 여부
    }
}

function TodoListApp(){
    const [todos, setTodos] = useState([]); // 할일 목록 : 기본값 빈 리스트
    const addTodo = (text) => setTodos((todos) => [
        ...todos, 
        // 이전 todos 복사하자
        // newTodo 만들자
        // 이전 todos에 추가하자
        new Todo(Text)
    ]);
    // const addTodo = (text) => setTodos((todos) => [...todos,newTodo(new)])

    return(
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo}/>
            <TodoList />
        </div>
    )
}

export default TodoListApp;