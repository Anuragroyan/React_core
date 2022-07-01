import React , {useState, useMemo, useEffect} from "react";
import axios from "axios";

const MemoTutorial = () => {
 const [data, setData] = useState(null);
 const [toggle, setToggle] = useState(false);

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data);
    });
}, []);

const findLongestName = (comments) => {
    if(!comments) return null;
    let longestName = "";
    for(let i=0;i<comments.length; i++)
    {
        let currentname = comments[i].name;
        if(currentname.length > longestName.length)
        {
            longestName = currentname;
        }
    }
    console.log("THIS WAS COMPUTED");

    return longestName;
};

const getLongestName = useMemo(() => findLongestName(data), [toggle]);

return(
    <div className="App">
       <div>{getLongestName}</div>
       <button onClick={() => {
        setToggle(!toggle);
       }}>{""}
        Toggle
        </button>
       {toggle && <h1>Toggle</h1>}
    </div>
);



}

export default MemoTutorial;