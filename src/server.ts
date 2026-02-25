import express from "express";
import cors, {CorsOptions} from "cors";
import config from "@/config"

// Init express app
const app = express();

// Cors options
const corsOptions: CorsOptions = {
    origin(origin, callBack) {
        if (config.NODE_ENV === "development" || !origin || config.WHITELISTED_ORIGIN.includes(origin)) {
            callBack(null, true)
        } else {
            callBack(new Error(`CORS Error: ${origin} is not allowed by CORS`), false)
            console.log(`CORS Error: ${origin} is not allowed by CORS`)
        }
    }
}

// Setup Cors
app.use(cors(corsOptions))


// Root route
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Server health is ok!"
    })
})


// Listen the app
app.listen(config.PORT, () => {
    console.log(`Server running on : http://localhost:${config.PORT}`)
})