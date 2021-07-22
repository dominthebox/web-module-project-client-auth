import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const initialValues = {
    username: "",
    password: ""
}


const Login = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    const history = useHistory();

    const loginSubmit = () => {
        axiosWithAuth()
          .post(`http://localhost:5000/api/login`, formValues)
          .then(res => {
            // console.log('Here is the data: ', res.data.payload);
            localStorage.setItem('token', res.data.payload)
            history.push('/friends');
          })
          .catch(err => {
            console.log('Houston, we have a problem: ', err);
          })
        }



    const handleChanges = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginSubmit()
    }


    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username" 
                    type="text"
                    name= 'username'
                    placeholder='Username'
                    onChange={handleChanges}
                    value={formValues.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password" 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={formValues.password}
                />
                <button>Login</button>
       </form>
        </div>
    )
}

export default Login;