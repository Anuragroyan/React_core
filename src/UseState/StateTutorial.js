import React, {useState} from "react";

const StateTutorial = () => {
const [counter ,setCounter] = useState(0);
const Increment = () => {
    setCounter(counter + 1);
};

  return(
    <div>
    {counter}
    <button onClick={Increment}>Increment</button>
    </div>
  );
};


export default StateTutorial;