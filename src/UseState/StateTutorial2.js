import React, {useState} from "react";

const StateTutorial2 = () => {
    const [inputValue, setInputvalue] = useState("Anurag");

    const Entervalue = (e) => {
       const newvalue = e.target.value;
       setInputvalue(newvalue);
    };

    return(
        <>
        <input placeholder="type here something..." onChange={Entervalue} />
        {inputValue}
        </>
    );
};

export default StateTutorial2;