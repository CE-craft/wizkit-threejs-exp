export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "PAGE_SWITCH":
      console.log(action.page);
      return action.page;
    default:
      return state;
  }
};

export const hoverReducer = (state = {}, action) => {
  switch (action.type) {
    case "HOVERED_MENU":
      return action.hovered;
    case "RESET_HOVER":
      return {};
    default:
      return state;
  }
};
