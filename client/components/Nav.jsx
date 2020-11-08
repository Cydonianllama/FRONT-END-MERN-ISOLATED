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
                    <div className = "links-nav">
                        <Link class="link" to='/'>Home</Link>
                        <Link class="link"to='/Nacionales'>Nacionales</Link>
                        <Link class="link"to='/Internacionales'>Internacionales</Link>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Nav;