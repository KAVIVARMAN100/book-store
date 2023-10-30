import express from "express"
import dashboardroutes from "../modules/dashboard/dashboardroutes.js"


const router = express.Router();

export default [dashboardroutes,router];