import React from "react";
import "./Home.css";
import PostsForm from "../PostsForm/PostsForm";
import Nav2 from "../Nav2/Nav2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import HomeItem from "../HomeItem/HomeItem";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postsReducer);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({
      type: "FETCH_POSTS",
      payload: user.id,
    });
    console.log("this post", posts);
  }, [dispatch]);

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
    <div className="homeContainer">
      <div className="elements">
        {/* <h3>Home</h3> */}
        <div className="home">
          {posts.map((post) => {
            return (
              <div key={post.id} className="postContainer">
                <div className="postTitle">{post.title}</div>
                <HomeItem post={post} />
                <button
                  type="button"
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
  );
}

export default Home;
