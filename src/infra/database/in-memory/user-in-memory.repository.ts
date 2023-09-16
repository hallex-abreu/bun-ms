import { IUserEntity } from "../../../core/entity/user.entity";
import { UserRepository } from "../../../core/repository/user.repository";

export class UserInMemororyRepository implements UserRepository{
    private users: IUserEntity[] = [
        {
            name: "Hallex Abreu",
            email: "contato.hallexabreu@gmail.com"
        }
    ]

    async getUsers(): Promise<IUserEntity[] | null> {
        const users = this.users

        if(users.length === 0)
            return null

        return users
    }
}