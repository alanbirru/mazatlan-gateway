import React from "react";
import WeatherWidget from "./WeatherWidget";
import PostWeather from "./PostWeather";
import "../css/hero.css";
import video from "../assets/Vfondo.mp4";

export default function Hero() {
  return (
    <div className="hero-component">
      <video autoPlay loop muted className="hero-video" loading="lazy">
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
              Are you looking for chinese food in Mazatlan? Do you need a
              doctor? or Do you need to know which are the most exciting
              activities for the next weekend? You are in the right site.
            </p>
            <button className="button-services">Services</button>
          </div>

          <PostWeather />
        </div>

        <WeatherWidget />
      </div>
    </div>
  );
}
