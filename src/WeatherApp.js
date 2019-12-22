import React from "react";
import { connect } from "react-redux";
import weatherActions from "./actions/weatherActions";
import Header from "./components/Header";
import WeatherGrid from "./components/WeatherGrid";

class WeatherApp extends React.Component {
  componentDidMount() {
    const { getWeatherInfo } = this.props;
    getWeatherInfo();
  }

  render() {
    const {
      weatherReducer: { pending, data }
    } = this.props;

    if (pending) return <Header text="Loading.." />;
    return (
      <>
        <Header text="Weather App" />
        <WeatherGrid weatherData={data} />
      </>
    );
  }
}

const mapStateToProps = ({ weatherReducer }) => ({
  weatherReducer
});

export default connect(mapStateToProps, {
  getWeatherInfo: weatherActions.getWeatherInfo
})(WeatherApp);
