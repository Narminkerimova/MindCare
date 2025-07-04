import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import { userRouter } from './src/router/UserRouter.js'
import {doctorRouter} from './src/router/DoctorRouter.js'
import {articleRouter} from './src/router/ArticleRouter.js'
import {quizRouter} from './src/router/QuizRouter.js'
import {patientRouter} from './src/router/PatientRouter.js'
import { centerRouter } from './src/router/CenterRouter.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/user',userRouter)
app.use('/doctor',doctorRouter)
app.use('/article',articleRouter)
app.use('/quiz',quizRouter)
app.use('/patient',patientRouter)
app.use('/center',centerRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(process.env.DB)
.then(()=>console.log("Connected!"))
.catch(()=>console.log("NOT Connected!"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})