import React, { Component } from "react";

import LeftNav from "./../../components/Leftnav/LeftNav";
import DisplayContainer from "./../DisplayContainer/DisplayContainer";

import "./MainContainer.scss";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <LeftNav />
        <DisplayContainer />
      </div>
    );
  }
}

export default MainContainer;
