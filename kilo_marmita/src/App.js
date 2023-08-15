import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Header from "./Componentes/Header/Header"
import WtsIcon from './Componentes/WtsIcon/WtsIcon';
import Footer from './Componentes/Footer/Footer';
import HomePage from './Pages/HomePage';
import MakeWish from "./Pages/MakeWish";
import AdminPage from './Pages/AdministerPage';

const Home = () => <HomePage></HomePage>;
const Produtos = () => <div>Conteúdo da Página de Produtos</div>;
const Cardapio = () => <div>Conteúdo da Página de Cardápio</div>;
const FazerPedido = () => <MakeWish></MakeWish>;
const Administer = () => <AdminPage></AdminPage>

function App() {
  return (
    <Router>
      <div className='pagesBody'>

        <Header links={[
          ["/", "Inicio"],
          ["/produtos", "Produtos"],
          ["/cardapio", "Cardápio"],
          ["/fazerpedido", "Faça Seu Pedido"],
          ["/administer", "Administrador"]
        ]}></Header>

        <div className='container mt-4 mb-4 d-flex justify-content-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/fazerpedido" element={<FazerPedido />} />
            <Route path="/administer" element={<Administer/>} />
          </Routes>
        </div>

        <WtsIcon></WtsIcon>

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
