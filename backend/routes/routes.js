import express from 'express'
import {CreateTask} from '../controller/TaskController.js'
import { CreateCategory } from '../controller/CategoryController.js'

const routers = express.Router()


routers.post('/task', CreateTask)
routers.post('/category', CreateCategory)

// router for get all employess
// routers.get('/task', )

// routers.put('/task/:id', )

// routers.get('/task/:id', )

// routers.delete('/task/:id', )


export default routers

