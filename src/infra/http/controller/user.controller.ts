import { Request, Response } from "express"
import { GetUsersUsecase } from "../../../core/usecase/get-users.usecase";
import { UserInMemororyRepository } from "../../database/in-memory/user-in-memory.repository";

export class UserController{
    static async getUsers(
        request: Request,
        response: Response,
    ){
        const userRepository = new UserInMemororyRepository()

        try{
            const getUsersUsecase = new GetUsersUsecase(userRepository)

            const users = await getUsersUsecase.execute()

            return response.status(200).json(users)

        }catch(err){
            return response.status(400).json(err)
        }
    }
}