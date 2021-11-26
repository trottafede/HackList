import listOfLists from "./seeder";
import { v4 as uuidv4 } from "uuid";

export default function taskReducer(state = listOfLists, action) {
  let indexOfList;
  let list;
  let newItem;
  let newList;
  let newStore;
  const date = new Date().toLocaleString();

  switch (action.type) {
    case "ADD_LIST":
      newList = {
        id: uuidv4(),
        name: action.payload,
        items: [],
        createdAt: date,
      };
      let newState = [...state];
      newState.push(newList);
      return newState;

    case "ADD_ITEM":
      indexOfList = action.indexOfList;
      list = state[indexOfList];
      newItem = {
        id: uuidv4(),
        itemName: action.payload,
        bought: false,
      };
      list.items.push(newItem);
      return (state = [...state]);

    case "DONE_ITEM":
      // Salado!!!!
      newStore = state.map((list) => {
        if (list.id === action.listId) {
          return {
            ...list,
            items: list.items.map((item) => {
              if (item.id === action.payload) {
                return { ...item, bought: !item.bought };
              }
              return item;
            }),
          };
        }
        return list;
      });
      return newStore;

    case "REMOVE_ITEM":
      newStore = state.map((list) => {
        if (list.id === action.listId) {
          return {
            ...list,
            items: list.items.filter((item) => item.id !== action.payload),
          };
        }
        return list;
      });
      return newStore;

    default:
      return state;
  }
}
