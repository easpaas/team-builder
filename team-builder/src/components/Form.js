import React, { useState } from 'react';
import '../App.css';

function Form({members, setMembers}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([
      ...members,
      formData
    ]);
    setFormData({ 
      name: '',
      email: '',
      status: ''
    });
  
  };
  
  return(
    <div className='form-container'>
      <h2>ADD MEMBER</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type='text' name='name' value={formData.name} placeholder='full name' onChange={handleChange} />
        </label>
        <label>
          Email: 
          <input type='text' name='email' value={formData.email} placeholder='email' onChange={handleChange} />
        </label>
        <label>
          Status: 
          <input type='text' name='status' value={formData.status} placeholder='current status' onChange={handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Form;