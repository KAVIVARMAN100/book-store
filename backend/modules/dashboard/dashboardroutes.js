import express from "express"
import { addnewbook,  deletebook, getallbooks,  getsinglebook, updatebook } from "./controllers/productscontroller.js";



const router = express.Router();

router.get('/allbooks',getallbooks)
router.get('/book/:id',getsinglebook)
router.post('/book/new',addnewbook)
router.put('/book/:id',updatebook)
router.delete('/book/:id',deletebook)




export default router;