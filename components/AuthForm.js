import { useState } from "react"
import { View, TextInput, StyleSheet } from "react-native"
import CustomButton from "../components/CustomButton"


function AuthForm({onSubmitSignup, onSubmitLogin}){

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    function SubmitHandlerSignin(){
        onSubmitSignup({
            email: enteredEmail,
            password: enteredPassword
        })
    }

    function SubmitHandlerLogin(){
        onSubmitLogin({
            email: enteredEmail,
            password: enteredPassword
        })
    }
 
    return(
        <View style={styles.generalContainer}>
        <View style={styles.subContainer}>
           
           <TextInput style={styles.input} placeholder="Email" keyboardType='email-address' onChangeText={(text)=>setEnteredEmail(text)}/>
           <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>setEnteredPassword(text)} />

           <View style={styles.buttonContainer}>
             <CustomButton title='Login' onPress={SubmitHandlerLogin}/>
             <CustomButton title='Signup' onPress={SubmitHandlerSignin}/>
           </View>

        </View>
     </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    generalContainer:{
        flex:1,
        justifyContent: 'center',
    },
    subContainer: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        elevation: 5,
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderColor: 'darkblue',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
})