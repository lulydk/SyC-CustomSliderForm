import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, NextOrObserver, User, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, doc, setDoc } from "firebase/firestore";
import { getFirebaseConfig } from './firebaseConfig';

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const db = getFirestore(app);

export const signInUser = async (email: string, password: string) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        if (err instanceof Error)
            alert(err.message);
        return;
    }
}

export const userStateListener = (callback:NextOrObserver<User>) => {
    return onAuthStateChanged(auth, callback)
}

export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error(err);
        if (err instanceof Error)
            alert(err.message);
    }
}

export const registerUser = async (email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          authProvider: "local",
          email
        });
        return res;
    } catch (err) {
        console.error(err);
        if (err instanceof Error)
            alert(err.message);
        return;
    }
}
 
const googleProvider = new GoogleAuthProvider();
export const continueWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }
    } catch (err) {
        console.error(err);
        if (err instanceof Error)
            alert(err.message);
    }
};

export const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("El correo para resetear contraseña ha sido enviado.");
    } catch (err) {
        console.error(err);
        if (err instanceof Error)
            alert(err.message);
    }
};

export { auth, db };