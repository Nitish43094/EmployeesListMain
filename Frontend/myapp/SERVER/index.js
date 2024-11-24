const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 4000

const adminRoutes = require('./routes/Admin')
const employeeRoutes = require('./routes/Employee')

const dbConnect = require('./config/database')
const cookieParser = require('cookie-parser')

const core = 
app.use(cors());
dbConnect();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:true
    })
)

app.use("/api/v1/admin",adminRoutes)
app.use('/api/v1/employees',employeeRoutes)

app.get("/",(req,res) =>{
    return res.json({
        success:true,
        message: 'Your Server is Up and Running....'
    })
})

app.listen(PORT ,(req,res)=>{
    console.log("App is Running at.....",PORT)
})