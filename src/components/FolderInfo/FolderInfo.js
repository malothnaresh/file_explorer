import React from "react";
import { fileIcon, folderIcon } from "./../../assets";
import { FaTimes } from "react-icons/fa";

import "./FolderInfo.scss";

const Menu = props => {
  const { data, onClose } = props;
  return (
    <div className="info-modal__container">
      <div className="modal-header">
        <h3 className="title">File Info</h3>
        <span className="pointer" onClick={onClose}>
          <FaTimes />
        </span>
      </div>
      <div className="modal-body">
        <div className="icon-container">
          <img
            src={data["isFolder"] ? folderIcon : fileIcon}
            height="80px"
            width="80px"
            alt="folder"
          />
        </div>
        <label>
          <span>Name:</span>
          <span>{data["label"] || "NA"}</span>
        </label>
        <label>
          <span>Size:</span>
          <span>{data["size"] ? data["size"] + "kb" : "NA"}</span>
        </label>
        <label>
          <span>Creator Name:</span>
          <span>{data["author"] || "NA"}</span>
        </label>
        <label>
          <span>Created Date:</span>
          <span>{data["date"] || "NA"}</span>
        </label>
      </div>
    </div>
  );
};

export default Menu;
