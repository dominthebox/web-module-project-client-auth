import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import { useHistory } from 'react-router-dom';

const Friends = () => {

    const [ friends, setFriends ] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res =>{
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log('Houston, we have a problem: ', err);
        })
    }

    useEffect(() => {
        getFriends()
    }, [])

    const history = useHistory()

    const getFriend = (id) => {
        history.push(`/friends/${id}`)
    }

    return(
        <div>
            {friends.map(friend => {
                // return <Friend key={friend.id} friend={friend}/>
                return <h2 onClick={() => getFriends(friend.id)} className='friend-name'>{friend.name}</h2>
            })}
        </div>
    )
}

export default Friends;