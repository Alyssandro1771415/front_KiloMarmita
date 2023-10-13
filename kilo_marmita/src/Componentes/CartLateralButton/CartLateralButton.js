import React, { useEffect, useState } from "react";
import "./CartLateralButton.css"
import image from "../images/marmita.png";


function CartLateralButton(props) {

    const itemsToCart = [props.itemsToCart]; //Aqui será para onde os items adicionados ao carrinho virão para aparecerem nele

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
                        <div className="d-flex flex-row">
                            <div className="packed-lunch d-flex">
                                <img src={image}></img>
                                <div>
                                    <p>Marmita - G</p>
                                    <p1>15.50</p1>
                                </div>
                            </div>
                            <div className="packed-lunch-content d-none">
                                <ul>
                                    <li>Salada de Atum</li>
                                    <li>Arroz Branco</li>
                                    <li>Feijoada</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex flex-row">
                            <img src={image}></img>
                            <div>
                                <p>Marmita - M</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li><li>
                        <div className="d-flex flex-row">
                            <img src={image}></img>
                            <div>
                                <p>Marmita - P</p>
                                <p1>15.50</p1>
                            </div>
                        </div>
                    </li>
                </ul>
                <h5>Total: R$</h5>
            </div>
            <hr></hr>
            <a className="btn btn-success m-2">Concluir Pedido</a>
        </div>
    )
}

export default CartLateralButton;
