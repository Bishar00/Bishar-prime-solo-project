import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomeItem from '../HomeItem/HomeItem';
function Profile(){

    const dispatch = useDispatch();
   


    useEffect(() => {
        dispatch({ 
            type: 'FETCH_POSTS',
            payload: user.id
         });
      }, [dispatch]);




    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
};




export default Profile;



