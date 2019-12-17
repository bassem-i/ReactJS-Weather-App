import React from "react";
import { connect } from "react-redux";
import weatherActions from "./actions/weatherActions";

class WeatherApp extends React.Component {
  componentDidMount() {
    const { getWeatherInfo } = this.props;
    getWeatherInfo();
  }

  render() {
    console.log(this.props);
    return <>WeatherApp</>;
  }
}

const mapStateToProps = ({ weatherReducer }) => ({
  weatherReducer
});

export default connect(mapStateToProps, {
  getWeatherInfo: weatherActions.getWeatherInfo
})(WeatherApp);
