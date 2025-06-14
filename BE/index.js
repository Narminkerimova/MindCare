import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import { userRouter } from './src/router/UserRouter.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/user',userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(process.env.DB)
.then(()=>console.log("Connected!"))
.catch(()=>console.log("NOT Connected!"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})