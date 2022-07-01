import React, { useCallback, useState } from "react";
import Child from './Child';

const CallbackTutorial = () => {
 const [toggle, setToggle] = useState(false);
 const [data, setData] = useState("yo, pls help me!");
  
 const returnComment = useCallback((name) => {
    return data + name;
 },[data])
  
 return(
    <div className="App">
      <Child returnComment={returnComment} />
      <button onClick={()=> {
         setToggle(!toggle);
      }}>{""}
      toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
 );
};

export default CallbackTutorial;