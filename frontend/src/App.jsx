import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import ModifyProduct from './components/ModifyProduct';
import Login from './components/Login';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/products/modify/:id" element={<ModifyProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;