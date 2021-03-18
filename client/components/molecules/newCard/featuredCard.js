import React from 'react'
import {Link} from 'react-router-dom'
import './featured.css'
const FeaturedCard = ({data}) => {
    return(
        <>
            <div className = "featured-card-wrapper">
                <div className = "featured-card">
                    <div className='featured-card-header'>
                        <Link to="/login" >{data.title}</Link>
                        <small>{data.idAuthor}</small>
                    </div>
                    <div className="featured-card-image-container">
                        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeaturedCard