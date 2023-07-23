import './App.css';
import Header from "./Componentes/Header/Header"

function App() {
  return (

    <div>

      <Header links={[["", "Inicio"], ["", "Serviços"], ["", "Produtos"], ["", "Cardápio"], ["", "Faça Seu Pedido"]]}></Header>

    </div>

  );
}

export default App;
