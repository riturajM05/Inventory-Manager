import React, { useState, useEffect } from 'react';
import { fetchProducts, deleteProduct } from '../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const { data } = await fetchProducts();
            setProducts(data);
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = confirm('Delete this product?');
        if (!confirmed) return;

        try {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((product) => product._id !== id));
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Failed to delete product');
        }
    };

    return (
        <div className='w-[70%] mx-auto my-8'>
            <h1 className='font-serif text-4xl'>Products</h1>
            {products.length === 0 ? (<p>No products in the catalog</p>) : (
                <div>
                    <p className='mb-5'>{products.length} items in the catalog</p>
                    <div className="border border-gray-300 rounded-xl">
                        {products.map((product, idx) => (
                            <div key={product._id} className={`${idx === products.length - 1 ? "" : "border-b border-gray-300"} flex justify-between items-center p-4`}>
                                <div className="flex items-center gap-6">
                                    <p>{idx + 1}.</p>
                                    <div>
                                        <p className='text-lg'>{product.name}</p>
                                        <p className='text-sm font-light'>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-[15%]">
                                    <p>₹{product.price}</p>
                                    <Link to={`/products/modify/${product._id}`}><img src="../assets/edit.png" alt="" className='w-6 h-6' /></Link>
                                    <img src="../assets/bin_icon.png" alt="" onClick={() => { handleDelete(product._id) }} className='cursor-pointer w-6 h-6' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList;