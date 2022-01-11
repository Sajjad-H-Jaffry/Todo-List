import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, {useState} from 'react';


function App() {
  const onDelete = (todo)=> {
    setTodos(todos.filter(e=> {
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=> {
    console.log("I am adding this Todo", title, desc)
    let sno = 0;
    if(todos.length==0){
      sno = 0;
    }
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Go to the market",
      desc : "You nee to go the market to get the job done." 
    },
    {
      sno : 2,
      title : "Go to the mall",
      desc : "You nee to go the market to get the job done2." 
    },
    {
      sno : 3,
      title : "Go to the gao",
      desc : "You nee to go the market to get the job done3." 
    },
  ]);

  return (
    <div>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
