import ACTIONS from "./../actions/actionTypes";

const initialState = {
  isOpen: false,
  name: "",
  contents: []
};

const Folder = (state = initialState, action = null) => {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.FOLDER.TOGGLE_FOLDER: {
      return {
        ...state,
        isOpen: !this.state.isOpen
      };
    }
    case ACTIONS.FOLDER.RENAME_FOLDER: {
      return {
        ...state,
        name: data
      };
    }
    case ACTIONS.FOLDER.UPDATE_FOLDER_CONTENTS: {
      return {
        ...state,
        contents: [...data]
      };
    }
    default: {
      return state;
    }
  }
};

export default Folder;
