import React from "react";
// functions
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "../../../../constants/conversions";
const WeatherInfoElement = ({ weatherData }) => {
 
  return (
    <div className="flex flex-row w-full gap-4 justify-center">
      <div className="flex flex-col justify-end items-end w-full px-2">
        <h1 className="underline font-bold w-full px-6">Celsius</h1>
        {weatherData ? (
          <>
            <h2>Feels like: {kelvinToCelsius(weatherData.feels_like)}</h2>
            <h2>Humidity: {weatherData.humidity}</h2>
            <h2>Temperature: {kelvinToCelsius(weatherData.temp)}</h2>
            <h2>Max Temp: {kelvinToCelsius(weatherData.temp_max)}</h2>
            <h2>Min Temp: {kelvinToCelsius(weatherData.temp_min)}</h2>
          </>
        ) : (
          <h2>Loading data...</h2>
        )}
      </div>
      <div className="flex flex-col bg-white border-l-2 h-100"></div>
      <div className="flex flex-col justify-end items-end w-full px-2 ">
        <h1 className="underline font-bold w-full px-6">Fahrenheit</h1>
        {weatherData ? (
          <>
            <h2>Feels like: {kelvinToFahrenheit(weatherData.feels_like)}</h2>
            <h2>Humidity: {weatherData.humidity}</h2>
            <h2>Temperature: {kelvinToFahrenheit(weatherData.temp)}</h2>
            <h2>Max Temp: {kelvinToFahrenheit(weatherData.temp_max)}</h2>
            <h2>Min Temp: {kelvinToFahrenheit(weatherData.temp_min)}</h2>
          </>
        ) : (
          <h2>Loading data...</h2>
        )}
      </div>
    </div>
  );
};

export default WeatherInfoElement;
