import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MembersList from './components/MembersList';

function App() {
  const [members, setMembers] = useState([{name:'Dana Scully', email:'dscully@fbi.com', status:'reserved'}]);

  return (
    <div className='App'>
      <Form 
        setMembers={setMembers} 
      />
      <MembersList 
        members={members} 
      />
    </div>
  );
}

export default App;
