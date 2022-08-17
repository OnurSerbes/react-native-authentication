import { View, Text, StyleSheet } from "react-native"

function WelcomeScreen(){
    return(
        <View style={styles.generalContainer}>
            <Text style={styles.title}>Welcome to Hub!</Text>
        </View>
    )

}

export default WelcomeScreen

const styles = StyleSheet.create({
    generalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'darkblue'
    }
})