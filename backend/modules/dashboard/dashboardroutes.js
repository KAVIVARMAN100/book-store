import express from "express"
import { addnewbook,  deletebook, getallbooks,  getsinglebook, updatebook } from "./controllers/productscontroller.js";



const router = express.Router();


//READING ALL BOOKS FROM DB ------------http://localhost:8000/allbooks
router.get('/allbooks',getallbooks)


//GETTING A SINGLE BOOK-----------http://localhost:8000/book/653fdfa214c1facaa0595afe
router.get('/book/:id',getsinglebook)

//INSERTING A BOOK -----http://localhost:8000/book/new
router.post('/book/new',addnewbook)


//UPDATING A BOOK------------------http://localhost:8000/book/:ID
router.put('/book/:id',updatebook)


//DELETING  a book--------------------http://localhost:8000/book/6540fe59fdebab2a1df45ac
router.delete('/book/:id',deletebook)




export default router;
