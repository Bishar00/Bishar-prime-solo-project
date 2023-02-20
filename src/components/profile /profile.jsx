import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import HomeItem from "../HomeItem/HomeItem";
import { useHistory } from "react-router-dom";
import './Profile.css';
import ProfileForm from "../Profileform/ProfileForm";

function Profile() {
  const posts = useSelector((store) => store.postsReducer);
  const user = useSelector((store) => store.user)
 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({
          type: 'FETCH_POSTS',
          payload: user.id
       });
    }, []);

    const handleDeletePost = (id) => {
      dispatch({
          type: 'SAGA/DELETE_POST',
          payload: id
      });
      dispatch({
        type: "FETCH_POSTS"
      })
  }

  return (
    <>
      <div className="profileContainer">
        <div className="userProfile">
          {/* <ProfileForm/> */}
          <img src="https://picsum.photos/200/300" alt="" />
          <p className="userName">User name</p>
        </div>
        <div className="userContent">
        <div className="homeContainer">
            <div className="elements">
                <div className='home'>
                <div className="logo">
              <h1>B | Y</h1>
              <div className="companyVision">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas nobis vitae explicabo recusandae distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas nobis vitae explicabo recusandae distinctio.
                

              </div>
              <div className="divider"></div>
                

                    {posts.map((post) => {
                        return (
                            <div key={post.id} className="postContainer">
                                <div className="postTitle">{post.title}</div>
                                <HomeItem post={post} />
                                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
            
              <div className="activities">

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
