import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render(){
        return(
            <div>   
                <nav>
                    <div className="logo">
                        <Link to='/'>Home</Link>
                        <Link to='/Nacionales'>Nacionales</Link>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Nav;