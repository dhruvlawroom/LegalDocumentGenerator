import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="">
      <header className="page-header">
        <div className="nav-container">
          <div className="logo-container">
            <span className="lawroom-gradient">Lawroom AI</span>
              </div>
              {/* Uncomment below if you want nav buttons in the future */}
                {/* <nav className="nav-links">
              <a href="#">About</a>
              <a href="#">Contact</a>
              </nav> */}
                </div>
                {/* Mobile menu button */}
                {/* <div className="md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-600 hover:text-lawai-teal transition-colors">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div> */}

        {/* Desktop navigation */}
        <div className="nav-container-wrapper">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/chat" className="nav-link">
            Legal AI Chat
          </Link>
          <Link to="/smart-drafting" className="nav-link">
            Smart Drafting
          </Link>
          <Link to="/upcoming-features" className="nav-link">
            Upcoming Features
          </Link>
        </div>
        <div className="header-socials">
          <a
            href="https://www.instagram.com/lawroomai/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://x.com/lawroomai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {/* X (Twitter) Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>

          <a
            href="https://in.linkedin.com/company/lawroomai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a href="/chat">
            <button className="cta-button">Try Now</button>
          </a>
        </div>
      </header>
      <main className="main-content">
        <div className="intro-card">
          <h2>Smarter Legal Drafting, Powered by AI</h2>
          <h5 className="text-lg font-semibold mb-1"> Now Drafting For: State of Punjab & Haryana </h5>
          {/* <p className="font-medium">State of punjab & Haryana </p> */}
          <p className="mt-2 italic text-sm text-blue-700">
            Stay tuned — support for more courts is coming soon!
          </p>
        </div>
        <div className="button-container">
          <button
            onClick={handleAnticipatoryBailClick}
            className="application-btn main-btn">
            Anticipatory Bail Application
          </button>
          <button className="application-btn">Civil Writ Application</button>
          <button className="application-btn">Bail Application</button>
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
