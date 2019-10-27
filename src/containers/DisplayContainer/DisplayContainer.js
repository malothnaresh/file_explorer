// Author: Maloth Naresh
// Display active folder contents and breadcrumb

import React, { Component } from "react";
import BreadCrumb from "./../../components/BreadCrumb/BreadCrumb";
import { fileIcon, folderIcon } from "./../../assets";

import "./DisplayContainer.scss";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
  }

  onClick = item => {
    console.log("On menu click: ", item);
  };

  handleClick = () => {};

  // Prevent right click to open browser default menu
  // Activate custom menu
  handleContextMenu = event => {
    event.preventDefault();
  };

  // Search a folder / file global / local
  // Replace entire display container contents with results containers
  onSearchHandler = event => {
    console.log(event.target.value);
  };

  renderContents = folder => {
    const { subItems } = folder;
    if (subItems) {
      const keys = Object.keys(subItems);
      return keys.map(key => (
        <li key={subItems[key].id}>
          <div className="icon-container">
            <img
              src={subItems[key].isFolder ? folderIcon : fileIcon}
              height="80px"
              width="80px"
              alt="folder"
            />
          </div>
          <label>{subItems[key].label}</label>
        </li>
      ));
    }
  };

  render() {
    const { folder, leftnav, navigateUpHandler } = this.props;
    return (
      <div
        className="display-container"
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
      >
        <div className="header-container">
          <BreadCrumb
            folder={folder}
            leftnav={leftnav}
            onClickHandler={navigateUpHandler}
          />
          <input
            className="files-search"
            type="text"
            placeholder="Search for anything"
            onChange={this.onSearchHandler}
          />
        </div>
        <ul className="folder-container">{this.renderContents(folder)}</ul>
      </div>
    );
  }
}

export default DisplayContainer;
