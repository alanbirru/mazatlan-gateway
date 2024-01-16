import React from "react";
import carnaval from "../assets/hero-Images/Carnaval.webp";
import comida from "../assets/hero-Images/Comida2.webp";
import estadio from "../assets/hero-Images/Estadio.webp";

import lowresCarnaval from "../assets/placeholder/Carnaval.jpg";
import lowresComida from "../assets/placeholder/Comida2.jpg";
import lowresEstadio from "../assets/placeholder/Estadio.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PostWeather() {
  return (
    <div className="post-weather">
      <div className="post-card">
        <LazyLoadImage
          src={estadio}
          alt="estadio"
          effect="blur"
          className="card-image"
          height={200}
          width={150}
          placeholderSrc={lowresEstadio}
        />

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
        <LazyLoadImage
          src={comida}
          alt="comida"
          effect="blur"
          className="card-image"
          height={200}
          width={150}
          placeholderSrc={lowresComida}
        />

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
        <LazyLoadImage
          src={carnaval}
          alt="carnaval"
          effect="blur"
          className="card-image"
          height={200}
          width={150}
          placeholderSrc={lowresCarnaval}
        />

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
