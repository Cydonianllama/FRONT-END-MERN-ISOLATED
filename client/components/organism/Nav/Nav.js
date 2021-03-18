import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

import RegisterCard from '../../molecules/RegisterCard/RegisterCard'
import ProfileCard from '../../molecules/ProfileCard/ProfileCard'

const Nav = () => {

    return (
        <div>
            <RegisterCard/>
            <nav className="nav-main">
                <div className="links-nav">
                    <Link to='/home'>Home</Link>
                    <Link to='/home/nacionales'>Nacionales</Link>
                    <Link to='/home/internacionales'>Internacionales</Link>
                    <Link to='/home/politica'>Politica</Link>
                    <Link to='/home/espectaculos'>Espectaculos</Link>
                    <Link to='/home/variedades'>Variedades</Link>
                    <Link to='/home/deportes'>Deportes</Link>
                </div>
            </nav>
        </div>
    )   
    
}

export default Nav;