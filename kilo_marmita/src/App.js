import './App.css';
import Header from "./Componentes/Header/Header"
import Test from './Componentes/Carousel/Carousel';

function App() {
  return (

    <div>

      <Header links={[["", "Inicio"], ["", "Serviços"], ["", "Produtos"], ["", "Cardápio"], ["", "Faça Seu Pedido"]]}></Header>
      
      <br></br>

      <Test></Test>

      <br></br>

    </div>

  );
}

export default App;
