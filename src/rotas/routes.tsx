import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { ProdutosPage } from "../pages/produtos-details";
import { CartProvider } from "../context/useCart";
import Cart from "../pages/cart";
import Header from "../components/Header";
import ProdutosSelecionados from "../pages/produtos-selecionados";
import Footer from "../components/Footer";
import Sobre from "../pages/sobre";
import PoliticaDePrivacidade from "../pages/politica-de-privacidade";

const AppRoutes = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/produtos/:slug" element={<ProdutosPage />} />
          <Route path="/:type" element={<ProdutosSelecionados />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;
