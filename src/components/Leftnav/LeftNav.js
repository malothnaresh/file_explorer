import React from "react";

import { FaSortDown, FaSortUp } from "react-icons/fa";

import "./LeftNav.scss";

const LeftNav = props => {
  const { leftnav, toggleMenu } = props;
  const onMenuClick = item => {
    if (item.isFolder) {
      toggleMenu(item);
    }
  };

  const renderMenuItem = item => {
    const { label, id } = item;
    return (
      <li key={id}>
        <label
          className={`left-nav-label ${item.isFolder ? "pointer" : ""}`}
          onClick={() => onMenuClick(item)}
        >
          {label}
          {item.isFolder && (
            <span>{item.isOpen ? <FaSortUp /> : <FaSortDown />}</span>
          )}
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

export default LeftNav;
