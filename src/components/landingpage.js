import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./LandingPage.css"; 

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when navigating away
    };
  }, []);

  const handleAnticipatoryBailClick = () => {
    navigate("/form"); // Navigate to the form page for Anticipatory Bail
  };

  return (
    <div className="landing-container">
      <header className="page-header">
        <div className="logo-container">
          <span class="logo-gradient">Lawroom AI</span>
        </div>
      </header>
      <main className="main-content">
        <div className="intro-card">
          <h2>Smarter Legal Drafting, Powered by AI</h2>
          <p>
            Draft legal documents with ease and accuracy. Lawroom AI helps you
            generate well-structured legal drafts tailored to Indian law—fast,
            reliable, and customized to your needs.
          </p>
        </div>
        <div className="button-container">
          <button
            onClick={handleAnticipatoryBailClick}
            className="application-btn main-btn"
          >
            Anticipatory Bail Application
          </button>
          <button className="application-btn">Civil Writ Application</button>
          <button className="application-btn">Bail Application</button>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">🌐 Now Drafting For:</h4>
          <p className="font-medium">State of Haryana & Chandigarh</p>
          <p className="mt-2 italic text-sm text-blue-700">
            Stay tuned — support for more courts is coming soon!
          </p>
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
