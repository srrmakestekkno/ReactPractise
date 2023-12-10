import React, { useState} from "react";
import './App.css';

const Button = (props) => {
  const handleOnClick = () => props.onClickFunction(props.increment);

  return (
  <button onClick={handleOnClick}>
    +{props.increment}
  </button>
  );
};

const Display = (props) => {
  return (
    <div>{props.message}</div>
  );
};

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);

  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter}  increment={5}/>
      <Button onClickFunction={incrementCounter}  increment={10}/>
      <Button onClickFunction={incrementCounter}  increment={100}/>
      <Display message={counter} />
    </div>
  );
}

export default App;
