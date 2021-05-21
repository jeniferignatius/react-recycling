import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="border-b p-4 flex justify-between items-center" >
            <Link to='/' className="font-bold col-sm-12 btn btn-info bg-red">
                Recycling Center
            </Link>
            <Navigation />
            
        </header>
    )
}

export default Header