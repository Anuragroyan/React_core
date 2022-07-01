 import React, {useState, useRef} from 'react';

 const RefTutorial = () => {
    const inputRef = useRef(null);
    const [data, setData] = useState("");

   const onClicked = () => {
    inputRef.current.focus();
    const input = inputRef.current.value;
    setData(input);
   }
  
   return(
    <div>
        <h1>Name:{data}</h1>
        <input type="text" placeholder="type here..." ref={inputRef}/>
        <button onClick={onClicked} >Enter NAME</button>
    </div>
   );
 };

 export default RefTutorial;