import { useState, useReducer, useEffect } from 'react';
import { Context, reducer, initialState } from './GlobalStore';
import './App.css';
import { loadTasks, setAppData } from './actions/Actions';
import { createTaskCall, getAppStateCall, spawnWorkersCall } from './services/TaskService';
import AppDataStateComponent from './components/AppDataStateComponent';

import { w3cwebsocket as W3CWebSocket } from "websocket";
import WorkerState from './components/WorkerState';

let client: any;

try {
    client = new W3CWebSocket('ws://127.0.0.1:5000');
} catch (e) {
    console.log(e);
}


function App() {
    const [N, setN] = useState('');
    const [M, setM] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState);

    const createTask = () => {
        dispatch(loadTasks());
        createTaskCall(parseInt(M)).then((response) => {
            dispatch(setAppData(response));
        }).catch((e) => {
            console.log('Failed');
            console.log(e);
        });
    }

    const spawnWorkers = () => {
        dispatch(loadTasks());
        spawnWorkersCall(parseInt(N)).then((response) => {
            dispatch(setAppData(response));
        }).catch((e) => {
            console.log('Failed');
            console.log(e);
        });
    }

    useEffect(() => {
        dispatch(loadTasks());
        getAppStateCall().then((response) => {
            dispatch(setAppData(response));
        }).catch((e) => {
            console.log('Failed');
            console.log(e);
        });
    }, []);

    useEffect(() => {
        if (client) {
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            };

            client.onmessage = (message: any) => {
                const dataFromServer = JSON.parse(message.data);
                console.log('Server Message: ', dataFromServer);
                
                if (dataFromServer.type === 'CLIENT_STATE_UPDATE') {
                    dispatch(setAppData(dataFromServer.data));
                }

            };
        }
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="App">
                <div className='dynamofl-container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">M</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={(e) => setM(e.currentTarget.value)} />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={createTask}>Create Task</button>
                            </div>
                            <div>
                                {
                                    state.loading ?
                                    <div>Loading...</div> :
                                    <AppDataStateComponent />
                                }
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">N</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                    onChange={(e) => setN(e.currentTarget.value)} />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={spawnWorkers}>Spawn Workers</button>
                            </div>
                            <div>
                                {
                                    state.loading ?
                                    <div>Loading...</div> :
                                    <WorkerState />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
