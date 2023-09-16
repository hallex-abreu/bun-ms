import "dotenv/config"
import { app } from "./app"

const port = process.env.PORT || 8080

app.listen(port, async () => {
  console.log(`Listening on Port ${port}`)
})