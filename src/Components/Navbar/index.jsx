import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom"



const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-6 px-8 text-lg font-normal bg-green-900">
          <ul className="flex items-center gap-3">
            <li className="font-bold text-lg">
               <NavLink to='/'>
                Opulent
               </NavLink>
            </li>
            <li>
                <NavLink to='/category/todo' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Todo
                </NavLink>
            </li>
            <li>
                <NavLink to='/category/anillos' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Anillos
                </NavLink>
            </li>
            <li>
                <NavLink to='/category/cadenas' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Cadenas
                </NavLink>
            </li>
            <li>
                <NavLink to='/category/esclavas' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Esclavas
                </NavLink>
            </li>
            <li>
                <NavLink to='/category/relojes' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Relojes
                </NavLink>
            </li>
            <li>
                <NavLink to='/category/argollas' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Argollas
                </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-3">
            <li>
                <NavLink to='/my-account' className={({ isActive}) => isActive ? activeStyle : undefined }>
                   Mi cuenta
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-order' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Mi orden
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-orders' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Mis ordenes
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Iniciar
                </NavLink>
            </li>

            <li>
            <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                <div className="flex items-center">
                    <ShoppingBagIcon className="w-6 h-6 text-black" />
                    <span className="ml-1">{context.count}</span>
                </div>
             </NavLink>
            </li>

          </ul>
        </nav>
    )
}

export default Navbar;