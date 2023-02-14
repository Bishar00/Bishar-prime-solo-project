import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Profile(){

    const dispatch = useDispatch();
    const posts = useSelector((store) => store.postsReducer);
    const user =useSelector((store) => store.user)

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



