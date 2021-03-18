import React from 'react'
import {Link} from 'react-router-dom'
const FormRegister = () => {
    return(
        <form>
            <input type = "text" placeholder = "username" />
            <button type = "button">
                register
            </button>
            <Link to = "login" >login</Link>
        </form>
    )
}
export default FormRegister