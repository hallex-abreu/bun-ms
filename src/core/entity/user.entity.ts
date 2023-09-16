export interface IUserEntity{
    name: string
    email: string
}

export class UserEntity{
    private props: IUserEntity

    get data(){
        return this.props
    }

    constructor(props: IUserEntity){
        this.props = props
    }
}