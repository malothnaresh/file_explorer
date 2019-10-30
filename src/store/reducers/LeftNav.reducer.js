import ACTIONS from "./../actions/actionTypes";

import { toggleMenuUtil, addContentUtil } from "./../../utils/Utlities";

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

const removeMenu = (menu, data) => {
  console.log("Remove menu");
  return menu;
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
        menu: { ...removeMenu(state.menu, data) }
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
