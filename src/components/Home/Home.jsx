import React from 'react';
import './Home.css'
import PostsForm from '../PostsForm/PostsForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomeItem from '../HomeItem/HomeItem';

function Home(){
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
        <div className="elements">
            
           <h1>Home</h1>
           <div className='home'>
        {
            
            posts.map((post) => {
                return (
                    <HomeItem key={post.id} post={post}/>
                )
            })
        }
        </div>
      </div>
    )
};




export default Home;