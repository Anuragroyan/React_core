import React, { useEffect } from "react";

const Child = ({returnComment}) => {
    useEffect(() => {
      console.log("FUNCTION WAS CALLED");
    }, []);

    return <div>{returnComment("Anurag")}</div>;
}

export default Child;