import React, { useEffect, useState } from "react";
import "./CartLateralButton.css"
import image from "../images/feijoada.png"

function CartLateralButton() {

    const itemsToCart = [{}, {}, {}]; //Aqui será para onde os items adicionados ao carrinho virão para aparecerem nele

    const [lister, setLister] = useState(false);

    useEffect(() => {
    }, [lister]);

    const toggleList = () => {
        setLister(prevLister => !prevLister);
    };

    return (
        <div className="btn cart-button d-flex flex-column">
            <div className="list-items-button" onClick={toggleList}>
                <i className="bi bi-arrow-bar-down arrow-down"></i>
                <span className="bi bi-cart-check-fill">Cart</span>
            </div>
            <div className={`list-items ${lister ? "" : "d-none"}`}>
                <hr />
                <ul>
                    <li>
                        <div className="d-flex justify-content-around">
                            <img src={image}></img>
                            <div>
                                <p>Feijoada</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-around">
                            <img src={image}></img>
                            <div>
                                <p>Feijoada</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-around">
                            <img src={image}></img>
                            <div>
                                <p>Feijoada</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-around">
                            <img src={image}></img>
                            <div>
                                <p>Feijoada</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-around">
                            <img src={image}></img>
                            <div>
                                <p>Feijoada</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                </ul>
                <h5>Total: R$</h5>
            </div>
        </div>
    )
}

export default CartLateralButton;
