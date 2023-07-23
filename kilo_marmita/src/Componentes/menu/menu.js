import React from "react";
import "./menu.css";
import BasicModal from "../Modal/modal";


function Menu(props) {

    const listLinks = props.links.map((link, index) => 
        
        <li key={index}><a href={link[0]}>{link[1]}</a></li>
        
    );

    return (
        <ul className="menu mt-4">
            {listLinks}
            <li><BasicModal></BasicModal></li>
        </ul>
    );

}

export default Menu;
