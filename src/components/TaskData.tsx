
const TaskData = (props: any) => {

    const { taskData, taskResult } = props;

    const completionRate = getCompletionRate(taskData, taskResult);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Task {taskData.taskId}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Subtasks ({taskResult.length} / {taskData.M})</h6>
                <div className="progress" style={{ height: "5px" }}>
                    <div 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        aria-valuenow={completionRate} 
                        aria-valuemin={0} 
                        aria-valuemax={100} 
                        style={{ width: completionRate + "%" }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

const getCompletionRate = (taskData: any, taskResult: any) => {
    if(taskResult) {

    } else {
        console.log('Help');
        console.log(taskData, taskResult);
    }
    const taskLength = taskData.M;
    const subtasksCompleted = taskResult.length;
    return subtasksCompleted / taskLength * 100;
}

export default TaskData;