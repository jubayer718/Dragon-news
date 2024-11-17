import { createContext, useEffect, useInsertionEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  // console.log(user)
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
  }
  const updateUser = (update) => {
    updateProfile(auth.currentUser,update)
  }

  const userLogin = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUser,
  }
  
  
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
     setLoading(false)
    });
    return () => {
      unsubscribe()
    }
  },[])
  return (
   
    <AuthContext.Provider value={authInfo}>{ children}</AuthContext.Provider>
   
  );
};

export default AuthProvider;