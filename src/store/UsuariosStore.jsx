import { create } from "zustand";
import { ActualizarTemaMonedaUser, MostrarUsuarios } from "../supabase/crudUsuario";

export const useUsuariosStore = create((set, get) => ({
    datausuarios: [],
    mostrarUsuarios: async () => {
        const response = await MostrarUsuarios();
        set({ datausuarios: response });
        if (response) {
            return response
        } else {
            return [];
        }
    },

    editarTemaMonedaUser: async (p) => {
        await ActualizarTemaMonedaUser (p);
    }

}));