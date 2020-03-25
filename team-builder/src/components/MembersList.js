import React from 'react';
import '../App.css';


function MembersList({members}) {
  return (
    <div className='container'>
      <h1>Members List</h1>
      <div className='list'>
        <ul>
          <li>{members[0].name}</li>
          {
            console.log(members)
          }
        </ul> 
      </div>
    </div>
  );
}

export default MembersList;