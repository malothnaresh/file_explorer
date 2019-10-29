// Author: Maloth Naresh
// Main component [smart component].
// Placeholder for leftnav, display container

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  toggleMenuAction,
  addContentAction
} from "../../store/actions/Leftnav.action";
import LeftNav from "./../../components/Leftnav/LeftNav";
import DisplayContainer from "./../DisplayContainer/DisplayContainer";
import { findParentUtil, findChildUtil } from "./../../utils/Utlities";
import {
  genericContextMenu,
  folderContextMenu,
  fileContextMenu
} from "./../../utils/constants";
import CreateForm from "./../../components/CreateForm/CreateForm";

import "./MainContainer.scss";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    const { leftnav } = props;
    this.state = {
      leftnav: leftnav,
      currentFolder: leftnav["root"],
      selectedFolder: "",
      contextMenu: [],
      isConextMenuOpen: false,
      showCreateForm: false
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
    let contextMenu = genericContextMenu;
    let { isConextMenuOpen } = this.state;
    if (item) {
      contextMenu = folderContextMenu;
      if (!item.isFolder) {
        contextMenu = fileContextMenu;
      }
    }
    this.setState({
      contextMenu: contextMenu,
      selectedFolder: item,
      isConextMenuOpen: !isConextMenuOpen
    });
  };

  onFormSubmitHandler = formData => {
    const { currentFolder } = this.state;
    const data = { currentFolder, formData };
    this.props.addFolder(data);
    this.setState({ showCreateForm: false });
  };

  // Takes menu string
  // Decide menu functionality on folder based on selected option
  contextMenuSelectionHandler = menu => {
    switch (menu) {
      case "Open":
        const { selectedFolder } = this.state;
        this.navigateDownHandler(selectedFolder);
        break;
      case "Delete":
        console.log("Delete");
        break;
      case "Info":
        console.log("return information");
        break;
      case "Add Content":
        this.setState({ showCreateForm: true });
        break;
      case "closeMenu":
        this.setState({ isConextMenuOpen: false });
        break;
      default:
        console.log("default");
        break;
    }
  };

  render() {
    const {
      leftnav,
      currentFolder,
      contextMenu,
      isConextMenuOpen,
      showCreateForm
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
          contextMenuSelectionHandler={this.contextMenuSelectionHandler}
        />
        {showCreateForm && (
          <CreateForm
            currentFolder={currentFolder}
            onSubmitHandler={this.onFormSubmitHandler}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: data => dispatch(toggleMenuAction(data)),
  addFolder: data => dispatch(addContentAction(data))
});

const mapStateToProps = state => ({
  leftnav: state.leftnav.menu
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
