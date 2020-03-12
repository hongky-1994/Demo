import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/useraction";

class Home extends Component {
  componentDidMount = () => {
    const { loadData } = this.props;
    fetch("https://api.randomuser.me")
      .then(res => res.json())
      .then(result => {
        loadData({
          item: result.results,
          isLoaded: true
        });
      });
    console.log("component did mount");
  };

  render() {
    const { userInfo } = this.props;
    console.log("userInfo", userInfo);

    return (
      <div className="userInfo">
        {userInfo.isLoaded ? (
          <>
            <h2>
              {`${userInfo.item[0].name.title} 
              ${userInfo.item[0].name.first} 
                ${userInfo.item[0].name.last}`}
            </h2>
            <div className="userlogo">
              <img src={userInfo.item[0].picture.large} alt="USER IMAGE" />
            </div>
            <table>
              <tr></tr>
            </table>
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
});
const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
