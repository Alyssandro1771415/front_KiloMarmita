import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Cards(props) {
    const cardStyle = {
        width: "15vw"
    };

    return (
        <div className="card mt-3" style={cardStyle}>
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
            </div>
            <div className="card-body d-flex">
                <button className="btn btn-success">
                    <i className="bi bi-cart-plus"> Add </i>
                </button>
            </div>
        </div>
    )
}

export default Cards;
