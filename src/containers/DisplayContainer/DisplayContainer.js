import React, { Component } from "react";

import Menu from "./../../components/Menu/Menu";
import BreadCrumb from "./../../components/BreadCrumb/BreadCrumb";

import "./DisplayContainer.scss";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      list: [
        {
          label: "Folder",
          value: "folder"
        },
        {
          label: "File",
          value: "file"
        }
      ]
    };
  }

  onClick = item => {
    console.log("On menu click: ", item);
  };

  handleClick = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({ isOpen: !isOpen });
    }
  };

  handleContextMenu = event => {
    event.preventDefault();
    const { isOpen } = this.state;
    if (!isOpen) {
      this.setState({ isOpen: !isOpen });
    }
  };

  render() {
    return (
      <div
        className="display-container"
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
      >
        <BreadCrumb />
        <Menu
          list={this.state.list}
          isOpen={this.state.isOpen}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default DisplayContainer;
