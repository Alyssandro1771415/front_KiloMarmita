import './App.css';
import Header from "./Componentes/Header/Header"
import Test from './Componentes/Carousel/Carousel';
import InformationText from './Componentes/InformationsText/InformationText';

function App() {
  return (

    <div>

      <Header links={[["", "Inicio"], ["", "Serviços"], ["", "Produtos"], ["", "Cardápio"], ["", "Faça Seu Pedido"]]}></Header>
      
      <div className='container mt-4 mb-4 d-flex justify-content-start'>

        <Test></Test>
        
        <InformationText></InformationText>

      </div>

    </div>

  );
}

export default App;
