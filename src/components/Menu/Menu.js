import React from "react";

import "./Menu.scss";

const Menu = props => {
  const { menu, isOpen, onClick } = props;
  const ulRef = React.createRef();

  const renderMenuItem = (item, index) => {
    return (
      <li key={index} onClick={event => onClick(event, item)}>
        {item}
      </li>
    );
  };
  return (
    <div className="menu-container">
      {isOpen && (
        <ul className="menu-list" ref={ulRef}>
          {menu.map((item, index) => renderMenuItem(item, index))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
