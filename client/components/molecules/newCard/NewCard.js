import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'
const NewCard = ({data}) => {
    const {title} = data
    return(
        <>
            <div className = "new-card-wrapper">
                <div className = "new-card">
                    <Link to="register">
                        <div className="new-card-image-container">
                            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                        <div className="new-card-info">
                            <h3>{title}</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NewCard