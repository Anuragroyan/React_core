import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const User = () => {
    const {username, emailid} = useContext(AppContext);
  return(<div>
    <h1>user: {username}</h1>
    <h1>Email_id: {emailid}</h1>
  </div>
  );
}

export default User;