import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container fixed-bottom">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/example"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/example"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/example"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
