import React from "react";
import './AltLogin.css'

function AltLogin(props) {
    return (
        <div className="alt-content">
            <props.icon className="icon" />
            <p>{props.info}</p>
        </div>
    )
}

export default AltLogin;