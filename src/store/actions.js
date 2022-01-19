export const menu = (page = {}) => ({
  type: "PAGE_SWITCH",
  page,
});

export const hoverMenu = (hovered = {}) => ({
  type: "HOVERED_MENU",
  hovered,
});

export const resetHoverStore = () => ({
  type: "RESET_HOVER",
});
