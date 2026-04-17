import { useState } from 'react';
import Button from './Button.jsx';
export default function TodoAdder({addTodo}){
    const [inputTodo, setInputTodo] = useState(''); // 사용자가 입력한 text
    const handleSubmit = (event) => {
        event.preventDefault(); // submit 기본 동작 막기

        if(!inputTodo) return;
        
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    return(
        <form className='todo__form' onSubmit={handleSubmit}>
            {/* 사용자가 입력할 때 setInputTodo() 호출 돼서, inputTodo값에 설정 */}
            <input 
                type="text" 
                placeholder="할 일을 입력하세요." 
                className='todo__input'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type='submit' className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}