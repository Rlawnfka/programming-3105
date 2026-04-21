import { useState } from 'react';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';

export default function TodoItem({todo, toggleTodo, deleteTodo, editTodo}){
    const [editText, setEditText] = useState(todo.text); // 수정한 text
    const [isEditing, setIsEditing] = useState(false); // 수정중인지 아닌지
    const handleEditText = () => {      // edit 시작
        if(!isEditing){
            setEditText(todo.text);
            setIsEditing(true);
        }else{                          // edit 끝
            const trimmedText = editText.trim();
            if(trimmedText !== "" && trimmedText !== todo.text)
                editTodo(todo.id, editText);       // TODO 이상한 입력값 정리
            setIsEditing(false);
        }
    }
    return(
        // todo.isCompleted가 true면 " todo__item--complete" false면 ""
        <li className={`todo__item${todo.isCompleted?" todo__item--complete" : ""}`}>
            {/* 수정중이 아니면, checkbox */}
            {!isEditing &&
                <Checkbox 
                    id={todo.id} 
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                    >{todo.text}</Checkbox>
            }
            {/* 수정중이면 input */}
            {isEditing && 
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    //enter 치면 저장ㅉ
                    onKeyDown={(event) => {if(event.key === 'Enter') handleEditText()}}
                    autoFocus
                />
            }
            <Button className='todo__button todo__button--edit'
                onClick={handleEditText}>{!isEditing ? "✏️":"💾"}</Button>
            <Button 
                className='todo__button todo__button--delete'
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}