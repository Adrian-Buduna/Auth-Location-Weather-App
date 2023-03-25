import axios from "axios";
import { API_KEY } from "../constants";

export async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return response.data.main;
  } catch (error) {
    console.error(error);
  }
}
