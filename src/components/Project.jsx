import React from "react";

function Project({ title, img, glink, dlink }) {
  return (
    
      <div className="col-md-4 gap-3 project-container">
        <h2>
          <i>{title}</i>
        </h2>
        <img
          className="img-thumbnail"
          src={img}
          alt={title}
          style={{ borderColor: "#4CDA29" }}
        />
        <a className="social-links  project-links" href={glink}>
          <i className="fab fa-github"></i>
        </a>
        <a className="social-links project-links " href={dlink}>
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    
  );
}

export default Project;
