import connectdb from "../config/db.js";
import products from "../data/products.json" assert { type: "json" };

// Now you can use the 'productsData' variable to access the JSON data
import product  from "../models/productsModel.js"
import dotenv from "dotenv";


dotenv.config();

connectdb();
export const seedproducts=async(req,res,next)=>{
try{
await product.deleteMany();
console.log("All products deleted");
await product.insertMany(products)
console.log("All products added");

}
catch(err){
console.log(err.message);
}
}

seedproducts();