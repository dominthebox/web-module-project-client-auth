import React from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Friend = (props) => {

    const history = useHistory();

    const getFriend = (id) => {
        history.push(`/friends/${id}`)
    }

    return(
        <div className='Friend' onClick={() => getFriend(props.friend.id)}>
            <h2>Name: {props.friend.name}</h2>
        </div>
    )
}

export default Friend;