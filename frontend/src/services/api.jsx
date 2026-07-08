import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + '/products',
 // Backend URL
});

const authHeader = () => ({
  headers: { token: localStorage.getItem('token') || '' }
});

export const fetchProducts = () => API.get('/list');
export const createProduct = (product) => API.post('/create', product, authHeader());
export const updateProduct = (_id, product) => API.put(`/modify/${_id}`, product, authHeader())
export const deleteProduct = (_id) => API.delete(`/remove/${_id}`, authHeader());