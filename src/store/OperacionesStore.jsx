import { create } from "zustand";
import { v } from "../styles/variables";

export const useOperacionesStore = create((set, get) => ({
    tituloBtnDes: "Categorias ingresos",
    colorCategoria: () => v.colorIngresos,
    bgCategoria: () => v.colorbgingresos,
    setTipo: (p) => {
        set({
            tituloBtnDes: p.text,
            colorCategoria: p.color,
            bgCategoria: p.bgcolor
        })

    }
}))
