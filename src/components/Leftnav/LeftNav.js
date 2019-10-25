import React from "react";
import { connect } from "react-redux";

import { toggleMenuAction } from "../../store/actions/Leftnav.action";

import "./LeftNav.scss";

const LeftNav = props => {
  const { leftnav, toggleMenu } = props;
  const onMenuClick = (event, item) => {
    const { classList } = event.target;
    classList.toggle("open");
    toggleMenu(item);
  };

  const renderMenuItem = item => {
    const { label, id } = item;
    return (
      <li key={id}>
        <label
          className="left-nav-label"
          onClick={$event => onMenuClick($event, item)}
        >
          {label}
        </label>
        {renderSubItems(item)}
      </li>
    );
  };

  const renderSubItems = item => {
    const { subItems, level } = item;
    if (subItems.length) {
      return renderLeftNav(subItems, level);
    }
  };

  const renderLeftNav = (list, level) => {
    return (
      <ul className={`hierarchy level-${level}`}>
        {list.map(item => {
          return renderMenuItem(item);
        })}
      </ul>
    );
  };

  return <div className="left-menu">{renderLeftNav(leftnav, 0)}</div>;
};

const mapDispatchToProps = dispatch => ({
  toggleMenu: data => dispatch(toggleMenuAction(data))
});

const mapStateToProps = state => ({
  leftnav: state.leftnav.menu
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNav);
