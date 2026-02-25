import express from "express";
import config from "@/config"


// Init express app
const app = express();


// Listen the app
app.listen(config.PORT, ()=>{
    console.log(`Server running on : http://localhost:${config.PORT}`)
})