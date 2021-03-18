import React from 'react'
import Nav from '../components/organism/Nav/Nav';
import Footer from '../components/organism/Footer/Footer.js';

const Layout = ({children}) =>{

    return(<>
        <Nav/>
        {children}
        <Footer/>
    </>)

}

export default Layout;