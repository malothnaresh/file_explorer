// Author: Maloth Naresh
// Utility class for multiple utility functions

// Toggle active folder
// Takes current folder, leftnav menu
// Toggles current folder flag to open / close
const toggleMenuUtil = (menu, item) => {
  if (item.level === 0) {
    menu[item.id].isOpen = !menu[item.id].isOpen;
  } else {
    let subMenu = menu;
    const { parents } = item;
    for (let i = 0; i < parents.length; i++) {
      subMenu[parents[i]].isOpen = true;
      subMenu = subMenu[parents[i]].subItems;
    }
    subMenu[item.id].isOpen = !subMenu[item.id].isOpen;
  }
  return menu;
};

// Builds labels for breadcrumb or similar scenario
// Takes leftnav menu and current item parents list
// Navigate through menu and builds labels array
const buildLabelsUtil = (parents, menu) => {
  const labels = [];
  if (parents.length) {
    let subMenu = menu;
    for (let i = 0; i < parents.length; i++) {
      if (subMenu) {
        labels.push(subMenu[parents[i]].label);
        subMenu = subMenu[parents[i]].subItems;
      }
    }
  }
  return labels;
};

// Find parent to navigate up
// Takes leftnav menu and current item parents list
// Navigate through menu and return parent
const findParentUtil = (parents, menu) => {
  let subMenu = menu;
  let parentMenu = "";
  for (let i = 0; i < parents.length; i++) {
    if (subMenu) {
      parentMenu = subMenu;
      subMenu = subMenu[parents[i]].subItems;
    }
  }
  return parentMenu[parents[parents.length - 1]];
};

// Find children to navigate down
// Takes leftnav menu and current item
// Navigate through menu and return children
const findChildUtil = (item, parents, menu) => {
  let subMenu = menu;
  for (let i = 0; i < parents.length; i++) {
    if (subMenu) {
      subMenu = subMenu[parents[i]].subItems;
    }
  }
  return subMenu[item.id];
};

// Travel menu upto current level
// Add a file / folder as subItem to current folder
const addContentUtil = (menu, data) => {
  const { currentFolder, formData } = data;
  const { id, level, parents } = currentFolder;
  formData["level"] = level + 1;
  formData["parents"] = parents.concat([id]);
  let subMenu = menu;
  for (let i = 0; i < parents.length; i++) {
    if (subMenu) {
      subMenu = subMenu[parents[i]].subItems;
    }
  }
  subMenu[id].subItems[formData["id"]] = formData;
  return menu;
};

// Take menu, currentFolder
// Travel menu upto current folder
// Remove current folder from menu
// Return menu
const deleteContentUtil = (menu, folder) => {
  const { id, parents } = folder;
  let subMenu = menu;
  for (let i = 0; i < parents.length; i++) {
    if (subMenu) {
      subMenu = subMenu[parents[i]].subItems;
      if (subMenu[id]) {
        delete subMenu[id];
        return menu;
      }
    }
  }
  return menu;
};

export {
  toggleMenuUtil,
  buildLabelsUtil,
  findParentUtil,
  findChildUtil,
  addContentUtil,
  deleteContentUtil
};
