import React from 'react'
import { Link } from "react-router-dom"
import {PrivateLink,PublicLink} from '../Links';

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                Kieppu
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-green-900 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Etusivu
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/react-liidimanageri/about" 
                        className="text-green-900 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Tietoa meistä
                    </Link>
                </li>
                <li>
                    <PublicLink 
                        to="/login" 
                        className="text-green-900 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Kirjaudu sisään
                    </PublicLink>
                </li>
                <li>
                    <PublicLink 
                        to="/signup" 
                        className="text-green-900 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Rekisteröidy 
                    </PublicLink>
                </li>
                <li>
                    <PrivateLink 
                        to="/admin" 
                        className="text-green-900 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Pääkäyttäjän sivu 
                    </PrivateLink>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu