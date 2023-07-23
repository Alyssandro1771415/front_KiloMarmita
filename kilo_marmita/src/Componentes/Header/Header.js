import React from "react";
import "./Header.css";
import Menu from "../menu/menu.js"
import logo from "../icons/logo.png"

function Header(props) {
    return (
        <header className="header">
            <div className="logoType">
                <img src={logo} width="200vh"></img>
                <h1>{props.name}</h1>
            </div>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header
