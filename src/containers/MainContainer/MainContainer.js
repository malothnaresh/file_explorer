// Author: Maloth Naresh
// Main component [smart component].
// Placeholder for leftnav, display container

import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMenuAction } from "../../store/actions/Leftnav.action";
import LeftNav from "./../../components/Leftnav/LeftNav";
import DisplayContainer from "./../DisplayContainer/DisplayContainer";
import "./MainContainer.scss";

import { findParentUtil } from "./../../utils/Utlities";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    const { leftnav } = props;
    this.state = {
      leftnav: leftnav,
      currentFolder: {}
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

  render() {
    return (
      <div className="main-container">
        <LeftNav leftnav={this.state.leftnav} toggleMenu={this.toggleMenu} />
        <DisplayContainer
          leftnav={this.state.leftnav}
          folder={this.state.currentFolder}
          navigateUpHandler={this.navigateUpHandler}
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
