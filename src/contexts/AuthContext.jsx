import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
        const [filial, setFilial] = useState('');
        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
            const lojaRecuperada = localStorage.getItem('loja');

            if (lojaRecuperada) {
                setFilial(JSON.parse(lojaRecuperada));
            }

            setLoading(false);
        }, [])

    return (
        <AuthContext.Provider 
            value={{
                authenticated: !!filial,
                filial,
                setFilial,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}