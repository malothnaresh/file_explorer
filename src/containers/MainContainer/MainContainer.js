// Author: Maloth Naresh
// Main component [smart component].
// Placeholder for leftnav, display container

import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMenuAction } from "../../store/actions/Leftnav.action";
import LeftNav from "./../../components/Leftnav/LeftNav";
import DisplayContainer from "./../DisplayContainer/DisplayContainer";
import "./MainContainer.scss";

import { findParentUtil, findChildUtil } from "./../../utils/Utlities";
import {
  genericContextMenu,
  folderContextMenu,
  fileContextMenu
} from "./../../utils/constants";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    const { leftnav } = props;
    this.state = {
      leftnav: leftnav,
      currentFolder: {},
      contextMenu: genericContextMenu,
      isConextMenuOpen: true
    };
  }

  toggleMenu = item => {
    this.props.toggleMenu(item);
    this.setState({
      currentFolder: { ...item }
    });
  };

  // From breadcrumb, navigating to parent
  // Replace current folder state with parent
  navigateUpHandler = folder => {
    const { parents } = folder;
    const { leftnav } = this.props;
    const parent = findParentUtil(parents, leftnav);
    this.setState({
      currentFolder: { ...parent }
    });
  };

  // Navigate down to children
  // Replace current folder state with child
  navigateDownHandler = folder => {
    const { parents } = folder;
    const { leftnav } = this.props;
    const children = findChildUtil(folder, parents, leftnav);
    this.setState({
      currentFolder: { ...children }
    });
  };

  // Takes clicked file / folder or open space
  // In Constants.js, have defined 3 set of menu contexts
  // Update context state based on item
  changeContextMenu = item => {
    let { contextMenu } = this.state;
    if (item) {
      contextMenu = folderContextMenu;
      if (!item.isFolder) {
        contextMenu = fileContextMenu;
      }
    }
    this.setState({ contextMenu: contextMenu });
  };

  render() {
    const {
      leftnav,
      currentFolder,
      contextMenu,
      isConextMenuOpen
    } = this.state;
    return (
      <div className="main-container">
        <LeftNav leftnav={leftnav} toggleMenu={this.toggleMenu} />
        <DisplayContainer
          leftnav={leftnav}
          folder={currentFolder}
          navigateUpHandler={this.navigateUpHandler}
          contextMenu={contextMenu}
          isConextMenuOpen={isConextMenuOpen}
          changeContextMenu={this.changeContextMenu}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: data => dispatch(toggleMenuAction(data))
});

const mapStateToProps = state => ({
  leftnav: state.leftnav.menu
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
