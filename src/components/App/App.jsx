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
import Profile from "../Profile /Profile";
function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
        <Nav2/>

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Home />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
        {/* className="container" */}

{/* <Route className="content"> */}
  
  
  
  <ProtectedRoute
    // shows AboutPage at all times (logged in or not)
    exact
    path="/EditPosts/:id"
  >
    <EditPosts />
  </ProtectedRoute>
   
    {/* </Route> */}


{/* <Route className="sidebar"> */}
<ProtectedRoute
  
  // shows AboutPage at all times (logged in or not)
  exact
  path="/Profile"
>
  <Profile />
  </ProtectedRoute>

  
  {/* </Route>  */}


{/* <Route className="footer"> */}
 

{/* <ProtectedRoute
    // shows AboutPage at all times (logged in or not)
    exact
    path="/Home"
  >
    <Home />
  </ProtectedRoute> */}


<ProtectedRoute
  
  // shows AboutPage at all times (logged in or not)
  exact
  path="/trending"
>
  <Trending />
  </ProtectedRoute>

  <ProtectedRoute
    // shows AboutPage at all times (logged in or not)
    exact
    path="/post"
  >
    <Post />
    </ProtectedRoute>
 
  <ProtectedRoute
  // shows AboutPage at all times (logged in or not)
  exact
  path="/subscriptions"
>
  <Subscriptions />
  </ProtectedRoute>

  <ProtectedRoute
  // shows AboutPage at all times (logged in or not)
  exact
  path="/donations"
>
  <Donations />
  
</ProtectedRoute>
  
{/* </Route> */}


          
          <Route>
            <h1>404</h1>
          </Route>
          
        </Switch>
        <VerticalNavBar />

    </Router>
     
  );
}

export default App;
