import React from "react";
import ServicesCard from "../ServicesCards/ServicesCard";
import service1 from "../images/Artboard1.png";
import service2 from "../images/Artboard2.png";
import service3 from "../images/Artboard3.png";
import faxMenu from "../docs/cardapio-fax.doc"

function ServicesSection() {

    return (

        <div>
            <h1>Nossos Serviços</h1>
            <div className="d-flex flex-row justify-content-around">

                <ServicesCard redirect={"./cardapio"} service={service1} serviceTitle={"Cardárpio do Dia"} serviceDescription={"Veja nosso cardápio do dia, e faça já o seu pedido."}></ServicesCard>

                <ServicesCard redirect={"./fazerpedido"} service={service2} serviceTitle={"Pedidos Online"} serviceDescription={"Mais praticidade para você e os melhores pratos da região."}></ServicesCard>

                <ServicesCard docsDownload={faxMenu} service={service3} serviceTitle={"Cardárpio Fax"} serviceDescription={"Baixe nossa comanda, faça vários pedidos e nos envie! Temos a satisfação de realizar o pedido para sua empresa."}></ServicesCard>

            </div>
        </div>

    )

}

export default ServicesSection;
