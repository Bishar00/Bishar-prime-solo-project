import React from 'react';
import PostsForm from '../PostsForm/PostsForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Post(){

    const dispatch = useDispatch();
    const posts = useSelector((store) => store.postsReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS' });
      }, [dispatch]);
    
      return (
        <div>
        <PostsForm />
 
           {/* <h1>Posts</h1>
        {
            posts.map((post) => {
                return (
                    <div key= {post.id}>
                    {post.title}
                    {post.description}
                    </div>
                )
            })
        } */}
        
      </div>
      
    )
};




export default Post;