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
const addContentUtil = (menu, item) => {
  const currentItem = Object.assign({}, item);
  const { id, level, parents } = currentItem;
  const newItem = {
    label: "New Item",
    id: Math.random(),
    level: level + 1,
    isFolder: false,
    isOpen: false,
    parents: parents.concat([id]),
    subItems: {}
  };
  let subMenu = menu;
  for (let i = 0; i < parents.length; i++) {
    if (subMenu) {
      subMenu = subMenu[parents[i]].subItems;
    }
  }
  console.log(subMenu[item.id]);
  subMenu[item.id].subItems[Math.random()] = newItem;
  return menu;
};

export {
  toggleMenuUtil,
  buildLabelsUtil,
  findParentUtil,
  findChildUtil,
  addContentUtil
};
