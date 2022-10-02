export const SET_TASKS = "SET_TASKS";
export const SET_APP_DATA = "SET_APP_DATA";
export const LOAD_TASKS = "LOAD_TASKS";

export const loadTasks = () => ({
    type: LOAD_TASKS
});

export const setTasks = (tasks: any[]) => ({
    type: SET_TASKS,
    payload: tasks
});

export const setAppData = (appData: any) => ({
    type: SET_APP_DATA,
    payload: appData
})