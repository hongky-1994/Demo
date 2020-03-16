import React, { Component } from "react";
import { connect } from "react-redux";
import getData from "../../store/page1/api";
import cityName from "./city.list.js";

class Weather extends Component {
  state = {
    city: cityName
  };
  // componentDidMount = () => this.props.getData("hanoi");
  backgroundColor = icon => {
    switch (icon) {
      case "01d":
      case "02d":
      case "03d":
      case "04d":
      case "09d":
      case "10d":
      case "11d":
      case "13d":
      case "50d":
        return "#85C1E9";

      default:
        return "black";
    }
  };
  render() {
    return (
      <div>
        <h3 className="page__title">This is weather page</h3>
        <select
          className="page__input"
          onChange={e => this.props.getData(e.target.value)}
        >
          {this.state.city.map(cityName => (
            <option key={cityName.id} value={cityName.name}>
              {cityName.name}
            </option>
          ))}
        </select>

        <div className="weather">
          {this.props.completed && this.props.data.message === undefined ? (
            <div
              className="weather__card"
              style={{
                backgroundColor: this.backgroundColor(
                  this.props.data.weather[0].icon
                )
              }}
            >
              <div className="card__head">
                <h3 className="title">
                  {this.props.completed && this.props.data.name}
                </h3>
                <div className="icon">
                  {console.log(this.props.data.weather)}
                  <img
                    className="icon-link"
                    src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                </div>
                <h2 className="temper">
                  {Math.floor(this.props.data.main.temp - 273.15)} &#8451;
                </h2>
                <p className="temper-description">
                  {this.props.data.weather[0].main} ---{" "}
                  {this.props.data.weather[0].description}
                </p>
              </div>
              <div className="info">
                <div className="info__row">
                  <h3 className="info__row--title">Wind:</h3>
                  <h3 className="info__row--subtitle">
                    {" "}
                    {this.props.data.wind.speed} km/h2
                  </h3>
                </div>
                <div className="info__row">
                  <h3 className="info__row--title">Humdity:</h3>
                  <h3 className="info__row--subtitle">
                    {" "}
                    {this.props.data.main.humidity}%
                  </h3>
                </div>
                <div className="info__row">
                  <h3 className="info__row--title">Pressure:</h3>
                  <h3 className="info__row--subtitle">
                    {" "}
                    {this.props.data.main.pressure}
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <h3>Please select a city below</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.page1.data,
  completed: state.page1.completed,
  error: state.page1.error
});

const mapDispatchToProps = dispatch => {
  return {
    getData: city => {
      dispatch(getData(city));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
