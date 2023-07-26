import React from "react";

function Localization() {

    return (

        <div className="d-flex flex-column justify-content-center align-items-center m-5">
           
            <h1 className="mb-4">Onde Estamos Situados?</h1>

            <h4>311 Av. Jorn. Assis Chateaubriand</h4>
            <h5>Campina Grande-PB</h5>

            <iframe src="https://www.google.com/maps/embed?pb=!4v1690391299158!6m8!1m7!1sjkgtz9F0v5W0KHvOiSduYQ!2m2!1d-7.230987269288738!2d-35.88916942659849!3f276.1273071793038!4f2.716630394417976!5f1.9594015157687914" 
            width="600" 
            height="400" 
            style={{ border:0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

    )

}

export default Localization;
