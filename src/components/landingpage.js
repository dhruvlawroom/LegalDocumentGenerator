import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAnticipatoryBailClick = () => {
    navigate('/form'); // Navigate to the form page for Anticipatory Bail
  };

  return (
    <div className="landing-container">
      <header className="page-header">
        <div className="logo-container">
          
          <h1>Welcome to Lawroom AI</h1>
        </div>
      </header>
      <main className="main-content">
        <p>Make drafting efficient</p>
        <div className="button-container">
          <button onClick={handleAnticipatoryBailClick} className="application-btn main-btn">
            Anticipatory Bail Application
          </button>
          <button className="application-btn">
            Civil Writ Application
          </button>
          <button className="application-btn">
            Bail Application
          </button>
        </div>
      </main>
      <footer className="footer">
        Made In India
        <br />
        An Initiative by Law Wave Innovation Pvt. Ltd.
      </footer>
    </div>
  );
};

export default LandingPage;
