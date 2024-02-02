// const initState: any[] = [];
// const cartReducer = (state = initState, action: any) => {
//   let { type, payload } = action;
//   switch (type) {
//     case "ADD_CART":
//       let checkDuplicate = state.find((item) => item.id === payload);
//       if (checkDuplicate) {
//         state = state.map((item) => {
//           return item.id === payload.id ? { ...item, quantity: +1 } : {};
//         });
//       } else {
//         state = [...state, { ...payload, quantity: 1 }];
//       }
//       break;
//     case "REMOVE_CART":
//       state = state.filter((item) => item.id != payload);
//       break;
//     case "UP_QTY":
//       state = state.map((item) => {
//         return item.id === payload
//           ? { ...item, quantity: item.quantity++ }
//           : {};
//       });
//       break;
//   }
// };
import React from "react";

const cartReducer = () => {
  return;
};

export default cartReducer;
