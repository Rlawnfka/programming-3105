import TodoListApp from "./TodoListApp"
import CounterApp from "./CounterApp"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function LinkButtonPageApp(){
    return(
        <>
        <h1>App목록</h1>
        <ul>
            <li>
                <Link to="/counterapp"> CounterApp</Link>
            </li>
            <li>
                <Link to="/todolistapp"> TodoListApp</Link>
            </li>
        </ul>
        </>
    )
}
export default function RouterApp() {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LinkButtonPageApp/> } />
                <Route path="/counterapp" element={ <CounterApp/> } />
                <Route path="/" todolistapp={ <TodoListApp/> } />
            </Routes>
        </BrowserRouter>
    )
}