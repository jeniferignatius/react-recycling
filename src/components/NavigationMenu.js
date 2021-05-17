import React from 'react'
import { Link } from "react-router-dom"
import {PrivateLink,PublicLink} from '../Links';

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/react-liidimanageri/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <PublicLink 
                        to="/login" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Login
                    </PublicLink>
                </li>
                <li>
                    <PublicLink 
                        to="/signup" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Signup 
                    </PublicLink>
                </li>
                <li>
                    <PrivateLink 
                        to="/admin" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Administraattori 
                    </PrivateLink>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu