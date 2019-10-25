import ACTIONS from "./actionTypes";

export const renameFile = data => ({
  type: ACTIONS.FOLDER.RENAME_FILE,
  data
});

export const toggleFile = data => ({
  type: ACTIONS.FOLDER.TOGGLE_FILE,
  data
});

export const updateContent = data => ({
  type: ACTIONS.FOLDER.UPDATE_FOLDER_CONTENTS,
  data
});
