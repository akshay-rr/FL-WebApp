export interface TaskResult {
    fileId: number;
    result: number;
    fileSize: number;
}

export interface Task {
    taskId: number;
    M: number;
}

export interface Worker {
    id: number;
    status: string;
}

export interface Results { 
    [key: number]: TaskResult[];
}

export interface AppData {
    tasks: Task[];
    results: Results;
    workers: Worker[];
}

export interface AppState {
    appData: AppData;
    loading: boolean;
}

export interface AppAction {
    type: string;
    payload?: any;
}