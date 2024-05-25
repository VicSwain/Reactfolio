import React from "react";
import Project from "../components/Project";
import img1 from '../../public/images/EliteHunter1.png'
import img2 from '../../public/images/Gastronome1.png';
import img3 from "../../public/images/TechBlog6.png";
import img4 from "../../public/images/WorkDayPlanner.gif";
import img5 from '../../public/images/WeatherDashboard1.png'
import img6 from '../../public/images/Password-Generator.jpeg'
function Portfolio() {
  return (
   
    <div className="container text-center">
      <h1 className="text-center">My book of builds</h1>
      <Project 
        title="Elite Hunters"
        img={img1}
        glink="https://github.com/VicSwain/Elite-Hunters"
        dlink="https://vicswain.github.io/Elite-Hunters/"
      />
      <Project
        title="Gastronome"
        img={img2}
        glink="https://github.com/VicSwain/Gastronome"
        dlink="https://gastronome.onrender.com/"
      />
      <Project
        title="Tech Blog"
        img={img3}
        glink="https://github.com/VicSwain/Tech-Blog"
        dlink="https://dashboard.render.com/web/srv-coa9jsf79t8c73eenpp0"
      />
      <Project
        title="Work Day Planner"
        img={img4}
        glink="https://github.com/VicSwain/WorkDayPlanner"
        dlink="https://vicswain.github.io/WorkDayPlanner/"
      />
      <Project
        title="Weather Dashboard"
        img={img5}
        glink="https://github.com/VicSwain/Weather-Dashboard"
        dlink="https://vicswain.github.io/Weather-Dashboard/"
      />
      <Project
        title="Password Generator"
        img={img6}
        glink="https://github.com/VicSwain/Password-Generator"
        dlink="https://vicswain.github.io/Password-Generator/"
      />
    </div>
   
  );
}

export default Portfolio;
