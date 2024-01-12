import React from "react";

export default function WeatherWidget() {
  return (
    <div className="weather-widget-container">
      <h3 className="city-name">Mazatlan</h3>

      <div className="degrees-num-container">
        <span className="degrees-num">31</span>
        <span className="degrees-simbol">°C</span>
      </div>

      <span className="weather-status">Partly Cloudy</span>

      <div className="min-max">
        <span>Max: 31</span>
        <span>Max: 25</span>
      </div>
    </div>
  );
}
