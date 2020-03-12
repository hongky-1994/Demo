import React, { Component, useState, useEffect } from "react";
import Button from "./Button";

//  Stateless Function Component

const NavBar = ({ totalCounters }) => {
  const [visible, setVisible] = useState(false);
  console.log("visible", visible);

  useEffect(() => {
    setVisible(true);
  });

  console.log("visible", visible);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badege badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <Button className="btn btn-link" title="abc" color="red" />
    </nav>
  );
};

export default NavBar;
