import Express from "express"
import { UserController } from "../controller/user.controller"
const user_router = Express.Router()

user_router.get(
  "/users",
  UserController.getUsers,
)

export { user_router }