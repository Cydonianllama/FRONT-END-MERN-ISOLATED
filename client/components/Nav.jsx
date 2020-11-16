import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render(){
        return(
            <div >   
                <nav className="nav-main">
                    <div className="logo-nav">
                        Logo
                    </div>
                    <div className="search-nav">
                        <input type="text" placeholder="buscar" name="buscar-nav"/>
                    </div>
                    <div className = "links-nav">
                        <Link class="link" to='/home'>Home</Link>
                        <Link class="link"to='/home/nacionales'>Nacionales</Link>
                        <Link class="link"to='/home/internacionales'>Internacionales</Link>
                    </div>
                    <div className="user-nav">
                        <div className="avatar">
                            USERI
                        </div>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Nav;