import React from "react";
import "./WtsIcon.css";
import wtsIcon from "../images/whatasapp logo.jpg";

function WtsIcon() {

    return (
        <div id="whatsapp">
            <a href="" target="_blank">
                <img id="whatsapp" src={wtsIcon}/>
            </a>
        </div>
    )

}

export default WtsIcon;
