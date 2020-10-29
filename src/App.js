import React , {useState} from 'react';
import './App.css';

// step 03
function App() {
  const [isLit, setLit] = useState(true);

  return (
    <div>
      the room is {isLit ? 'lit' : 'dark'}
      <br></br>
      {/* by using arrow function wigthin the onClick call we can delay the flip functionalty with our will */}
      <button onClick={()=>setLit(!isLit)}>
        Flip
      </button>
    </div>
  );
}

// // step 02
// function App() {
//   const [isLit, setLit] = useState(true);

//   return (
//     <div>
//       the room is {isLit ? 'lit' : 'dark'}
//     </div>
//   );
// }

// // // step 01
// // function App() {
// //   const [isLit, setLit] = useState(true);
// //   // use state can be destructured as follow
// //   // const state = React.useState(true);
// //   // const isLit = state[0];
// //   // const setLit = state[1];

// // return (
// //   <div className="room">the room is lit</div>
// // );
// // }

export default App;
