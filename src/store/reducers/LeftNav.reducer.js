import ACTIONS from "./../actions/actionTypes";

import {
  toggleMenuUtil,
  addContentUtil,
  deleteContentUtil
} from "./../../utils/Utlities";

const initialState = {
  menu: {
    root: {
      level: 0,
      label: "Root",
      id: "root",
      isFolder: true,
      isOpen: true,
      parents: [],
      subItems: {}
    }
  }
};

const LeftNav = (state = initialState, action = null) => {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.LEFTNAV.ADD_CONTENT: {
      return {
        ...state,
        menu: { ...addContentUtil(state.menu, data) }
      };
    }
    case ACTIONS.LEFTNAV.REMOVE_CONTENT: {
      return {
        ...state,
        menu: { ...deleteContentUtil(state.menu, data) }
      };
    }
    case ACTIONS.LEFTNAV.TOGGLE_MENU: {
      return {
        ...state,
        menu: { ...toggleMenuUtil(state.menu, data) }
      };
    }
    default: {
      return state;
    }
  }
};

export default LeftNav;
