import ACTIONS from "./actionTypes";

export const addContentAction = data => ({
  type: ACTIONS.LEFTNAV.ADD_CONTENT,
  data
});

export const removeContentAction = data => ({
  type: ACTIONS.LEFTNAV.REMOVE_CONTENT,
  data
});

export const toggleMenuAction = data => ({
  type: ACTIONS.LEFTNAV.TOGGLE_MENU,
  data
});

export const renameFolderAction = data => ({
  type: ACTIONS.LEFTNAV.RENAME_CONTENT,
  data
});
