import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

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

    return(
        <div>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend}/>
            })}
        </div>
    )
}

export default Friends;