import React from 'react'

import CoreService from '~/services/core/CoreService/CoreService'
const AppContext = React.createContext()

let initialState = {
  hash: Math.floor(Date.now() / 1000)
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
    default:
      return { ...state, hash: Math.floor(Date.now() / 1000)}
  }
};

export const AppContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { stateApp: state, dispatchApp: dispatch }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}


export function useAppContext () {
  return React.useContext(AppContext)
}

export default AppContext


/* Usage:

import { useAppContext } from '~/context/App.context';

const { stateApp, dispatchApp } = useAppContext();

dispatchApp({ type: "setItemClick", payload: {})
dispatchApp({ type: "reset"})

*/