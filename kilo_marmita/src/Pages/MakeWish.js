import React from "react";
import RowRadioButtonsGroup from "../Componentes/RadioButtons/RadioButtons";
import Cards from "../Componentes/Cards/Cards";

function MakeWish() {

    const products = [];
    {/* Aqui corrigiremos para os dados consumidos */ }

    return (
        <div className="d-flex flex-column justify-content-around">

            <div className="d-flex">
                <RowRadioButtonsGroup opt={[["P", "Pequena"], ["M", "Media"], ["G", "Grande"]]}></RowRadioButtonsGroup>
            </div>

            <h2>Pratos Principais</h2>
            <div className="container d-flex flex-wrap justify-content-between mb-5">

                {products
                    .filter(product => product.categoria === "pp")
                    .map((product, index) => (
                        <Cards key={index} productName={product.nome}></Cards>
                    ))}

            </div>

            <h2>Acompanhamentos</h2>

            <div className="container d-flex flex-wrap justify-content-between mb-5">

                {products
                    .filter(product => product.categoria === "a")
                    .map((product, index) => (
                        <Cards key={index} productName={product.nome} />
                    ))}

            </div>

            <h2>Saladas e Entradas</h2>

            <div className="container d-flex flex-wrap justify-content-between mb-5">

                {products
                    .filter(product => product.categoria === "se")
                    .map((product, index) => (
                        <Cards key={index} productName={product.nome} />
                    ))}

            </div>

            <h2>Bebidas</h2>

            <div className="container d-flex flex-wrap justify-content-between mb-5">

                {products
                    .filter(product => product.categoria === "b")
                    .map((product, index) => (
                        <Cards key={index} productName={product.nome} />
                    ))}

            </div>

            <h2>Sobremesas</h2>

            <div className="container d-flex flex-wrap justify-content-between mb-5">

                {products
                    .filter(product => product.categoria === "s")
                    .map((product, index) => (
                        <Cards key={index} productName={product.nome} />
                    ))}

            </div>

        </div>
    )
}

export default MakeWish;
