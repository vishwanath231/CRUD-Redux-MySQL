import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import userRouter from './routes/userRouter.js';

dotenv.config({ path: 'backend/config/config.env' })

const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;


app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING AN ${process.env.NODE_ENV} MODE PORT ${process.env.PORT}`.bgYellow.bold);
})