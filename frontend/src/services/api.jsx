import axios from 'axios';
const API = axios.create({
baseURL: 'http://localhost:3000/api/products', // Backend URL
});
export const fetchProducts = () => API.get('/list');
export const createProduct = (product) => API.post('/create', product);
export const updateProduct = (_id, product) => API.put(`/modify/${_id}`, product)
export const deleteProduct = (_id) => API.delete(`/remove/${_id}`);