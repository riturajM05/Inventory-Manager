import Product from "../models/product.js";

//get route
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

//post route
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({success: false, message: error.message});
    }
}

//get route
const getProductById = async (req, res) => {
    try {
        const { _id } = req.params;
        const product = await Product.findById(_id);
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(404).json({success: false, message: error.message});
    }
}

//put route
const updateProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        await Product.findByIdAndUpdate( _id, req.body)
        res.status(200).json({success: true, message: "product updated successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({success: false, message: error.message});
    }
}

//delete route
const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        await Product.findByIdAndDelete(_id);
        res.status(200).json({success: true, message: "product deleted successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export { createProduct, getAllProduct, getProductById, updateProduct, deleteProduct}