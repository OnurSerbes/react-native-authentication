import axios from "axios";

const API_KEY = 'AIzaSyCQe5auqmO9V35RINgRk9AsFp4Ch5bvriU'

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  
    console.log(response.data);

    //we will get the token for functional usage
    const token = response.data.idToken
    return token

  }

//creating the user must be a post request
export function createUser(email, password) {
    return authenticate('signUp', email, password);
    
  }
  
  export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
  }