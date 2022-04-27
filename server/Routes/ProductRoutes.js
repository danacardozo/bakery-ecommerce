import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const ProductRoutes = express.Router();

//OBTENER TOODOS LOS PRODUCTOS
ProductRoutes.get(
    "/", asyncHandler(async(req,res) => {
        const products = await Product.find({})
        res.json(products)
    }
))

//OBTENER UN SOLO PRODUCTO
ProductRoutes.get(
    "/:id", asyncHandler(async(req,res)=>{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        } else {
             res.status(404);
             throw new Error("Product not found");
        }
        
    })
);

export default ProductRoutes;