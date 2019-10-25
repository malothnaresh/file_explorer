import React from "react";

import "./Menu.scss";

const Menu = props => {
  const { list, isOpen, onClick } = props;
  const ulRef = React.createRef();

  const renderMenuItem = (item, index) => {
    const { label, value } = item;
    return (
      <li key={index} onClick={() => onClick(value)}>
        {label}
      </li>
    );
  };
  return (
    <div className="menu-container">
      {isOpen && (
        <ul className="menu-list" ref={ulRef}>
          {list.map((item, index) => renderMenuItem(item, index))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
