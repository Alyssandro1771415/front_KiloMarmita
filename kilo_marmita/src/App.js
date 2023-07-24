import './App.css';
import Header from "./Componentes/Header/Header"
import Test from './Componentes/Carousel/Carousel';

function App() {
  return (

    <div>

      <Header links={[["", "Inicio"], ["", "Serviços"], ["", "Produtos"], ["", "Cardápio"], ["", "Faça Seu Pedido"]]}></Header>
      
      <div className='container mt-5 mb-5 d-flex'>

        <Test></Test>

        

      </div>

    </div>

  );
}

export default App;
