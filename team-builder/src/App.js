import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Dana Scully',
      email: 'dscully@email.com', 
      status: 'employed'
    },
    {
      name: 'Fox Mulder',
      email: 'mulder@email.com', 
      status: 'employed'
    },
    {
      name: 'Melvin Frohike',
      email: 'frohike@email.com', 
      status: 'unknown'
    },
    {
      name: 'Richard Langly',
      email: 'langly@email.com', 
      status: 'unkonwn'
    }
  ]);

  return (
    <div className='App'>
      <Form 
        setMembers={setMembers}
      />
      <div className='list-container'>
        <h2>Member List</h2>
        {
          members.map((member, index) => {
            return <p key={index}>{member.name}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
