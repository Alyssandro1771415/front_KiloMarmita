import React from "react";
import RowRadioButtonsGroup from "../Componentes/RadioButtons/RadioButtons";

function MakeWish() {

    return (
        <div className="d-flex flex-column justify-content-around">

            <RowRadioButtonsGroup opt={[["P", "Pequena"], ["M", "Media"], ["G", "Grande"]]}></RowRadioButtonsGroup>

            <h2>Pratos Principais</h2>

            <h2>Acompanhamentos</h2>

            <h2>Saladas e Entradas</h2>

            <h2>Bebidas</h2>

            <h2>Sobremesas</h2>

        </div>
    )
}

export default MakeWish;
