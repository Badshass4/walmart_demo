import { ADD_QUANTITY } from "./constant";

export const addQuantity = (itemName, itemQty) =>({
    type: ADD_QUANTITY,
    itemName,
    itemQty
});