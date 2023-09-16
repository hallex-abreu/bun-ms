import { IUserEntity } from "../entity/user.entity";

export interface UserRepository{
    getUsers():Promise<IUserEntity[] | null>
}