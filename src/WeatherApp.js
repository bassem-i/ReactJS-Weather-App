import React from "react";
import { connect } from "react-redux";
import weatherActions from "./actions/weatherActions";
import LoadingScreen from "./components/LoadingScreen";

class WeatherApp extends React.Component {
  componentDidMount() {
    const { getWeatherInfo } = this.props;
    getWeatherInfo();
  }

  render() {
    const {
      weatherReducer: { pending, res }
    } = this.props;

    if (pending) return <LoadingScreen />;

    return <>WeatherApp</>;
  }
}

const mapStateToProps = ({ weatherReducer }) => ({
  weatherReducer
});

export default connect(mapStateToProps, {
  getWeatherInfo: weatherActions.getWeatherInfo
})(WeatherApp);
