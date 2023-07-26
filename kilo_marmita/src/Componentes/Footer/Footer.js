import React from "react";
import "./Footer.css";
import image from "../icons/logo.png";


function Footer(props) {



    return (

        <footer>
            <h4>Copyright {(new Date()).getFullYear()} {props.name}</h4>
            <h4>Instagram: <a href={props.instagram}>{props.instagramName}</a></h4>
            <h4>Phone Number: +55 83 {props.phoneNumber}</h4>
            <img src={image}/>
        </footer>

    )

}

export default Footer;
