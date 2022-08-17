# react-native-authentication
"This is a useful authentication project that you can adapt to your own backend."

Firebase is used as backend in this project. 
It is prepared in a way that can help people who have their own backend to use it instead of using the Firebase SDK. 
Therefore, basic API interaction is taken as an example instead of simple SDK shortcuts.

I defined screen transitions with conditional rendering using the token that came through the API in the application.

Important third party libraries used in this project:

 - Axios https://github.com/qiangmao/axios
 
 All API interactions in the project were developed with Axios over RESTAPI using POST request.
 
 - AsyncStorage https://github.com/react-native-async-storage/async-storage
 
 In Authentication applications, even if users close the application, their logins must remain in memory. 
 That's why I integrated a local database into the project with using AsyncStorage.

 - ReactContext https://reactjs.org/docs/context.html

 In the auth-context page, I used React-Context so that the tokens and functions can be accessed with app-wide state management
 
 
 
 




