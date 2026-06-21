import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import ModifyProduct from './components/ModifyProduct';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/products/modify/:id" element={<ModifyProduct />} />
      </Routes>
    </Router>
  );
}

export default App;