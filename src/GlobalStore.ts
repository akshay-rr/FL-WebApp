import React, { createContext } from "react";
import { LOAD_TASKS, SET_APP_DATA, SET_TASKS } from "./actions/Actions";

export interface AppState {
    appData: {
        tasks: any[],
        results: any,
        workers: any[]
    };
    loading: boolean;
}

export interface AppAction {
    type: string;
    payload?: any;
}

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

        case SET_TASKS:
            return {
                ...state,
                appData: {
                    ...state.appData,
                    tasks: action.payload
                },
                loading: false
            };
        
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