import { AppData } from "../types/Types";

export const SET_APP_DATA = "SET_APP_DATA";
export const LOAD_TASKS = "LOAD_TASKS";

export const loadTasks = () => ({
    type: LOAD_TASKS
});

export const setAppData = (appData: AppData) => ({
    type: SET_APP_DATA,
    payload: appData
})