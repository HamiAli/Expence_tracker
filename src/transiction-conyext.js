import React, { createContext, useReducer } from "react";
import TraansactionRed from "./transication-Reducer";

const initialTransiction = [
  { amount: 50, desc: "Book" },
];


export const TransactionContext = createContext(initialTransiction);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TraansactionRed, initialTransiction);

  function addTsaction(transObj) {
    dispatch({
      type: "Add",
      payload: {
      amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  function deleteTsaction(transObj) {
    dispatch({
      type: "DELELTE",
      payload: transObj
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transiction: state,
        addTsaction,
        deleteTsaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
