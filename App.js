import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import { useContext, useEffect, useState } from 'react';
import AuthContextProvider, { AuthContext } from './store/auth-context';

import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= "AuthScreen" component={AuthScreen} options={{
      title: "Auth Screen"}}/>
    </Stack.Navigator>
  )
}

function AuthenticatedStack(){
  const authCtx = useContext(AuthContext)
  return(
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
      headerTitle: "Welcome Screen",
      headerRight: ()=>(
          <IconButton name='logout' size={30} color='darkblue' onPress={authCtx.logout}/>
      )}}/>
    </Stack.Navigator>
  )
}

function Navigation(){

  const authCtx = useContext(AuthContext)

  return(
    //conditional rendering
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack/>}
      {authCtx.isAuthenticated && <AuthenticatedStack/>}
    </NavigationContainer>
  )
}

function Root(){
  return <Navigation/>
}

export default function App() {
  return (
     <>
       <StatusBar style="auto" />
       <AuthContextProvider>
          <Root/>
       </AuthContextProvider>
     </>
  );
}
