import homeController from "../contoller/homepage.js";
import express from 'express'
import roomRoutes from './room.js'

let router=express.Router()
//route for home page
router.get('/',homeController.homePage)
//route for room data pages

router.use('/room',roomRoutes)

export default router