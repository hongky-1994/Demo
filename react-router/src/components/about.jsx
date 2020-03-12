import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
      <Router>
        <img
          src="https://www.itourvn.com/images/easyblog_articles/127/b2ap3_large_beautiful-places-in-Vietnam.jpg"
          alt="Avata"
        />
        <ul>
          <li>
            <Link to="/about/">Welcome</Link>
          </li>
          <li>
            <Link to="/about/poem1">Poem 1</Link>
          </li>
          <li>
            <Link to="/about/poem2">Poem 2</Link>
          </li>
        </ul>
        <hr style={{ width: "200px" }} />

        <Switch>
          <Route exact path="/about/">
            <h3>Chọn thơ</h3>
          </Route>
          <Route path="/about/poem1">
            <h3>NAM QUỐC SƠN HÀ</h3>
            <p>
              Nam quốc sơn hà Nam đế cư <br />
              Tiệt nhiên phận định tại thiên thư
              <br />
              Như hà nghịch lỗ lai xâm phạm <br />
              Nhữ đẳng hành khan thủ bại hư.
            </p>
          </Route>
          <Route path="/about/poem2">
            <h3>NGHE THẦY ĐỌC THƠ</h3>

            <p>
              Em nghe thầy đọc bao ngày
              <br />
              Tiếng thơ đỏ nắng xanh cây quê nhà
              <br />
              Mái chèo nghe vọng sông xa
              <br />
              Êm êm như tiếng của bà năm xưa
              <br />
              Nghe trăng thuở động tàu dừa
              <br />
              Rào rào nghe chuyển cơn mưa giữa trời
              <br />
              Thêm yêu tiếng hát mẹ cười
              <br />
              Yêu thơ em thấy đất trời đẹp ra…
            </p>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default About;
