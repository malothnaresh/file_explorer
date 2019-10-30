import React from "react";

import "./Menu.scss";

const Menu = props => {
  // TODO: Positioning menu container
  const { menu, onClick } = props;

  const renderMenuItem = (item, index) => {
    return (
      <li key={index} onClick={() => onClick(item)}>
        {item}
      </li>
    );
  };
  return (
    <div className="menu-container">
      <ul className="menu-list">
        {menu.map((item, index) => renderMenuItem(item, index))}
      </ul>
    </div>
  );
};

export default Menu;
