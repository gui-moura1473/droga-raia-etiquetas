import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
        const [filial, setFilial] = useState('');
    return (
        <AuthContext.Provider 
            value={{
                authenticated: !!filial,
                filial,
                setFilial
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}