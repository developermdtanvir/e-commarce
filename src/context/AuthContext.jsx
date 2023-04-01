import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { createContext } from "react";
import { app } from "../../firebase.config";


export const AuthProvider = createContext();

const user = true;

const auth = getAuth(app);

const loginWithEmailPassword = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)

}


const userInfo = {
    user,
    loginWithEmailPassword
}



export function AuthContext({ children }) {
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    )
}