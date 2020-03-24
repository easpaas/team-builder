import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className='App'>
      <Form 
        setMembers={setMembers} 
      />
      <div className='Member-list'>
        <ul>
          {
            console.log(members)
            // members.map(member => {
            //   return <li>{member.name}</li>
            // })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
