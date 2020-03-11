import React from 'react';

import HeroService from '../../services/weather-service';

import WeatherPanel from '../weather-panel';
import Loader from '../loader';
import ToggleButton from '../toggle-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this._heroService = new HeroService();

    this.state = {
      coords: {},
      weatherData: null,
      tempType: 'C'
    }

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  componentDidUpdate(prevState) {
    const { coords, weatherData } = this.state;

    if(prevState.coords !== coords) {
      if(weatherData === null) {
        this.getWeather(coords);
      }
    }
  }

  getCurrentPosition = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }

        this.setState({
          coords
        });

      });
    } 
    else {
      console.log('Ваш браузер не поддерживает геолокацию');
    }
  }


  getWeather = async (coords) => {
    const data = await this._heroService.getWeather(coords);
    this.setState({
      weatherData: data,
    });
  }

  changeTempType = () => {
    const tempType = this.state.tempType === 'C' ? 'F' : 'C';

    this.setState({
      tempType 
    });
  }

  render() {

    const { weatherData, tempType } = this.state;

    const content = weatherData !== null ? <WeatherPanel weatherData={weatherData} tempType={tempType} /> : <Loader />;
 
    return (
      <div className="container">
        <h1 className="main-title">Weather App</h1>
        <div className="changeTempType-panel">
          <ToggleButton onChange={this.changeTempType}>
            {tempType}
          </ToggleButton>
        </div>
        {content}
      </div>
    );
  }

}


export default App;
