import React from 'react'
import {Link} from 'react-router-dom'
const FormLogin = () => {
    return(
        <form>
            <input type = "text" placeholder = "username" />
            <input type = "password" placeholder = "password" />
            <button type  ="btn">
                login
            </button>
            <Link to = "/register">
                Register
            </Link>
        </form>
    )
}
export default FormLogin