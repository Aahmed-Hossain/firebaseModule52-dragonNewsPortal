import { createContext, useEffect, useState } from "react";
import app from './../Firebase/Firebase.config';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// create user
    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }
    // to login
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // to logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // to set obserber
    useEffect(() =>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user in the onAuthStateChanged', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user,createUser,logOut,logIn,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;