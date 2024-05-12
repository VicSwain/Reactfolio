import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        // need to get the icons displaying in line instead of stacked 

    <footer className="text-center">
      <div className="container">
        <ul className="social-links list-unstyled d-flex justify-content-center mb-4">
          <li className="mx-2">
            <a href="https://www.facebook.com/victor.swain.54">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="https://github.com/VicSwain">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="https://www.linkedin.com/in/victor-swain-894045180/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Portfolio made with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
