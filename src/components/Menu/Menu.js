import React from "react";

import "./Menu.scss";

const Menu = props => {
  const { menu, isOpen, onClick } = props;

  const renderMenuItem = (item, index) => {
    return (
      <li key={index} onClick={() => onClick(item)}>
        {item}
      </li>
    );
  };
  return (
    <div className="menu-container">
      {isOpen && (
        <ul className="menu-list">
          {menu.map((item, index) => renderMenuItem(item, index))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
