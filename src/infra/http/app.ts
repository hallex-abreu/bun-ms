import Express from "express"
import cors from "cors"

import "dotenv/config"
import { user_router } from "./routes/user.routes"

const app = Express()
app.use(Express.json())
app.use(cors())

app.use([user_router])

export { app }