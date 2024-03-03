import React, { useState } from "react";

const Week6=()=>{
    const [isLoggedIn,SetloggedIn]=useState(false);
    const handleLogin=()=>{
        SetloggedIn(!isLoggedIn);
    }

const TernaryOperator=()=>{
    
    const WelcomeComponent=()=>{
        return(
            <div>
                <h4>Welcome Component</h4>
                <button onClick={handleLogin}>Logout</button>
            </div>
        )
    }
    const LoginComponent=()=>{
        return(
            <div>
                <h4>Login Component</h4>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }
   
    return(
        <div>
            {isLoggedIn ? <WelcomeComponent/>:<LoginComponent/>
            }
        </div>
    )
} 
const WelcomeComponent=()=>{
    return(
        <div>
            <h4>Welcome Component</h4>
            
        </div>
    )
}
const LoginComponent=()=>{
    return(
        <div>
            <h4>Login Component</h4>
            
        </div>
    )
}
const LogicalOperator=()=>{
    return(
        <div>
            {isLoggedIn && <WelcomeComponent/>}
        </div>
    )
}
const ifElse=()=>{
            if(isLoggedIn){
                return <WelcomeComponent/>;
            }
            else {
                return <LoginComponent/>;
            }
            return ifElse;
}
const defaultComponent=()=>{
    return(
        <div>
            <h4>Default Component</h4>
        </div>
    )
}
const SwitchComponent=({isLoggedIn})=>{
    switch(isLoggedIn){
        case "true":
            <WelcomeComponent/>
        case "false":
            <LoginComponent/>
       default:
        <defaultComponent/>
    }
}
    return(
        <div>
            <h4>Week - 6: Create React App and Show Multiple Components using Conditional Rendering & List</h4>
            <TernaryOperator/>
            <hr/>
            <LogicalOperator/>
            <hr/>
            {ifElse()}
            <hr/>
            {SwitchComponent({isLoggedIn})}
            <hr/>
        </div>
    )
}

export default Week6;