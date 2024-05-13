import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div className="container d-flex justify-content-center align-items-center text-center">
      <h1 className="text-center">My book of builds</h1>
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Portfolio;
