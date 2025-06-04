import { supabase } from "./supabase.config";
import Swal from "sweetalert2";

export async function InsertarCategorias(p) {
    try {
        const { data, error } = await supabase.from('categorias').insert(p).select();
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al insertar la categoría',
                text: 'Ya existe una categoría con' + p.descripcion,
            });            
        }
        if (data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Categoría insertada correctamente',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        alert(error.error_description || error.message + ' InsertarCategorias');
    }
}

export async function MostrarCategorias(p) {
    try {
        const { data } = await supabase
        .from('categorias')
        .select()
        .eq("idUsuario", p.idusuario)
        .eq("tipo", p.tipo)
        .order("id", { ascending: false });
        
        return data;
    } catch (error) {
        alert(error.error_description || error.message + ' MostrarCategorias');
    }
}

export async function EliminarCategorias(p) {
    try {
        const { error } = await supabase
        .from('categorias')
        .delete()
        .eq('idusuario', p.idusuario)
        .eq('id', p.id);
        if (error) {
            alert("Error al eliminar la categoría: " + error.message);
        }
    } catch (error) {
        alert(error.error_description || error.message + ' EliminarCategorias');
    }
}

export async function ActualizarCategorias(p) {
    try {
        const { error } = await supabase
        .from('categorias')
        .update(p)
        .eq('idusuario', p.idusuario)
        .eq('id', p.id);
        if (error) {
            alert("Error al actualizar la categoría: " + error.message);
        }
    } catch (error) {
        alert(error.error_description || error.message + ' ActualizarCategorias');
    }
}