
import express from 'express';
import db_connection from './utils/db.js'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routers from './routes/routes.js';
import router from './routes/auth.js';


dotenv.config();

const app = express() // NOTE: Assigning all features of express to app variable;

db_connection()

app.use(express.json())
// app.use(bodyParser.json());
app.use(cors())
// Informing server about all routers
app.use('/api/auth', router);
app.use('/api', routers)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})











