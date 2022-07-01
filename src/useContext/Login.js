import React, {useContext} from "react";
import { AppContext } from './ContextTutorial';

const Login = () => {
    const {setUsername, setEmailid} = useContext(AppContext);
    return (
        <div>
            <input onChange={(event) => {
                setUsername(event.target.value);
            } } />
            <input onChange={(event) => {
                setEmailid(event.target.value);
            } } />
        </div>
    );
}

export default Login;