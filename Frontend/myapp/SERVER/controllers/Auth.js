const Admin = require('../models/Admin')
const Employee = require("../models/Employee")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.isAdminsignup = async (req, res) => {
    try {
        const { email, name, password, confirmPassword } = req.body;

        if (!email || !name || !password || !confirmPassword) {
            return res.status(403).json({
                success: false,
                message: "All fields Are Required",
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password are not Same",
            })
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin is Already Registered",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
        })

        return res.status(200).json({
            success: true,
            message: "Admin is Registered Successfully",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Somthing error to registered Admin",
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All Fields Required",
            })
        }
        const user = await Admin.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registerd, Please signup first",
            })
        }
        if (await bcrypt.compare(password, user.password)) {
            const paylod = {
                email: user.email,
                id: user._id,
                name: user.name,
            }
            const token = jwt.sign(paylod, process.env.JWT_SECRET, {
                expiresIn:"2h",
            })
            user.token = token;
            user.password = undefined;

            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in successfully"
            })
        }else{
            return res.status(401).json({
                success:false,
                message:"Password is Incorrect",
            })
        }

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Somthing error to Login Admin",
        })
    }
}

exports.isEmployesignup = async (req, res) => {
    try {
        const { email, name, phone_no,designation,gender,course } = req.body;

        if (!email || !name || !phone_no || !designation || !gender || !course ) {
            return res.status(403).json({
                success: false,
                message: "All fields Are Required",
            })
        }

        const existingUser = await Employee.findOne({ email:email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Employee is Already Registered",
            })
        }
        const user = await Employee.create({
            email, 
            name, 
            phone_no,
            designation,
            gender,
            course,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
        })

        return res.status(200).json({
            success: true,
            user,
            message: "Employe is Registered Successfully",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Somthing error to registered Admin",
        })
    }
}

exports.updateEmployeData = async(req,res)=>{
    try{
        const { email, name, phone_no,designation,gender,course } = req.body;
        console.log("The Email is .....",email)
        if (!email || !name || !phone_no || !designation || !gender || !course) {
            return res.status(403).json({
                success: false,
                message: "All fields Are Required",
            })
        }
        const user = await Employee.findOne({ email });
        user.name = name;
        user.email= email;
        user.phone_no = phone_no;
        user.designation = designation;
        user.gender = gender;
        user.course = course;
        user.image = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;
        await user.save();
        return res.status(200).json({
            success: true,
            user,
            message: "Profile Update Seuucessfully",
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Somthing error to Updating Profile",
        })
    }
}

exports.deleteEmployeeAccount = async(req,res) =>{
    try{
        const {email} = req.body;
        const userDetails = await Employee.findOne({email})
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User Not Find",
            })
        }
        await Employee.findOneAndDelete({email:email})
        return res.status(200).json({
            success: true,
            message: "Profile Deleted Seuucessfully",
            userDetails,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Somthing error"
        })
    }
}

exports.getAllEmployess = async (req,res) =>{
    try{
        const alldata =await Employee.find();
        return res.status(200).json({
            success:true,
            data:alldata,
            message:"All Data found"
        })
    }catch(error){
        return res.status(405).json({
            success:false,
            message:"Somthing Errror",
        })
    }
}