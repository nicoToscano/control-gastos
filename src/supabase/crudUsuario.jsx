import { supabase } from "./supabase.config";
import { ObtenerIdAuthSupabase } from "./globalSupabase";
import Swal from "sweetalert2";
import cerdo from "../assets/logocerdo.png";

export const InsertarUsuarios = async (p) => {
    try {
        const { data } = await supabase.from('usuarios').insert(p).select();
        return data;
    } catch (error) {
    }
}

export const MostrarUsuarios = async () => {
    try {
        const idAuthSupabase = await ObtenerIdAuthSupabase();
        const { error, data } = await supabase
            .from('usuarios')
            .select()
            .eq('idauth_supabase', idAuthSupabase);
        if (error) alert("MostrarUsuarios", error);
        if (data) return data[0];

    } catch (error) {
        alert(error.error_description || error.message + 'MostrarUsuarios');
    }
}

export async function ActualizarTemaMonedaUser(p) {

    try {
        const { error } = await supabase.from('usuarios').update(p).eq('id', p.id);
        if (error) {
            Swal.fire({
                showConfirmButton: false,
                imageUrl: cerdo,
                imageWidth: 150,
                imageHeight: 150,
                width: 355,
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        Swal.fire({
            showConfirmButton: false,
            imageUrl: cerdo,
            imageWidth: 150,
            imageHeight: 150,
            width: 355,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        });

    } catch (error) {
        alert(error.error_description || error.message + 'ActualizarTemaMonedaUser');
    }

}