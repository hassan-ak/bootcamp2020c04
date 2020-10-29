import React , {useState} from 'react';
import './App.css';

//Assignment
function App() {

  const [lit,setLit] = useState(false)
  const [temp,setTemp] = useState(22)
  return (
    <div className = "container">
      <div className="status">
        <p>
          Lights are <strong>{lit? 'ON' : 'OFF'}</strong>
          <br></br>
          Temperature is <strong>{temp} <sup>o</sup>C</strong>
        </p>
      </div>
      
      <button className="toggle" onClick={()=>{setLit(!lit)}}>Toggle Light</button>
      <div className="light-buttons">
      <button className="off" onClick={()=>{setLit(false)}}>Off</button>
      <button className="on" onClick={()=>{setLit(true)}}>ON</button>
      </div>
      
      <div>
        <div className = "upper">
          <div className = {`upper-window ${lit? 'lit':'dark'}`}></div>
        </div>
        <div className = "room">
          <div className = {`room-window ${lit? 'lit':'dark'}`}></div>
          <div className = {`room-window1 ${lit? 'lit':'dark'}`}></div>
          <div className = "room-door">
            <div className = "door-knob"></div>
          </div>
        </div>
        </div>
        
      <div className="temp-buttons">
      <button className="inc" onClick={()=>{setTemp(temp-1)}}>-</button>
      <button className="dec" onClick={()=>{setTemp(temp+1)}}>+</button>
      </div>
      <div className="temp">
        Set Temprature
      </div>
    </div>
  );
}


// // step 05
// function App() {
//   const [isLit, setLit] = useState(true);

//   return (
//     <div className={`room ${isLit ? "lit" : "dark"}`}>
//       the room is {isLit ? 'lit' : 'dark'}
//       <br></br>
//       <button onClick={()=>setLit(!isLit)}>
//         Flip
//       </button>
//     </div>
//   );
// }

// // // step 04
// // function App() {
// //   const [isLit, setLit] = useState(true);
// //   const brightness = isLit ? "lit" : "dark";

// //   return (
// //     <div className={`room ${brightness}`}>
// //       the room is {isLit ? 'lit' : 'dark'}
// //       <br></br>
// //       <button onClick={()=>setLit(!isLit)}>
// //         Flip
// //       </button>
// //     </div>
// //   );
// // }

// // // // step 03
// // // function App() {
// // //   const [isLit, setLit] = useState(true);

// // //   return (
// // //     <div>
// // //       the room is {isLit ? 'lit' : 'dark'}
// // //       <br></br>
// // //       {/* by using arrow function wigthin the onClick call we can delay the flip functionalty with our will */}
// // //       <button onClick={()=>setLit(!isLit)}>
// // //         Flip
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // // // step 02
// // // // function App() {
// // // //   const [isLit, setLit] = useState(true);

// // // //   return (
// // // //     <div>
// // // //       the room is {isLit ? 'lit' : 'dark'}
// // // //     </div>
// // // //   );
// // // // }

// // // // // // step 01
// // // // // function App() {
// // // // //   const [isLit, setLit] = useState(true);
// // // // //   // use state can be destructured as follow
// // // // //   // const state = React.useState(true);
// // // // //   // const isLit = state[0];
// // // // //   // const setLit = state[1];

// // // // // return (
// // // // //   <div className="room">the room is lit</div>
// // // // // );
// // // // // }

export default App;
