import { UserRepository } from "../repository/user.repository";


export class GetUsersUsecase{
    constructor(private readonly userRepository: UserRepository){}

    async execute(){
        const users = await this.userRepository.getUsers()

        if(!users) 
            throw "USER_NOT_FOUND"

        return users
    }
}