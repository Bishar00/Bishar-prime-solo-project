import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
         
        </div>
        <div className="grid-col grid-col_4">
        
          <center>
            <h4>Become a member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
             Get Started
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
