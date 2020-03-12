import React, { Component, useState, useEffect } from "react";

//  Stateless Function Component

const Button = (props) => {
  const { className, title } = props;
  
  function abc (){
    
  }

  return <button className={className}>{title}</button>;
};

export default Button;
