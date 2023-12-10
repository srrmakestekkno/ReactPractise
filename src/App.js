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

function App() {
  const [counter, setCounter] = useState(0);
  const incremetCounter = (incrementValue) = setCounter(counter + incrementValue);

  return (
    <div>
      <Button onClickFunction={incremetCounter} increment={1}/>
      <Button onClickFunction={incremetCounter}  increment={5}/>
      <Button onClickFunction={incremetCounter}  increment={10}/>
      <Button onClickFunction={incremetCounter}  increment={100}/>
    </div>
  );
}

export default App;
