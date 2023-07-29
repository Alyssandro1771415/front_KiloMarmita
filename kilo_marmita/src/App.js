import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Header from "./Componentes/Header/Header"
import InformationText from './Componentes/InformationsText/InformationText';
import WtsIcon from './Componentes/WtsIcon/WtsIcon';
import Footer from './Componentes/Footer/Footer';
import HomePage from './Pages/HomePage';



const Home = () => (
  
  <HomePage></HomePage>

);
const Servicos = () => <div>Conteúdo da Página de Serviços</div>;
const Produtos = () => <div>Conteúdo da Página de Produtos</div>;
const Cardapio = () => <div>Conteúdo da Página de Cardápio</div>;
const FazerPedido = () => <div>Conteúdo da Página Faça Seu Pedido</div>;

function App() {
  return (
    <Router>
      <div>
        <WtsIcon></WtsIcon>

        <Header links={[
          ["/", "Inicio"],
          ["/servicos", "Serviços"],
          ["/produtos", "Produtos"],
          ["/cardapio", "Cardápio"],
          ["/fazerpedido", "Faça Seu Pedido"]
        ]}></Header>

        <div className='container mt-4 mb-4 d-flex justify-content-start'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<InformationText />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/fazerpedido" element={<FazerPedido />} />
          </Routes>
        </div>

        <Footer
          name="Kilomarmita"
          phoneNumber="3321-8786"
          instagram="https://www.instagram.com/kilomarmitacg/"
          instagramName="@kilomarmitacg"
          developers={["Alyssandro", "https://www.linkedin.com/in/alyssandro-ramos-9672331ba/"]}
        >
        </Footer>
      </div>
    </Router>
  );
}

export default App;
