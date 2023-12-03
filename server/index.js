import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import router from "./Routes/user.routes.js";
import path from "path";
dotenv.config();

var port = 3030;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v1/login",router);
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=>{
    console.log("hello running");
});

app.listen(port,()=>{
    console.log(`server running successfully on ${port}`)
});