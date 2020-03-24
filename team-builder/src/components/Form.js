import React, { useState } from 'react';

function Form({setMembers}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    setMembers(formData);
    event.preventDefault();
  };
  
  return(
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
        Role: 
        <input type='text' name='role' value={formData.role} placeholder='current role' onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default Form;