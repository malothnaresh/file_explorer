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
      subItems: {
        abcabc: {
          level: 1,
          label: "Abc",
          id: "abcabc",
          isOpen: false,
          isFolder: true,
          parents: ["root"],
          subItems: {
            "abc-1abc-1": {
              level: 1,
              label: "Abc-1",
              id: "abc-1abc-1",
              isOpen: false,
              isFolder: false,
              parents: ["root", "abcabc"],
              subItems: {}
            },
            "abc-2abc-2": {
              level: 2,
              label: "Abc-2",
              id: "abc-2abc-2",
              isOpen: false,
              isFolder: true,
              parents: ["root", "abcabc"],
              subItems: {
                "abc-1-1abc-1-1": {
                  level: 3,
                  label: "Abc-1-1",
                  id: "abc-1-1abc-1-1",
                  isOpen: false,
                  isFolder: false,
                  parents: ["root", "abcabc", "abc-2abc-2"],
                  subItems: {}
                },
                "abc-2-1abc-2-1": {
                  level: 2,
                  label: "Abc-2-1",
                  id: "abc-2-1abc-2-1",
                  isOpen: false,
                  isFolder: false,
                  parents: ["root", "abcabc", "abc-2abc-2"],
                  subItems: {}
                }
              }
            }
          }
        },
        defdef: {
          level: 1,
          label: "Def",
          id: "defdef",
          isOpen: false,
          isFolder: true,
          parents: ["root"],
          subItems: {
            "abc-1abc-1": {
              level: 2,
              label: "Abc-12",
              id: "abc-1abc-1",
              isOpen: false,
              isFolder: false,
              parents: ["root", "defdef"],
              subItems: {}
            },
            "abc-2abc-2": {
              level: 2,
              label: "Abc-22",
              id: "abc-2abc-2",
              isOpen: false,
              isFolder: true,
              parents: ["root", "defdef"],
              subItems: {
                "abc-1-1abc-1-1": {
                  level: 3,
                  label: "Abc-1-1",
                  id: "abc-1-1abc-1-1",
                  isOpen: false,
                  isFolder: false,
                  parents: ["root", "defdef", "abc-2abc-2"],
                  subItems: {}
                },
                "abc-2-1abc-2-1": {
                  level: 2,
                  label: "Abc-2-1",
                  id: "abc-2-1abc-2-1",
                  isOpen: false,
                  isFolder: false,
                  parents: ["root", "defdef", "abc-2abc-2"],
                  subItems: {}
                }
              }
            }
          }
        }
      }
    }
  }
};

const removeMenu = (menu, data) => {
  console.log("Remove menu");
  return menu;
};

const renameContent = (menu, data) => {
  console.log(data);
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
    case ACTIONS.LEFTNAV.RENAME_CONTENT: {
      return {
        ...state,
        menu: { ...renameContent(state.menu, data) }
      };
    }
    default: {
      return state;
    }
  }
};

export default LeftNav;
