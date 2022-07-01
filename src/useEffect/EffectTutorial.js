import React, {useState, useEffect} from "react";
import axios from "axios";

const EffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then((respond) => {
            setData(respond.data[0].email);
            console.log("API WAS CALLED");
          });
    }, [count]);


    return (
      <div>
        <h1>{data}</h1>
        <h2>{count}</h2>
        <button
           onClick={() => {
            setCount(count + 1);
           }}
        >Click</button>
      </div>
    );

};

export default EffectTutorial;