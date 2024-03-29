import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=mazatlan&units=Metric&appid=13e948614b7d48039d0589aec8ba8cdf";
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };
    console.log(data);
    fetchData();
  }, [url]);

  return (
    <div className="weather-widget-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
            alt="icon"
            className="weather-icon"
          />
          <h3 className="city-name">{data.name}</h3>

          <div className="degrees-num-container">
            <span className="degrees-num">{Math.floor(data.main?.temp)}</span>
            <span className="degrees-simbol">°C</span>
          </div>

          <span className="weather-status">
            {data.weather && data.weather[0]?.description}
          </span>

          <div className="min-max">
            <span>Max: {Math.floor(data.main?.temp_max)}</span>
            <span>Min: {Math.floor(data.main?.temp_min)}</span>
          </div>

          {/* Add more data and UI elements as needed */}
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
