import React, { Component } from "react";

import Menu from "./../../components/Menu/Menu";
import BreadCrumb from "./../../components/BreadCrumb/BreadCrumb";

import "./DisplayContainer.scss";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
  }

  onClick = item => {
    console.log("On menu click: ", item);
  };

  handleClick = () => {};

  handleContextMenu = event => {
    event.preventDefault();
  };

  navigateUpHandler = folder => {
    console.log(folder);
  };

  onSearchHandler = event => {
    console.log(event.target.value);
  };

  render() {
    const { folder, leftnav } = this.props;
    return (
      <div
        className="display-container"
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
      >
        <BreadCrumb
          folder={folder}
          leftnav={leftnav}
          onClickHandler={this.navigateUpHandler}
        />
        <input
          className="files-search"
          type="text"
          placeholder="Search for anything"
          onChange={this.onSearchHandler}
        />
      </div>
    );
  }
}

export default DisplayContainer;
