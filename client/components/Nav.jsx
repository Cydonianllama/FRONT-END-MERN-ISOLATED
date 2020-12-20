import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function showlogin(){
    return (
        <div className = "show-login">
            <button id = "btn-register-home" >register</button>
        </div>
    )
}
function showProfileUser(){
    return (
        <div className="border-container-user-nav">
            <div className="container-user-nav">
                <div className="avatar-nav">
                    USERI
                            </div>
                <div className="options-user-nav">

                </div>
            </div>
        </div>
    )
}
function verifyStateUser(){
    //process to verify
    return true;
}
function showComponentUserNav() {
    let isLogged = verifyStateUser() ;
    if (isLogged == true) return showProfileUser();
    else return showlogin()
}
function Nav()  {
    
    let componentToShow1 = showComponentUserNav();

    return (
        <div>
            <nav className="nav-main">
                <div className="hamburger">
                    <MenuIcon />
                </div>
                <div className="logo-nav-main">
                    logo
                    </div>
                <div className="search-nav">
                    <input type="text" placeholder="buscar" name="buscar-nav" />
                    <SearchSharpIcon fontSize='inherit' htmlColor="white" className="icon-search-nav" />
                </div>
                <div className="switchtheme">
                    <ToggleOffIcon fontSize='large' />
                </div>
                <div className="user-nav">
                    {componentToShow1}
                </div>
                <div className="links-nav">
                    <Link class="link" to='/home'>Home</Link>
                    <Link class="link" to='/home/nacionales'>Nacionales</Link>
                    <Link class="link" to='/home/internacionales'>Internacionales</Link>
                    <Link class="link" to='/home/politica'>Politica</Link>
                    <Link class="link" to='/home/espectaculos'>Espectaculos</Link>
                    <Link class="link" to='/home/variedades'>Variedades</Link>
                    <Link class="link" to='/home/deportes'>Deportes</Link>
                </div>
            </nav>
        </div>
    )   
    
}

export default Nav;