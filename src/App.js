import React , {useState} from 'react';
import './App.css';

// step 01
function App() {
    const [isLit, setLit] = useState(true);
    // use state can be destructured as follow
    // const state = React.useState(true);
    // const isLit = state[0];
    // const setLit = state[1];

  return (
    <div className="room">the room is lit</div>
  );
}

export default App;
