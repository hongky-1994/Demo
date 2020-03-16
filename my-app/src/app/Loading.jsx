import React, { Component } from "react";
import { connect } from "react-redux";

class Loading extends Component {
  render() {
    return (
      <>{this.props.isloading && <div className="loading">Loading</div>}</>
    );
  }
}

const mapStateToProps = state => ({
  isloading: state.isloading
});

export default connect(mapStateToProps)(Loading);
