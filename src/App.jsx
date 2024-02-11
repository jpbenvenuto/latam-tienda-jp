import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import NotFound from "./components/NotFound";
import Detail from "./views/Detail";
import Context from "./context/context";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ pizza, setPizza, cart, setCart }}>
      <BrowserRouter>
        <div className='container-app d-flex flex-column align-space-between  '>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;