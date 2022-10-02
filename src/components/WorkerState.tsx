import { useContext } from "react";
import { Context } from "../GlobalStore";



const WorkerState = () => {
    const { state } = useContext(Context);
    
    return (
        <div>
            <div>
                <div>Workers</div>
                <div>
                    <h4>{state.appData.workers.length}</h4>
                </div>
            </div>
        </div>
    )
}

export default WorkerState;