import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuarios } from "../supabase/crudUsuario";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session == null) {
                    setUser(null);
                } else {
                    setUser(session?.user.user_metadata);
                    insertarUsuario(session?.user.user_metadata, session?.user.id);
                    console.log("event", event);
                    console.log("session", session);
                }
            }
        );
        return () => {
            authListener.subscription;
        };
    }, []);

    const insertarUsuario = async (dataProvider, idSupabase) => {
        const p = {
            nombres: dataProvider.name,
            foto: dataProvider.picture,
            idauth_supabase: idSupabase,
        };
        
        await InsertarUsuarios(p);
    }



    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const UserAuth = () => {
    return useContext(AuthContext);
};