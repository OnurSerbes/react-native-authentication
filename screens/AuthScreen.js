
import { useContext, useState } from "react"
import { Alert } from "react-native"
import AuthForm from "../components/AuthForm"
import { AuthContext } from "../store/auth-context"
import { createUser, login } from "../util/auth"

function AuthScreen(){

    //you can add loading screens with using isAuthenticating stete
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext)

    async function signupHandler({email, password}){  
        setIsAuthenticating(true)
        try{
            const token = await createUser(email, password)
            authCtx.authenticate(token)

        }catch(error){
            Alert.alert('Failed to create user!', 'Could not create user please check your input or try again later')
            console.log(error)        
            setIsAuthenticating(false) 
        }
    }

    async function loginHandler({email, password}){
        setIsAuthenticating(true)
        try{
            const token = await login(email, password)
            authCtx.authenticate(token)

        }catch(error){
            Alert.alert('Failed to login!', 'Could not enter the network please check your input or try again later')
            console.log(error)   
            setIsAuthenticating(false)      
        }
    }

    return <AuthForm onSubmitSignup={signupHandler} onSubmitLogin={loginHandler}/> 
}

export default AuthScreen

