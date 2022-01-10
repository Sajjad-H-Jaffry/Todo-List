import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, {useState} from 'react';


function App() {
  const onDelete = (todo)=> {
    setTodos(todos.filter(e=> {
      return e!==todo;
    }));
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
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
