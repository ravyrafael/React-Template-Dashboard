import {FaChrome, FaUser} from 'react-icons/fa';
import Dashboard from '../views/Dashboard';
import Funcionarios from '../views/Funcionarios';
import Clientes from '../views/Clientes';
import Cidades from '../views/Cidades';
import Cidades2 from '../views/Cidades2';
 export const routes = 
 [
    {
    path: "/",
    name: "Dashboard",
    icone: FaChrome,
    component:Dashboard
    },
    
    {
        path: "/Clientes",
    name: "Clientes",
    icone: FaUser,
    component: Clientes
    },
    {
        path: "/Cidades2",
    name: "Cidades2",
    icone: FaUser,
    component: Cidades2
    },
    {
        path: "/Funcionarios",
    name: "Funcionarios",
    icone: FaUser,
    component:Funcionarios
    },
    {
        path: "/Cidades",
    name: "Cidades",
    icone: FaUser,
    component:Cidades
    }
]
