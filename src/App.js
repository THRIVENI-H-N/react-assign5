import './App.css';
import PureComponent from './Components/PureComponent';
import { useState } from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let [firstcount, updateFirstCount] = useState(0);

const handleFirstCount = () => {
    updateFirstCount(firstcount+1);
    console.log(firstcount+1);
    return <p>firstCount: {firstcount+1}</p>;
  }

  return (
    <div className="App">
      <h1>Assign-5</h1>
    
      <PureComponent method={handleFirstCount}></PureComponent>
      <br />
      <button className='btn btn-success' onClick={handleFirstCount}>second button</button>
      
      <br />
      <br />
      <hr />
      <br />
      <p> Higher Order Component HOC</p>
      <ol>
        <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.</li>
      </ol>
      <div className='flex-box'>
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}

export default App;