import React from 'react'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

function Layout(props){
        return(
            <>
                <Nav/>
                {props.children}
                <Footer/>
            </>
        )
}

export default Layout;