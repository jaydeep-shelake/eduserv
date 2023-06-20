import * as yup from 'yup';

export const getAuthSchema =(btnText)=>{
    const isName=btnText==="Register"
        const signUpschema = yup.object().shape({
            ...(isName&&{name:yup.string().required("Please Enter your password")}),
            email:yup.string("Please Enter your Email").required("Please Enter your Email").email("Plase Enter valid Email"),
            password:yup.string().required("Please Enter your password")
            .test(
                "regex",
                "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
              val => {
                let regExp = new RegExp(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
                )
                return regExp.test(val);
           })   
        
        })
        return signUpschema
}
 