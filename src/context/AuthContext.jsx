import { createContext } from "react";

export const AuthProvider = createContext();

const user = true;

const userInfo = {
    user
}

export function AuthContext({ children }) {
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    )
}