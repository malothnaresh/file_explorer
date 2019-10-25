import ACTIONS from "./../actions/actionTypes";

import { findMenu } from "./../../utils/Utlities";

const initialState = {
  menu: [
    {
      level: 0,
      label: "Abc",
      id: "abcabc",
      parents: ["root"],
      subItems: [
        {
          level: 1,
          label: "Abc-1",
          id: "abc-1abc-1",
          parents: ["root", "abcabc"],
          subItems: []
        },
        {
          level: 1,
          label: "Abc-2",
          id: "abc-2abc-2",
          parents: ["root", "abcabc"],
          subItems: [
            {
              level: 2,
              label: "Abc-1-1",
              id: "abc-1-1abc-1-1",
              parents: ["root", "abcabc", "abc-2abc-2"],
              subItems: []
            },
            {
              level: 1,
              label: "Abc-2-1",
              id: "abc-2-1abc-2-1",
              parents: ["root", "abcabc", "abc-2abc-2"],
              subItems: []
            }
          ]
        }
      ]
    },
    {
      level: 0,
      label: "Def",
      id: "defdef",
      parents: ["root"],
      subItems: [
        {
          level: 1,
          label: "Abc-1",
          id: "abc-1abc-1",
          parents: ["root", "defdef"],
          subItems: []
        },
        {
          level: 1,
          label: "Abc-2",
          id: "abc-2abc-2",
          parents: ["root", "defdef"],
          subItems: [
            {
              level: 2,
              label: "Abc-1-1",
              id: "abc-1-1abc-1-1",
              parents: ["root", "defdef", "abc-2abc-2"],
              subItems: []
            },
            {
              level: 1,
              label: "Abc-2-1",
              id: "abc-2-1abc-2-1",
              parents: ["root", "defdef", "abc-2abc-2"],
              subItems: []
            }
          ]
        }
      ]
    }
  ]
};

const addMenu = (menu, data) => {
  console.log("Add menu");
};

const removeMenu = (menu, data) => {
  console.log("Remove menu");
};

const toggleMenu = (menu, data) => {
  console.log("Toggle menu ", data);
  findMenu(menu, data);
  return menu;
};

const LeftNav = (state = initialState, action = null) => {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.LEFTNAV.ADD_MENU: {
      return {
        ...state,
        menu: addMenu(this.state.menu, data)
      };
    }
    case ACTIONS.LEFTNAV.REMOVE_MENU: {
      return {
        ...state,
        menu: removeMenu(this.state.menu, data)
      };
    }
    case ACTIONS.LEFTNAV.TOGGLE_MENU: {
      return {
        ...state,
        menu: toggleMenu(state.menu, data)
      };
    }
    default: {
      return state;
    }
  }
};

export default LeftNav;
