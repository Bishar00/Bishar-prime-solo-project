import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import HomeItem from "../HomeItem/HomeItem";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import ProfileDetailForm from "../ProfileDetailForm/ProfileDetailForm";

function Profile() {
  const posts = useSelector((store) => store.postsReducer);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_POSTS",
      payload: user.id,
    });
  }, []);

  const handleDeletePost = (id) => {
    dispatch({
      type: "SAGA/DELETE_POST",
      payload: id,
    });
    dispatch({
      type: "FETCH_POSTS",
    });
  };

  return (
    <>
      <div className="profileContainer">
        <div className="userProfile">
          <ProfileDetailForm/> 
          <img
            src="https://ucarecdn.com/99314456-7f13-4672-b49b-9301c2654e5f/-/format/auto/-/preview/3000x3000/-/quality/lighter/impact_photo2.jpg"
            alt=""
          />
          <p className="userName">Epimonia</p>
        </div>
        <div className="userContent">
          <div className="homeContainer">
            <div className="elements">
              <div className="home">
                <div className="logo">
                  <h1>E | P</h1>
                  <div className="companyVision">
                    Epimonía is a refugee-founded fashion label with a central
                    mission of supporting refugees. We upcycle material from
                    life jackets that were worn by refugees on the Mediterranean
                    Sea and discarded upon arrival in Greece.
                  </div>
                  <div className="divider"></div>

                  {posts.map((post) => {
                    return (
                      <div key={post.id} className="postContainer">
                        <div className="postTitle">{post.title}</div>
                        <HomeItem post={post} />
                        <button
                          className="btnDelete"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="activities"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
