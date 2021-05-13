import React, { createContext, useContext, useReducer } from 'react'

//prepare data layer
export const StateContext = createContext()

//provide data layer to every component in app
export const StateProvider = ({ reducer, initialState, children }) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>)
}

//pull info from data layer
export const useStateValue = () => useContext(StateContext)