import express from "express";
import User from "./Models/UserModel.js";
import Users from "./data/Users.js";
import Product from "./Models/ProductModel.js";
import Products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
    "/user", 
    asyncHandler(async (req, res)=> {
    await User.remove({});
    const importUser = await User.insertMany(Users);
    res.send({importUser});
})
);

ImportData.post(
    "/products", 
    asyncHandler(async (req, res) => {
        await Product.remove({});
        const importProducts = await Product.insertMany(Products);
        res.send({importProducts});
    }
));

export default ImportData;