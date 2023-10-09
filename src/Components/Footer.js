import React from 'react';
import { Link } from 'react-router-dom';
import './Translation.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Container">
        <div className="footer-container">
        <div className="column">
            <h4><b>Services</b></h4>
            <h6><Link to="/WordToWordTranslationChapters" >Word-By-Word Grammar</Link></h6>
            <h6><Link to="/UrduTranslationChapters" >Urdu Translation</Link></h6>
            <h6><Link to="/EnglishTranslationChapters" >English Translation</Link></h6>
            <h6><Link to="/SearchBar" >Search Hadith</Link></h6>
          </div> 
          <div className="column">
            <h4><b>About Us</b></h4>
            <h6><Link to="/About" >Our Mission</Link></h6>
            <h6><Link to="/Help" >Help & Support</Link></h6>
            <h6><Link to="/Feedback" >Feedback</Link></h6>
          </div>
          <div className="column">
            <h4><b>Contact US</b></h4>
            <h6>Email: aleenasarfraz5@gmail.com <br /> mahnoorsajid1111@gmail.com <br />syedahafsa851@gmail.com</h6>
          </div>
        </div>
      </div>
      <div className="company-name">
        &copy; {new Date().getFullYear()} Shamail e Tirmidhi in Urdu.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
