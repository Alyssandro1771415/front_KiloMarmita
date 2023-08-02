import React from "react";
import RowRadioButtonsGroup from "../Componentes/RadioButtons/RadioButtons";
import Cards from "../Componentes/Cards/Cards";

function MakeWish() {

    const products = ["1","2","3","4","5","6","7", "8", "9", "10"]; {/* Aqui corrigiremos para os dados consumidos */}

    return (
        <div className="d-flex flex-column justify-content-around">

            <div className="d-flex">
                <RowRadioButtonsGroup opt={[["P", "Pequena"], ["M", "Media"], ["G", "Grande"]]}></RowRadioButtonsGroup>
            </div>

            <h2>Pratos Principais</h2>
            <div className="container d-flex flex-wrap justify-content-between">

            {products.map((produto, index) => {
                return(<Cards key={index} productName={produto}></Cards>)
            })}

            </div>

            <h2>Acompanhamentos</h2>

            <h2>Saladas e Entradas</h2>

            <h2>Bebidas</h2>

            <h2>Sobremesas</h2>

        </div>
    )
}

export default MakeWish;
