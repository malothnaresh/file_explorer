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

export { toggleMenuUtil };
