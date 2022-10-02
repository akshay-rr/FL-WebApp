import React, { createContext } from "react";
import { LOAD_TASKS, SET_APP_DATA } from "./actions/Actions";
import { AppState, AppAction } from "./types/Types";

export const initialState = {
    appData: {
        tasks: [],
        results: {},
        workers: []
    },
    loading: false
};

export const reducer = (state: AppState, action: AppAction) => {
    switch(action.type) {

        case SET_APP_DATA:
            return {
                ...state,
                appData: action.payload,
                loading: false
            }
        
        case LOAD_TASKS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export const Context = createContext<{
    state: AppState;
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
});