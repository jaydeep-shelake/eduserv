export const getErrorMessage =(error)=>{
    switch(error){
        case "auth/email-already-in-use":
            return "Email Already exits"
        case "auth/user-not-found":
            return "Wrong Email or password"
        default:
           return "Something went wrong"
    }
}

