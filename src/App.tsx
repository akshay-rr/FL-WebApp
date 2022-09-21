import { useState } from 'react';
import './App.css';

function App() {
    const [N, setN] = useState('');
    const [M, setM] = useState('');

    return (
        <div className="App">
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">M</span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={(e) => setN(e.currentTarget.value)} />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">N</span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                onChange={(e) => setM(e.currentTarget.value)} />
                        </div>
                        <button className='btn btn-primary'
                            onClick={() => alert(N + ' ' + M)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
