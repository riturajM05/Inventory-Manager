import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProducts, updateProduct } from '../services/api'

const ModifyProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', price: '', inStock: true });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        loadProducts();
    },[id])
    const loadProducts = async () => {
        try {
            setLoading(true)
            const { data } = await fetchProducts();
            const existing = data.find((p) => p._id === id)
            if (!existing) {
                setError("Product not found")
                return
            }

            setFormData({
                name: existing.name,
                price: existing.price,
                inStock: existing.inStock,
            });
            setLoading(false);

        } catch (error) {
            console.log("Error is: ", error.message);
            setError("Failed to Load Product")
            setLoading(false)
        }

    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateProduct(id, formData)
            navigate('/')
        } catch (error) {
            console.log('Update failed:', error.message);
      setError('Failed to update product');
        }
    }

    return (
        <div className='flex flex-col w-[50%] border-2 border-[#7AAACE] rounded-lg mx-auto m-6 p-5'>
            <h1 className='text-4xl pb-4'>Edit Product</h1>
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
    )
}

export default ModifyProduct
