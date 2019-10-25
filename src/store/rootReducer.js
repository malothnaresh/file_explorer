import { combineReducers } from "redux";

import leftnav from "./reducers/LeftNav.reducer";
import folder from "./reducers/Folder.reducer";
import file from "./reducers/File.reducer";

const rootReducer = combineReducers({
  leftnav,
  folder,
  file
});

export default rootReducer;
