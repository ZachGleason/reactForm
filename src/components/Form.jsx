import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");


return (
    <div>
        <form id='form'>
        <div >
            <label htmlFor="firstName">First Name</label>
            <input 
            className='inputs'
            type="text" 
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value) }
        />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
            className='inputs'
            type="text" 
            name="lastName" 
            onChange={ (e) => setLastName(e.target.value) }
        />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            className='inputs'
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
        />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
            className='inputs'
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
        />
        </div>
    </form>

    <div>
        <h3>Your Form Data</h3>
        <p>
            <label>First Name: </label>{ firstName }
        </p>
        <p>
            <label>Last Name: </label>{ lastName }
        </p>
        <p>
            <label>Email: </label>{ email }
        </p>
        <p>
            <label>Password: </label>{ password }
        </p>
    </div>
    </div>
    )
}

export default Form;
