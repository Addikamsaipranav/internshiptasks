import logo from './logo.svg';
import './App.css';
import {useState ,useEffect} from "react";
import axios from 'axios';
import './cssfolder/Style.css'

function App() {
  const [data,setDate] =useState([])

  const [title,setTitle] =useState('')
useEffect(()=>{
 
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((result) =>{
    console.log("getting data ::::",result.data)
    setDate(result.data);
  });

},[]); // [] only fires one time when the component loads

const postData = (e) =>{
  e.preventDefault();
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title
  }).then(res => console.log('posting data ',res)).catch(err => console.log(err))
}

const postDelete = (id,e) =>{
  e.preventDefault();
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => console.log('Deleted !!!!! ',res)).catch(err => console.log(err))
}


const arr = data.map((data,index)=>{
  return (
    <tr>
      
      <td style={{border : '1px solid black'}}>{data.id}</td>
      <td style={{border : '1px solid black'}}>{data.title}</td>
      <td style={{border : '1px solid black'}}>{data.completed}</td>
      <td style={{border : '1px solid black'}}><button onClick={(e) => postDelete(data.id,e)}>Delete</button></td>
    </tr>
  );
})
  return (
    
    <div>
       <h1 className='data'>TASK-1</h1>
       <h3 className='data'>Lets add new todo list through this form . We can check the added data in console</h3>

       <form className='primary'>
             <label>Title</label>
             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
             <br/>
             <button className='btn' onClick={postData}>POST</button>
       </form>
       <hr/>

       <h3 className='data'> Here is the delete button where you can delete the todo . As the data we are getting from another server we cant delete it . For checking purpuse we can click on the delete button and we can check the status in console</h3><hr>
       </hr>

       <h3 className='data'>These id's and data are coming from the API</h3>
             <table className='table'>
                <tr>
                  
                   <th style={{border : '1px solid black'}}>Id</th>
                   <th style={{border : '1px solid black'}}>Title</th>
                   <th style={{border : '1px solid black'}}>completed</th>
                   <th style={{border : '1px solid black'}}>Delete</th>

                </tr>
                {arr}
             </table> 
    </div>
  );
}

const formStyle ={

  
}

export default App;
