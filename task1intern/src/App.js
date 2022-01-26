import logo from './logo.svg';
import './App.css';
import {useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
const [todos,setTodos] =useState(null);
useEffect(()=>{
 
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((result) =>{
       setTodos(result.data);
  });

},[]); // [] only fires one time when the component loads
  return (
    
    <div>

    
        {todos ? <TodoList todos={todos}></TodoList> :<Loading></Loading> }

    </div>
  );
}

export default App;
