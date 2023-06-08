import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.configue";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

      useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('current User', currentUser)
        setLoading(false)
       });
       return () => {
        unsubscribe()
       }
      },[])

     const crateUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
     const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }
    const authInfo = {
        user,
        loading,
        crateUser,
        signIn,
        logOut,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;