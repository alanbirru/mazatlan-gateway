import React from "react";
import WeatherWidget from "./WeatherWidget";
import "../css/hero.css";
import video from "../assets/Vfondo.mp4";

export default function Hero() {
  return (
    <div className="hero-component">
      <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-items-container">
        <div className="hero-text-container">
          <div className="title-container">
            <h3 className="hero-title-1">The best adventure</h3>
            <h1 className="hero-title-2">starts here.</h1>
          </div>

          <div className="hero-text-button-container">
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              laborum at neque sapiente maxime, inventore ab quis consectetur
            </p>
            <button className="button-services">Services</button>
          </div>
        </div>

        <WeatherWidget />
      </div>
    </div>
  );
}
