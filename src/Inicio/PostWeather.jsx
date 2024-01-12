import React from "react";
import carnaval from "../assets/hero-Images/Carnaval.jpeg";
import comida from "../assets/hero-Images/Comida2.png";
import Estadio from "../assets/hero-Images/Estadio.jpeg";

export default function PostWeather() {
  return (
    <div className="post-weather">
      <div className="post-card">
        <img className="card-image" src={Estadio} alt="" />

        <div className="text-cards">
          <h3>Watch the match</h3>
          <p>
            On February 15th, you can't miss the match between Venados and
            Naranjeros at the Stadium “El Encanto”.
          </p>

          <button className="btn-cards">Services</button>
        </div>
      </div>

      <div className="post-card">
        <img className="card-image" src={comida} alt="" />

        <div className="text-cards">
          <h3>Become a foodie</h3>
          <p>
            Have you tried the exquisite Ceviche of Diego's in the Golden Zone?
            What are you waiting for?
          </p>

          <button className="btn-cards">Services</button>
        </div>
      </div>

      <div className="post-card">
        <img className="card-image" src={carnaval} alt="" />

        <div className="text-cards">
          <h3>Live the party</h3>
          <p>
            Are you ready for the Carnaval Internacional de Mazatlán? Here are
            all the details…
          </p>

          <button className="btn-cards">Services</button>
        </div>
      </div>
    </div>
  );
}
