import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/B&GImage1.jpg'
const Footer = () => {
  return (
        // need to get the icons displaying in line instead of stacked 
    
    <footer className="text-center fixed-bottom" style={{ backgroundImage: `url(${backgroundImage})`}}>
      
        <ul className="social-links list-unstyled">
          {/* <li className="mx-2"> */}
            <a href="https://www.facebook.com/victor.swain.54">
              <i className="fab fa-facebook-f footer-links"></i>
            </a>
          {/* </li> */}
          {/* <li className="mx-2"> */}
            <a href="https://github.com/VicSwain">
              <i className="fab fa-github footer-links"></i>
            </a>
          {/* </li> */}
          {/* <li className="mx-2"> */}
            <a href="https://www.linkedin.com/in/victor-swain-894045180/">
              <i className="fab fa-linkedin-in footer-links"></i>
            </a>
          {/* </li> */}
        </ul>
        <p>&copy; 2024 Portfolio made with React.</p>
      
    </footer>
  );
};

export default Footer;
