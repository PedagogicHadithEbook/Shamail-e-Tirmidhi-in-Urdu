import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Translation.css";

export default function Navbar() {
  const location = useLocation();

  // Function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* eslint-disable-next-line */}
          <a className="navbar-brand" style={{ color: "white",marginRight: "38px" }}><h3><center>Shamail e Tirmidhi in Urdu</center> </h3></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h6><Link to="/" style={{ color: isLinkActive("/") ? "#dcb460" : "white", marginRight: "16px" }}>Home</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/About" style={{ color: isLinkActive("/About") ? "#dcb460" : "white", marginRight: "16px" }}>About</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/WordToWordTranslationChapters" style={{ color: isLinkActive("/WordToWordTranslationChapters") ? "#dcb460" : "white", marginRight: "16px" }}>Word-By-Word Grammar</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/UrduTranslationChapters" style={{ color: isLinkActive("/UrduTranslationChapters") ? "#dcb460" : "white", marginRight: "16px" }}>Urdu Translation</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/EnglishTranslationChapters" style={{ color: isLinkActive("/EnglishTranslationChapters") ? "#dcb460" : "white", marginRight: "16px" }}>English Translation</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/SearchBar" style={{ color: isLinkActive("/SearchBar") ? "#dcb460" : "white", marginRight: "16px" }}>Search Hadith</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/Help" style={{ color: isLinkActive("/Help") ? "#dcb460" : "white", marginRight: "16px" }}>Help & Support</Link></h6>
              </li>
              <li className="nav-item">
                <h6><Link to="/Feedback" style={{ color: isLinkActive("/Feedback") ? "#dcb460" : "white", marginRight: "16px" }}>Feedback</Link></h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
