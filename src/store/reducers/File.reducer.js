import ACTIONS from "./../actions/actionTypes";

const initialState = {
  isOpen: false,
  name: ""
};

const File = (state = initialState, action = null) => {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.FILE.TOGGLE_FILE: {
      return {
        ...state,
        isOpen: !this.state.isOpen
      };
    }
    case ACTIONS.FILE.RENAME_FILE: {
      return {
        ...state,
        name: data
      };
    }
    default: {
      return state;
    }
  }
};

export default File;
