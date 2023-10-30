import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import router from "./routes/mainroutes.js";
import errorHandler from "./middlewares/error.js"; // Import the errorHandler middleware

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
connectdb();

// Define a middleware to catch Mongoose CastErrors
app.use(errorHandler); // Use the errorHandler middleware after it's defined

app.listen(PORT, () => {
    console.log("The server is running on port " + PORT);
});
