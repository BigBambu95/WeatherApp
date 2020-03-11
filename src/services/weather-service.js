import axios from 'axios';

export default class WeatherService {
  constructor() {
    this._apiBase = 'https://api.openweathermap.org/data/2.5/weather?';
    this.API_KEY = 'e01bec116b32c38ff014cecf35dd8f8f';
  }

  getWeather = async (coords) => {
    const { lat, lon } = coords;
    try {
      const res = await axios.get(`${this._apiBase}lat=${lat}&lon=${lon}&APPID=${this.API_KEY}`);
      return await res.data;
    } catch (err) {
      console.error(err);
    }
  }
}