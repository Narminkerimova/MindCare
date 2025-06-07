import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect('mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/')
.then(()=>console.log("Connected!"))
.catch(()=>console.log("NOT Connected!"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})