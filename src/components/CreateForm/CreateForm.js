import React, { useState } from "react";
import uuidv1 from "uuid/v1";

import { FaTimes } from "react-icons/fa";

import "./CreateForm.scss";

const CreateForm = props => {
  const [formData, setFormData] = useState({
    level: 0,
    label: "",
    author: "",
    size: "",
    date: new Date(),
    id: uuidv1(),
    isFolder: true,
    isOpen: false,
    parents: [],
    subItems: {}
  });
  // const { currentFolder } = props;

  const onChangeHandler = element => {
    const formDataCopy = { ...formData };
    formDataCopy[element["name"]] = element.value;
    setFormData({ formData: formDataCopy });
  };

  const onTypeChange = value => {
    const formDataCopy = { ...formData };
    formDataCopy["isFolder"] = value;
    setFormData({ formData: formDataCopy });
  };

  const onSbmitHandler = () => {
    console.log(formData);
  };

  return (
    <div className="create-form__container">
      <div className="modal-header">
        <h3 className="title">Create New</h3>
        <span className="pointer">
          <FaTimes />
        </span>
      </div>
      <form
        className="new-content-form"
        name="newContentForm"
        onSubmit={onSbmitHandler}
      >
        <div className="type-container">
          <span onClick={() => onTypeChange(false)}>File</span>
          <span onClick={() => onTypeChange(true)}>Folder</span>
        </div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={formData.label}
          onChange={event => onChangeHandler(event.target)}
        />
        <input
          type="text"
          name="author"
          className="form-control"
          placeholder="Creator"
          value={formData.author}
          onChange={event => onChangeHandler(event.target)}
        />
        <input
          type="number"
          name="size"
          className="form-control"
          placeholder="Size"
          value={formData.size}
          onChange={event => onChangeHandler(event.target)}
        />
        <input
          type="date"
          name="date"
          className="form-control"
          placeholder="Date"
          value={formData.date}
          onChange={event => onChangeHandler(event.target)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateForm;
