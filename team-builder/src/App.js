import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

const memberList = [
  {
    name: 'Dana Scully',
    email: 'dscully@email.com', 
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
    status: 'unknown'
  }
];

function App() {
  const [members, setMembers] = useState(memberList);
 console.log(members)
  return (
    <div className='App'>
      <Form 
        members={members}
        setMembers={setMembers}
      />
      <div className='list-container'>
        <h2>MEMBER LIST</h2>
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
