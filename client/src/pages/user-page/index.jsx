import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// API
import { onGetUsers } from "../../api/users";
// Weather api
import { getWeather } from "../../api/weather";
// layout
import Layout from "../../layout";
// Elements
import WeatherInfoElement from "./components/weather-info/WeatherInfoElement";

const UserPage = () => {
  // get Param
  const { id } = useParams();

  // Get fetch all users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await onGetUsers();

      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  // Get specific User data sorting using id
  const [user, setUser] = useState({});

  useEffect(() => {
    const idInt = parseInt(id); // I prase te param to make it an integer to be "===" with the id
    if (users.length > 0) {
      setUser(users.find((user) => user.id === idInt));
    }
  }, [id, users]);

  // Get weather data by location using weather API
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (user && user.location) {
        const data = await getWeather(user.location);
        setWeatherData(data);
      }
    };
    fetchWeatherData();
  }, [user]);

  return (
    <Layout>
      <div className="flex flex-row w-full item-center justify-center">
        {user ? (
          <div className="flex flex-col w-96 my-8 gap-4 bg-gray-800 text-white py-2 rounded-md">
            <div className="flex item-center justify-center px-2">
              <h1>User Details</h1>
            </div>
            <div className="flex item-center justify-start px-2">
              Name: {user.user_name}
            </div>
            <div className="flex item-center justify-start px-2">
              Email {user.email}
            </div>
            <div className="flex item-center justify-start px-2">
              Location: {user.location}
            </div>

            <WeatherInfoElement weatherData={weatherData} />
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </Layout>
  );
};

export default UserPage;
