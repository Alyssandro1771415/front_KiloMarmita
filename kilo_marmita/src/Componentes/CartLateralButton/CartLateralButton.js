import React from "react";
import "./CartLateralButton.css"

function CartLateralButton() {

    return (
        <button className="cart-button">
            <i class="bi bi-arrow-bar-down arrow-down"></i>
            <i class="bi bi-cart-check-fill"> Cart</i>
        </button>
    )
}

export default CartLateralButton;
