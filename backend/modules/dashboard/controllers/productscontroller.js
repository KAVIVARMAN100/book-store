import bookSchema from "../../../models/productsModel.js"
import ErrorHandler from "../../../utils/errorHandler.js"
import asyncMiddleware from "../../../middlewares/catchAsyncError.js"

export const getallbooks=async(req,res,next)=>{
    const allbooks=await bookSchema.find()
    res.status(200).json({success:true,
        count:allbooks.length,
        allbooks})
}


export const getsinglebook = async (req, res, next) => {
    try {
        const singlebook = await bookSchema.findById(req.params.id);   

        res.status(200).json({
            success: true,
            singlebook
        });
    } catch (err) {
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID',
            });
        }
     
    }
};






export const addnewbook=async(req,res,next)=>{
    const newbook=await bookSchema.create(req.body)

    res.status(200).json({success:true,
        newbook})
}


export const updatebook= async (req, res) => {
    try {
        let book = await bookSchema.findById(req.params.id);
        
      
        
        book = await bookSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product.kindly check the product details entered is correct"
        });
    }
}


export const deletebook = async (req, res, next) =>{
    const book = await bookSchema.findById(req.params.id);

    if(!book) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    await book.deleteOne();

    res.status(200).json({
        success: true,
        message: "book Deleted!"
    })

}
