import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminCustomers from './pages/AdminCustomers';
import AdminManagement from './pages/AdminManagement';
import AdminOrders from './pages/AdminOrders';
import AdminOverview from './pages/AdminOverview';
import AllCollections from './pages/AllCollections';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import ForgotPass from './pages/ForgotPass';
import Jornal from './pages/Jornal';
import Login from './pages/Login';
import OurStory from './pages/OurStory';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ResetPass from './pages/ResetPass';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_customers" element={<AdminCustomers />} />
        <Route path="/admin_management" element={<AdminManagement />} />
        <Route path="/admin_orders" element={<AdminOrders />} />
        <Route path="/admin_overview" element={<AdminOverview />} />
        <Route path="/all_collections" element={<AllCollections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/forgot_pass" element={<ForgotPass />} />
        <Route path="/jornal" element={<Jornal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/our_story" element={<OurStory />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_pass" element={<ResetPass />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
