import "dotenv/config"
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/productRoute.js';

const app = express();
const port = 3000;

//middleware
app.use(express.json())

//DB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected to DB");
})
.catch((error) => {
    console.log("connection failed", {message: error.message});
});

// router
app.use("/api/product", router)

app.listen(port, () => {
    console.log(`listening on ${port}`);
})