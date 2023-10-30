import mongoose from "mongoose"
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the book title"],
        trim: true,
        maxLength: [100, "Book title cannot exceed 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Please enter the author's name"]
    },
    summary: {
        type: String,
        required: [true, "Please enter a summary of the book"]
    },
  
    // You can keep other fields from the original schema if needed.
    // images, category, seller, stock, numOfReviews, reviews, user, createdAt
});

const Book = mongoose.model('Book', bookSchema);



export default Book; 
