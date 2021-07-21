import React from 'react';

const Friend = (props) => {
    // const { name, age, email } = props;

    return(
        <div className='Friend'>
            <h2>Name: {props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;