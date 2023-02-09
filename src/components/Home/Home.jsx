import React from 'react';
import PostsForm from '../PostsForm/PostsForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function Home(){
    const dispatch = useDispatch();
    const posts = useSelector((store) => store.postsReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
      }, [dispatch]);

    return (
        <div>
            
           <h1>Home</h1>
        {
            posts.map((post) => {
                return (
                    <div key= {post.id}>
                    {post.title}
                    {post.description}
                    </div>
                )
            })
        }
      </div>
    )
};




export default Home;