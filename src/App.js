import logo from './logo.svg';
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import {ShopContextProvider} from './pages/ShopContextProvider.jsx';
import Cart from './pages/cart.jsx';
import Login from './pages/Login.jsx';
import { useLocation } from 'react-router-dom';
import Profile from './pages/profile.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/firstdraft" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
