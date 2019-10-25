import ACTIONS from "./actionTypes";

export const renameFile = data => ({
  type: ACTIONS.FILE.RENAME_FILE,
  data
});

export const toggleFile = data => ({
  type: ACTIONS.FILE.TOGGLE_FILE,
  data
});
