// Author: Maloth Naresh
// Utility class for multiple utility functions

// Toggle active folder
// Takes current folder, leftnav menu
// Toggles current folder flag to open / close
const toggleMenuUtil = (menu, item) => {
  if (item.level === 0) {
    if ("isOpen" in menu[item.id]) {
      menu[item.id].isOpen = !menu[item.id].isOpen;
    }
  } else {
    let subMenu = menu;
    const { parents } = item;
    for (let i = 0; i < parents.length; i++) {
      subMenu = subMenu && subMenu[parents[i]].subItems[item.id];
      if (subMenu && "isOpen" in subMenu) {
        subMenu.isOpen = !subMenu.isOpen;
      }
    }
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

export { toggleMenuUtil, buildLabelsUtil, findParentUtil };
