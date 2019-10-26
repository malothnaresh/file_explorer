import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleMenuAction } from "../../store/actions/Leftnav.action";

import LeftNav from "./../../components/Leftnav/LeftNav";
import DisplayContainer from "./../DisplayContainer/DisplayContainer";

import "./MainContainer.scss";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    const { leftnav } = props;
    this.state = {
      leftnav: leftnav,
      currentFolder: ""
    };
  }

  toggleMenu = item => {
    this.props.toggleMenu(item);
    this.setState({
      currentFolder: { ...item }
    });
  };

  render() {
    return (
      <div className="main-container">
        <LeftNav leftnav={this.state.leftnav} toggleMenu={this.toggleMenu} />
        <DisplayContainer
          leftnav={this.state.leftnav}
          folder={this.state.currentFolder}
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
