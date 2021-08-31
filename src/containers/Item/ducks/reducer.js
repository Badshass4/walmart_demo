import { ADD_QUANTITY } from "./constant";

const initialState = {
  items: {
    'apple': 0,
    'banana': 0,
    'guava': 0,
    'orange':0,
    'litchi':0,
    'mango':0,
    'jackfruit':0,
    'dsd':0
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUANTITY:
      let updatedItems = { ...state.items };
      let prevQty = updatedItems[action.itemName];
      updatedItems[action.itemName] = parseInt(prevQty) + parseInt(action.itemQty);
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};

export default reducer;
