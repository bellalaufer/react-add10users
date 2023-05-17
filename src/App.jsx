
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {

  const [users, setUsers] = useState([]);
  

  const addUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(res => setUsers(prev => [...prev, ...res]))
  }
    
  

  return (
    <div className="App">
      <Navbar addUsers={addUsers}/>
      <Main users={users}/>  
      

      
    </div>
  );
}

export default App;
