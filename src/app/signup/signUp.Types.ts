export interface signUpSchemaType{
 name: string,
    email:string,
    password:string,
    rePassword:string,
    phone:string

}

export interface signUpResponseType{
    message:string,
    user:userSignUpType,
    token:string

}
export interface userSignUpType{
        name: string,
        email: string,
        role: string
}

export interface signUpErrorType{
        statusMsg:string,
        message:string
}



