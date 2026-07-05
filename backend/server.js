import "dotenv/config"
import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoute.js';
import cors from 'cors';
import userRouter from "./routes/userRoute.js";

const app = express();
const port = 3000;

//middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}));

//DB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected to DB");
})
.catch((error) => {
    console.log("connection failed", {message: error.message});
});

// router
app.use("/api/products", productRouter)
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`listening on ${port}`);
})