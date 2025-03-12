import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import {RiDashboard3Line} from "react-icons/ri"
import {TbPig} from "react-icons/tb"

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];

export const DataDesplegableTipo = [
  {
    text: "Categorias egresos",
    color:  v.colorGastos,
    tipo: "g",
    bgcolor:  v.colorbgGastos,
  },
  {
    text: "Categorias ingresos",
    color: v.colorIngresos,
    tipo: "i",
    bgcolor:  v.colorbgingresos,
  },
];


//data SIDEBAR
export const LinksArray = [
  {
    label: "Inicio",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <MdOutlineAnalytics />,
    to: "/categories",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment />,
    to: "/movements",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics />,
    to: "/information",
  },
  {
    label: "Dashboard",
    icon: <RiDashboard3Line />,
    to: "/dashboard",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/settings",
  },
  {
    label: "Acerca de",
    icon: <TbPig />,
    to: "/about",
  },
];
//temas
export const TemasData = [
  {
    icono: "☀️",
    descripcion: "Light",
   
  },
  {
    icono: "🌙",
    descripcion: "Dark",
    
  },
];