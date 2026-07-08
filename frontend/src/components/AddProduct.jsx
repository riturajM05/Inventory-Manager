import React, { useState } from 'react';
import { createProduct } from '../services/api';

function AddProduct({ onProductAdded }) {
    const [formData, setFormData] = useState({ name: '', price: '', inStock: true });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data: newProduct } = await createProduct(formData);
            onProductAdded?.(newProduct);
            setFormData({ name: '', price: '', inStock: true });
            setLoading(false)
            console.log("Item has been added to inventory successfully!")
        } catch (error) {
            console.error("Create failed:", error);
            setLoading(false)
        }
    };

    return (
        <div className='flex flex-col w-[50%] border-2 border-[#7AAACE] rounded-lg mx-auto m-6 p-5'>
            <div className='pb-4'>
                <h1 className='text-4xl'>Add Product</h1>
                <p>Fill in the details below to add it to the catelog.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col '>
                <p className='mb-1'>Product</p>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product name"
                    required
                    className='mb-3 border border-gray-300 rounded-sm p-2'
                />
                <p className='mb-1'>Price</p>
                <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="₹0"
                    min="0"
                    required
                    className='mb-3 border border-gray-300 rounded-sm p-2'
                />
                <label className='mb-3 flex items-center gap-2'>
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleChange}
                    />
                    In stock
                </label>
                <button disabled={loading} type="submit" className={`${loading ? "bg-[#7AAACE]" : "bg-[#355872]"} text-[#F7F8F0] w-[30%] p-2 rounded-lg cursor-pointer`}>Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;