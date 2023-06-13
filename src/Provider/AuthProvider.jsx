import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.configue";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         console.log('current User', currentUser)
         //   get and set token
         if (currentUser) {
            axios.post('https://sports-academy-server-evrahim904.vercel.app/jwt',{email : currentUser.email})
            .then(data =>{
               localStorage.setItem('access-token', data.data.token)
               setLoading(false)
            })
         }
         else{
            localStorage.removeItem('access-token')
         }
      });
      return () => {
         unsubscribe()
      }
   }, [])

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }
   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
      })
   }
   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }
   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      signInWithGoogle,
      updateUserProfile

   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;