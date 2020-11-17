import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return(
            <div className ="footer">
                <div className = "footer-container-nav">
                    <Link className="link-footer" to = '/home/contacto'>Contactanos</Link>
                    <Link className="link-footer" to='/home/frecuentes'>Frecuentes</Link>
                    <Link className="link-footer" to='/home/somos'>Quienes Somos ? </Link>
                    <Link className="link-footer" to='/home/reclamaciones'>Reclamaciones</Link>
                </div>
                <h2>@TODOS LOS DERECHOS RESERVADOS A CYDONIAN CORP</h2>
            </div>
        )
    }
}
export default Footer;