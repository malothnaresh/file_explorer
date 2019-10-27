import React from "react";

import { buildLabelsUtil } from "./../../utils/Utlities";

import { FaArrowCircleUp } from "react-icons/fa";

import "./BreadCrumb.scss";

const BreadCrumb = props => {
  const buildBreadCrumb = () => {
    const { folder, leftnav, onClickHandler } = props;
    const { parents } = folder;
    let route = [];
    if (parents) {
      route = route.concat(buildLabelsUtil(parents, leftnav));
      route.push(folder.label);
    }
    return (
      <ul className="breadcrumb-list">
        {route.length ? (
          <span
            className="breadcrumb-up"
            onClick={() => onClickHandler(folder)}
          >
            <FaArrowCircleUp />
          </span>
        ) : null}

        {route.map((item, index) => (
          <li key={item}>
            {item}
            {index < route.length - 1 && <span> /</span>}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="breadcrumb-container">{buildBreadCrumb()}</div>;
};

export default BreadCrumb;
