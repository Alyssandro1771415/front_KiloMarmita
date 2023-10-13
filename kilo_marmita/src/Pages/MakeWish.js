import React from "react";
import RowRadioButtonsGroup from "../Componentes/RadioButtons/RadioButtons";
import Cards from "../Componentes/Cards/Cards";
import CartLateralButton from "../Componentes/CartLateralButton/CartLateralButton";

function MakeWish() {

    const products = [{ categoria: "pp", nome: "1" }, { categoria: "pp", nome: "2" }, { categoria: "pp", nome: "3" },
    { categoria: "pp", nome: "4" }, { categoria: "pp", nome: "5" }, { categoria: "pp", nome: "6" }, { categoria: "pp", nome: "7" },
    {categoria: "pp", nome:"8"}, { categoria: "a", nome: "1" }, { categoria: "a", nome: "2" }, { categoria: "a", nome: "3" },
    { categoria: "a", nome: "4" }, { categoria: "e", nome: "5" }, { categoria: "ae", nome: "6" }, { categoria: "ae", nome: "7" },
    {categoria: "ae", nome:"8"},];
    {/* Aqui corrigiremos para os dados consumidos */ }

    return (
        <div className="d-flex flex-column justify-content-around">

            <CartLateralButton></CartLateralButton>

            <div className="d-flex">
                <RowRadioButtonsGroup opt={[["P", "Pequena"], ["M", "Media"], ["G", "Grande"]]}></RowRadioButtonsGroup>
                
            </div>

            <hr></hr>

            <h2>Pratos Principais</h2>
            <div className="container d-flex flex-wrap justify-content-around mb-5">

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
