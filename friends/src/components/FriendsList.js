import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import { useHistory } from 'react-router-dom';

const FriendsList = (props) => {

    const [ friends, setFriends ] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res =>{
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
            <h3>Current Friends:</h3>
            {friends.map(friend => {
                // return <Friend key={friend.id} friend={friend}/>
                return <h2 onClick={() => getFriends(friend.id)} className='friend-name'>{friend.name}</h2>
            })}
        </div>
    )
}

export default FriendsList;