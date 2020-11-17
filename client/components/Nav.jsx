import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
class Nav extends React.Component {
    render(){
        return(
            <div>   
                <nav className="nav-main">
                    <div className="hamburger">
                        <MenuIcon/>
                    </div>
                    <div className="logo-nav-main">
                        logo
                    </div>
                    <div className="search-nav">
                        <input type="text" placeholder="buscar" name="buscar-nav"/>
                        <SearchSharpIcon fontSize='inherit' htmlColor="white" className= "icon-search-nav"/>
                    </div>
                    <div className="switchtheme">
                        <ToggleOffIcon fontSize='large'/>
                    </div>
                    <div className="user-nav">
                        <div className="border-container-user-nav">
                            <div className="container-user-nav">
                                <div className="avatar-nav">
                                    USERI
                            </div>
                                <div className="options-user-nav">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links-nav">
                        <Link class="link" to='/home'>Home</Link>
                        <Link class="link" to='/home/nacionales'>Nacionales</Link>
                        <Link class="link" to='/home/internacionales'>Internacionales</Link>
                        <Link class="link" to='/home/politica'>Politica</Link>
                        <Link class="link" to='/home/espectaculos'>Espectaculos</Link>
                        <Link class="link" to='/home/variados'>Variados</Link>
                        <Link class="link" to='/home/deportes'>Deportes</Link>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Nav;