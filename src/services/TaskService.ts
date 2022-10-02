const BASE_URL = "http://localhost:5000/";
const CREATE_TASK_URL = BASE_URL + "newtask";

export const createTaskCall = async (M: number) => {
    const formBody = `M=${M}`;

    const response = await fetch(CREATE_TASK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
    });
    const data = await response.json();
    return data;
}

export const getAppStateCall = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}