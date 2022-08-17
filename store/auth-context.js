import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//we will use this appwide context in different part of the app
export const AuthContext = createContext({
    //default assignments
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
})

function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState();

    //use effect will help us to find changes and get the token with AsyncStorage
    useEffect(()=>{
        async function fetchToken(){
            const storedToken = await AsyncStorage.getItem('token')
            //we need to check if the storedToken is truthy for set the token
            if(storedToken){
                setAuthToken(storedToken)
            }
        }
        //then use the fetchToken in useEffect
        fetchToken()
    },[])

    //we will hold the token in authenticate function to make to user stay loged in or loged out
    function authenticate(token){
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
    }

    //logout will reset the token 
    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token')
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider