import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';


const initialUserInfo = {
    username: "",
    password: ""
}


const Login = () => {

    const [ userInfo, setUserInfo ] = useState(initialUserInfo);

    const login = () => {
        axiosWithAuth()
          .post(`http://localhost:5000/api/login`, userInfo)
          .then(res => {
            // console.log('Here is the data: ', res.data.payload);
            localStorage.setItem('token', res.data.payload)
          })
          .catch(err => {
            console.log('Houston, we have a problem: ', err);
          })
        }



    const handleChange = (e) => {
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login()
    }


    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name= 'username'
                    placeholder='Username'
                    onChange={handleChange}
                    value={userInfo.username}
                />

                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <button >Login</button>
       </form>
        </div>
    )
}

export default Login;