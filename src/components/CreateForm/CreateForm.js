import React, { Component } from "react";
import uuidv1 from "uuid/v1";

import { FaTimes } from "react-icons/fa";

import "./CreateForm.scss";

class CreateForm extends Component {
  constructor(props) {
    super();
    this.state = {
      level: 0,
      label: "",
      author: "",
      size: "",
      date: "",
      id: uuidv1(),
      isFolder: true,
      isOpen: false,
      parents: [],
      subItems: {}
    };
  }

  isFormDataValid = () => {
    const { label, author, size, date } = this.state;
    return label && author && size && date;
  };

  onSbmitHandler = event => {
    event.stopPropagation();
    this.props.onSubmitHandler(this.state);
  };

  render() {
    const { label, author, size, date } = this.state;
    return (
      <div className="create-form__container">
        <div className="modal-header">
          <h3 className="title">Create New</h3>
          <span className="pointer" onClick={this.props.closeCreateForm}>
            <FaTimes />
          </span>
        </div>
        <div className="modal-body">
          <form className="new-content-form" name="newContentForm">
            <div className="type-container">
              <span
                className={`pointer ${this.state.isFolder ? "" : "selected"}`}
                onClick={() => this.setState({ isFolder: false })}
              >
                File
              </span>
              <span
                className={`pointer ${this.state.isFolder ? "selected" : ""}`}
                onClick={() => this.setState({ isFolder: true })}
              >
                Folder
              </span>
            </div>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={label}
              onChange={event => this.setState({ label: event.target.value })}
            />
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Creator"
              value={author}
              onChange={event => this.setState({ author: event.target.value })}
            />
            <input
              type="number"
              name="size"
              className="form-control"
              placeholder="Size"
              value={size}
              onChange={event => this.setState({ size: event.target.value })}
            />
            <input
              type="date"
              name="date"
              className="form-control"
              placeholder="Date"
              value={date}
              onChange={event => this.setState({ date: event.target.value })}
            />
            <button
              type="button"
              className={`pointer ${this.isFormDataValid() ? "" : "disabled"}`}
              disabled={!this.isFormDataValid()}
              onClick={this.onSbmitHandler}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateForm;
