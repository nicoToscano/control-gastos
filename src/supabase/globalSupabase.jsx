import { supabase } from "./supabase.config";


export const ObtenerIdAuthSupabase = async() => {
    const { data:{session} } = await supabase.auth.getSession();

    if (session) {
        const { user } = session;
        const idAuthSupabase = user.id;
        return idAuthSupabase;        
    }
}

// export async function getSessionId() {
//     const { data: { session } } = await supabase.auth.getSession();

//     if (session) {
//         const { user } = session;
//         const idAuthSupabase = user.id;
//         return idAuthSupabase;
//     }

//     return null;

// }