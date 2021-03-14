import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SideBar } from './Components/SideBar/SideBar';
import { TaskList } from './Components/Tasks/TaskList';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <TaskList/>
    </div>
  );
}

export default App;
