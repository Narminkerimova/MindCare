import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './src/router/UserRouter.js';
import { doctorRouter } from './src/router/DoctorRouter.js';
import { articleRouter } from './src/router/ArticleRouter.js';
import { quizRouter } from './src/router/QuizRouter.js';
import { patientRouter } from './src/router/PatientRouter.js';
import { centerRouter } from './src/router/CenterRouter.js';
import calendarRouter from './src/router/calendarRouter.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use('/user', userRouter);
app.use('/doctor', doctorRouter);
app.use('/article', articleRouter);
app.use('/quiz', quizRouter);
app.use('/patient', patientRouter);
app.use('/center', centerRouter);

app.use('/api/calendar', calendarRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose
    .connect(process.env.DB) 
    .then(() => console.log('MongoDB-yə qoşuldu!'))
    .catch((err) => console.error('MongoDB-yə qoşularkən xəta!', err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
