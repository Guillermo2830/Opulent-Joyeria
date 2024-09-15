import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-lg font-normal">
          <ul className="flex items-center gap-3">
            <li className="font-bold text-lg">
               <NavLink to='/'>
                Opulent
               </NavLink>
            </li>
            <li>
                <NavLink to='/todo' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Todo
                </NavLink>
            </li>
            <li>
                <NavLink to='/anillos' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Anillos
                </NavLink>
            </li>
            <li>
                <NavLink to='/cadenas' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Cadenas
                </NavLink>
            </li>
            <li>
                <NavLink to='/pulseras' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Pulseras
                </NavLink>
            </li>
            <li>
                <NavLink to='/reloj' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Relojes
                </NavLink>
            </li>
            <li>
                <NavLink to='/aretes' className={({ isActive}) => isActive ? activeStyle : undefined }>
                    Aretes
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
            <div className="flex items-center">
                   <ShoppingCartIcon className="w-6 h-6 text-black" /> 
                   <span className="ml-1">{context.count}</span>
            </div>
            </li>

          </ul>
        </nav>
    )
}

export default Navbar;