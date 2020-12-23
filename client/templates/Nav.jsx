import React from 'react'
import Profile from '../components/Profile'

function Logo(){
    return(
        <>
            <div className ="logo-container">
                LOGO
            </div>
        </>
    )
}

function LinksConatiner(){
    return (
        <>
            <div className ="links-container">

            </div>
        </>
    )
}

function Nav(){
    return(
        <>
            <div class = "nav-container">
                <Logo/>
                <LinksConatiner/>
                <Profile/>
            </div>
        </>
    )
}
export default Nav;