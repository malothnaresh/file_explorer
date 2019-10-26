import React from "react";
import { connect } from "react-redux";

import { FaSortDown, FaSortUp } from "react-icons/fa";

import { toggleMenuAction } from "../../store/actions/Leftnav.action";

import "./LeftNav.scss";

const LeftNav = props => {
  const { leftnav, toggleMenu } = props;
  const onMenuClick = item => {
    toggleMenu(item);
  };

  const renderMenuItem = item => {
    const { label, id } = item;
    return (
      <li key={id}>
        <label className="left-nav-label" onClick={() => onMenuClick(item)}>
          {label}
          {item.isOpen ? <FaSortUp /> : <FaSortDown />}
        </label>
        {item.isOpen ? renderSubItems(item) : null}
      </li>
    );
  };

  const renderSubItems = item => {
    const { subItems, level } = item;
    if (Object.keys(subItems).length) {
      return renderLeftNav(subItems, level);
    }
  };

  const renderLeftNav = (list, level) => {
    return (
      <ul className={`hierarchy level-${level}`}>
        {Object.keys(list).map(key => {
          return renderMenuItem(list[key]);
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
