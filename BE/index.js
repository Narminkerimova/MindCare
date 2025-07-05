import express from 'express'
import cors from "cors"
import mongoose from "mongoose"
import userRouter  from './src/router/UserRouter.js'
import {doctorRouter} from './src/router/DoctorRouter.js'
import {articleRouter} from './src/router/ArticleRouter.js'
import {quizRouter} from './src/router/QuizRouter.js'
import {patientRouter} from './src/router/PatientRouter.js'
import { centerRouter } from './src/router/CenterRouter.js'
import dotenv from 'dotenv'

dotenv.config();

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

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)

// app.post('/api/ask', async (req, res) => {
//   const { question } = req.body
//   if (!question) return res.status(400).json({ error: "Sual daxil edilməyib" })

//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content:
//             "Sən psixoloji mövzuda dostcasına, sadə və aydın cavab verən yardımçı chatbotasan. İstifadəçiyə platformada testlərin olduğunu xatırladır və onları sınamağı tövsiyə edirsən.",
//         },
//         { role: "user", content: question },
//       ],
//       max_tokens: 300,
//     })

//     const answer = response.data.choices[0].message.content
//     res.json({ answer })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: "AI xidməti ilə əlaqə zamanı xəta" })
//   }
// })

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("NOT Connected!"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
