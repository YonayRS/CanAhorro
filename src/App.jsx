import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SuperMarketList from "./pages/SuperMarketList";
import ProductsList from "./pages/ProductsList";
import logo from "/images/logo.jpg";
import Footer from "./components/Footer";
import "./styles.css";

function App() {

  return (

    <BrowserRouter>
    <>
      <h2>Canahorro App</h2>
      <div className="logo-container">
        <img src={logo} className="logo-image" alt="Logo" />
      </div>
      </>
      
      <Routes>
        <Route path="/product-list" element={<ProductsList />} />
        <Route path="/market-list" element={<SuperMarketList />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App;
