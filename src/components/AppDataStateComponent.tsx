import { useContext } from "react";
import { Context } from "../GlobalStore";
import { Results, Task, TaskResult } from "../types/Types";
import TaskData from "./TaskData";


const AppDataStateComponent = () => {
    const { state } = useContext(Context);

    const completionRate = getCompletionRate(state.appData.tasks, state.appData.results)
    
    const currentAverage = getCurrentAverage(state.appData.results);

    return (
        <div>
            <div>
                <div>Current Average</div>
                <div>
                    <h4>{currentAverage}</h4>
                </div>
            </div>
            <br />
            <div className="progress">
                <div 
                    className="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    aria-valuenow={completionRate} 
                    aria-valuemin={0} 
                    aria-valuemax={100} 
                    style={{ width: completionRate + "%" }}>
                </div>
            </div>
            <br />
            {   
                (state.appData.tasks.length > 0) &&
                state.appData.tasks.map((taskData) => {
                    return (
                        <TaskData taskData={taskData} taskResult={state.appData.results[taskData.taskId]} />
                    )
                })
            }
            <br />
        </div>
    )
}


const getCompletionRate = (tasks: Task[], results: Results) => {
    let totalFiles = 0;
    let completedFiles = 0;

    tasks.forEach((element: Task) => {
        totalFiles += element.M;
    });

    Object.values(results).forEach((element: TaskResult[]) => {
        completedFiles += element.length;
    });

    if (totalFiles === 0) {
        return 0;
    }

    return completedFiles / totalFiles * 100;
}

const getCurrentAverage = (results: Results) => {
    let totalLength = 0;
    let totalSum = 0;

    Object.values(results).forEach((element: TaskResult[]) => {
        element.forEach((fileData: TaskResult) => {
            totalLength += fileData.fileSize;
            totalSum += fileData.fileSize * fileData.result
        })
    });

    if (totalLength === 0) {
        return "-"
    }
    return totalSum / totalLength;
}

export default AppDataStateComponent;