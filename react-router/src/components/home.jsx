import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/useraction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
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

              <div className="user-info">
                <div className="info__header">
                  <div className="info__row--item">
                    <Link to="/home/info">General Info</Link>
                  </div>
                  <div className="info__row--item">
                    <Link to="/home/adress">Adress</Link>
                  </div>
                  <div className="info__row--item">
                    <Link to="/home/account">Account</Link>
                  </div>
                </div>
                <div className="info__body">
                  <Switch>
                    <Route exact path="/home/info">
                      <p>This is General Infomation</p>
                    </Route>
                    <Route path="/home/adress">
                      <p>This is Adress</p>
                    </Route>
                    <Route path="/home/account">
                      <p>This is Account</p>
                    </Route>
                  </Switch>
                </div>
              </div>
            </>
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </Router>
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
