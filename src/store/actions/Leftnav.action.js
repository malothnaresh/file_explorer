import ACTIONS from "./actionTypes";

export const addMenuAction = data => ({
  type: ACTIONS.LEFTNAV.ADD_MENU,
  data
});

export const removeMenuAction = data => ({
  type: ACTIONS.LEFTNAV.REMOVE_MENU,
  data
});

export const toggleMenuAction = data => ({
  type: ACTIONS.LEFTNAV.TOGGLE_MENU,
  data
});
