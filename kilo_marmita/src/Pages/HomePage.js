import React from "react";
import Carousel from "../Componentes/Carousel/Carousel";
import InformationText from "../Componentes/InformationsText/InformationText";
import Localization from "../Componentes/Localization/Localization";
import ServicesSection from "../Componentes/Services/ServicesSection";

function HomePage() {

    return (

        <div>

            <div className='container mt-4 mb-4 d-flex justify-content-start'>

                <Carousel></Carousel>

                <InformationText></InformationText>

            </div>

            <Localization></Localization>

            <ServicesSection></ServicesSection>

        </div>

    )

}

export default HomePage;
