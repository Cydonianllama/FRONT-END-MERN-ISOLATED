import React from 'react'

const RootLayout = ({children}) => {
    return(
        <>
            <nav>
                the navegator
            </nav>
            {children}
            <footer>
                the footer
            </footer>
        </>
    )
}

export default RootLayout