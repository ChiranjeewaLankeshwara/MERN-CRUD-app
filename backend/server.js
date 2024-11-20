//const express = require('express');


//modern syntax
import express from 'express';

import dotenv from 'dotenv';

import { connectDB } from './config/db.js';

import Product from '../models/product.model.js';//importing the model


//use this to connect to db
dotenv.config();

const app = express();

//to connect to postman
app.use(express.json());//middleware to parse json data

app.post("/api/products", async (req, res) => {// async here means that this function will return a promise
    const product = req.body // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: 'All fields are required'});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();//saves to db
        res.status(201).json({ success: true, data: newProduct });
        
    } catch (error) {
        //internal server error = 500
        console.error("Error in creating product", error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } 
});

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product is deleted' });
    } catch (error) {
        res.status(404).json({ success: false, message: 'Product not found' });
    }

});//delete a product  dynamically 

//to use this import dotenv from package.json
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})

