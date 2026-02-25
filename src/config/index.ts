import dotenv from "dotenv";

dotenv.config();


const config = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV,
    WHITELISTED_ORIGIN: ["http://example.com"]
}

export default config;
