import { useContext } from "react";
import { Context } from "../GlobalStore";



const WorkerState = () => {
    const { state } = useContext(Context);
    
    const workerCount = state.appData.workers.length;
    const idleWorkerCount = state.appData.workers.filter((worker) => {
        return worker.status === 'IDLE';
    }).length;

    return (
        <div>
            <div>
                <div>Workers</div>
                <div>
                    <h4>{workerCount}</h4>
                </div>
            </div>
            <div>
            <div>Idle Workers</div>
                <div>
                    <h4>{idleWorkerCount}</h4>
                </div>
            </div>
        </div>
    )
}

export default WorkerState;