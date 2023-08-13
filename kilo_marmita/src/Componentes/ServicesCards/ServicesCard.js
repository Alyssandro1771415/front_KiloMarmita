import React from "react";
import "./ServicesCard.css";

function ServicesCard(props) {


    if (props.redirect) {
        return (<div className="service-card align-items-center w-25">
            <a href={props.redirect}><img className="w-75" src={props.service} /></a>
            <h2>{props.serviceTitle}</h2>
            <p>{props.serviceDescription}</p>
        </div>)
    }

    else{
        return (<div className="service-card align-items-center w-25">
            <a href={props.docsDownload} download><img className="w-75" src={props.service} /></a>
            <h2>{props.serviceTitle}</h2>
            <p>{props.serviceDescription}</p>
        </div>)
    }

}

export default ServicesCard;
