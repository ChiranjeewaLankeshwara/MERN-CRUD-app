import mongoose from "mongoose"; // import mongoose

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true// created at and updated at
}); // create a new schema

//put product as singular and capitalized version of it  as mongooses will create a collection with plural and lower case
const Product = mongoose.model("Product", productSchema); // create a model

export default Product; // export the model