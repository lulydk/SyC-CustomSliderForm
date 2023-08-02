import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, signOutUser, userStateListener } from "../firebase/firebase";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { DocumentData, DocumentReference, doc } from "firebase/firestore";

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  userDataRef: {} as DocumentReference<DocumentData> | null,
  setCurrentUser: (_user:User) => {},
  setUserDataRef: (_dataRef:DocumentReference<DocumentData>) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }: Props) => {
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState<User | null>(user==undefined ? null:user)
  const [userDataRef, setUserDataRef] = useState<DocumentReference<DocumentData> | null>(currentUser==null ? null:doc(db, 'users', currentUser.uid))
  
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = userStateListener((c_user) => {
      if (c_user) {
        setCurrentUser(c_user)
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  const signOut = () => {
    signOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser, 
    userDataRef,
    setCurrentUser,
    setUserDataRef,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
