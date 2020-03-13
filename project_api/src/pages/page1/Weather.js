import React, { Component } from "react";
import { connect } from "react-redux";
import getData from "../../store/page1/api";

class Weather extends Component {
  render() {
    return (
      <div>
        <h3>This is weather page</h3>
        <button onClick={() => this.props.getData("hanoi")}>Ha Noi</button>
        <button onClick={() => this.props.getData("Thanh pho Ho Chi Minh")}>
          Ho Chi Minh
        </button>
        <div className="weather">
          <div className="weather__card">
            <div className="card__head">
              <h3 className="title">
                {this.props.completed && this.props.data.name}
              </h3>
              <div className="icon">
                <img
                  className="icon-link"
                  src="https://cdn4.iconfinder.com/data/icons/weather-29/256/sun-512.png"
                  alt="Weather Icon"
                />
              </div>
              <h2 className="temper">Temper</h2>
              <p className="temper-description">Temper description</p>
            </div>
            <div className="info">
              <div className="info__row">
                <h3 className="info__row--title">Wind:</h3>
                <h3 className="info__row--subtitle"> SW 3km/h2</h3>
              </div>
              <div className="info__row">
                <h3 className="info__row--title">Humdity:</h3>
                <h3 className="info__row--subtitle"> 99%</h3>
              </div>
              <div className="info__row">
                <h3 className="info__row--title">Condition:</h3>
                <h3 className="info__row--subtitle"> - 13 C</h3>
              </div>
              <div className="info__row">
                <h3 className="info__row--title">Rain change:</h3>
                <h3 className="info__row--subtitle"> 0 %</h3>
              </div>
            </div>
          </div>
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
