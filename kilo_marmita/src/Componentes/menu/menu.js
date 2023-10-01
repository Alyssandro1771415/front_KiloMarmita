import React from "react";
import "./menu.css";
import BasicModal from "../Modal/modal";
import { BrowserRouter as Router, Switch ,Route, Link } from 'react-router-dom';



function Menu(props) {

    const listLinks = props.links.map((link, index) => 
        
        <li className="header_li" key={index}><a href={link[0]}>{link[1]}</a></li>
        
    );

    return (
        <ul className="menu mt-4">
            {listLinks}
            <li><BasicModal opt="logIn"></BasicModal></li>
            <li><BasicModal opt="signIn"></BasicModal></li>
        </ul>
    );

}

export default Menu;
