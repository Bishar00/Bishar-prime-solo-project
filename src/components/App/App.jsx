import React, { useEffect } from "react";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Nav2 from "../Nav2/Nav2";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import EditPosts from "../EditPosts/EditPosts";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import "./App.css";
import Trending from "../Trending/Trending";
import Post from "../Post/Post";
import Donations from "../Donations/Donations";
import Subscriptions from "../Subscriptions/Subscriptions";
import Home from "../Home/Home";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <div className="content">
          
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/Home"
          >
            <Home />

          </ProtectedRoute>
          <div>
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/EditPosts/:id"
          >
            <EditPosts />
            </ProtectedRoute>
            </div>
          
        </div>

        <div className="sidebar">
          <VerticalNavBar />
    
        </div>

        <div className="footer">
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/Trending"
          >
            <Trending />
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/Post"
          >
            <Post />
            
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/Subscriptions"
          >
            <Subscriptions />
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/Donations"
          >
            <Donations />
          </ProtectedRoute>
        </div>
        <Nav2 />
      </div>
    </Router>
  );
}

export default App;
