import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.configue";


export const AuthContext = createContext(null)
const auth = getAuth(app);

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
     const singIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }
    const authInfo = {
        user,
        loading,
        crateUser,
        singIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;