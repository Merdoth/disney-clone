import React from 'react';

import "./common.css";
import Viewers1 from "../../assets/images/viewers-disney.png";
import Viewers2 from "../../assets/images/viewers-pixar.png";
import Viewers3 from "../../assets/images/viewers-marvel.png";
import Viewers4 from "../../assets/images/viewers-starwars.png";
import Viewers5 from "../../assets/images/viewers-national.png";
import Video1 from "../../assets/videos/1564674844-disney.mp4";
import Video2 from "../../assets/videos/1564676714-pixar.mp4";
import Video3 from "../../assets/videos/1564676115-marvel.mp4";
import Video4 from "../../assets/videos/1608229455-star-wars.mp4";
import Video5 from "../../assets/videos/1564676296-national-geographic.mp4";

function Viewers() {
  return (
    <div className="viewers__container">
      <div className="viewers__wrap">
        <img src={Viewers1} alt="Disney" />
        <video autoPlay loop playsInline muted>
          <source src={Video1} type="video/mp4" />
        </video>
      </div>

      <div className="viewers__wrap">
        <img src={Viewers2} alt="Pixar" />
        <video autoPlay loop playsInline muted>
          <source src={Video2} type="video/mp4" />
        </video>
      </div>

      <div className="viewers__wrap">
        <img src={Viewers3} alt="Marvel" />
        <video autoPlay loop playsInline muted>
          <source src={Video3} type="video/mp4" />
        </video>
      </div>

      <div className="viewers__wrap">
        <img src={Viewers4} alt="Starwars" />
        <video autoPlay loop playsInline muted>
          <source src={Video4} type="video/mp4" />
        </video>
      </div>

      <div className="viewers__wrap">
        <img src={Viewers5} alt="National Geo" />
        <video autoPlay loop playsInline muted>
          <source src={Video5} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Viewers;
