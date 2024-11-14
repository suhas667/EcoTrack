import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';  // Importing the CSS file

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "808cf74948200d0565e0932fbd1c039f";  //  OpenWeatherMap API key
  const latitude = "12.9716";  // Replace with  latitude (Bangalore)
  const longitude = "77.5946";  // Replace with  longitude (Bangalore)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        setData(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  if (error) return <div className="error">{error}</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="header">
          <h1 className="title">EcoTrack Environmental Dashboard</h1>
          <p className="location-name">Location: Bangalore</p>
        </div>
        <div className="intro-message">
          <p>Welcome to EcoTrack, where we provide you with real-time environmental data to help you track air quality and make informed decisions for a better tomorrow.</p>
        </div>

        <div className="air-quality-info">
          <p><strong>Air Quality Index (AQI):</strong> {data.list[0].main.aqi}</p>
          <div className="pollutant-levels">
            <p><strong>CO Level:</strong> {data.list[0].components.co} µg/m³</p>
            <p><strong>NO2 Level:</strong> {data.list[0].components.no2} µg/m³</p>
            <p><strong>O3 Level:</strong> {data.list[0].components.o3} µg/m³</p>
            <p><strong>SO2 Level:</strong> {data.list[0].components.so2} µg/m³</p>
            <p><strong>PM2.5 Level:</strong> {data.list[0].components.pm2_5} µg/m³</p>
            <p><strong>PM10 Level:</strong> {data.list[0].components.pm10} µg/m³</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
