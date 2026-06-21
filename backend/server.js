import "dotenv/config"
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/productRoute.js';
import cors from 'cors';

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
app.use("/api/products", router)

app.listen(port, () => {
    console.log(`listening on ${port}`);
})