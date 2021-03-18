import React from 'react'
import { Link } from 'react-router-dom'
import './headline.css'
const HeadlineCard = ({data}) => {
    return (
        <>
            <div className = "headline-wrapper">
                <div className = "headline-card">
                    <Link to = "/login">
                        <div className = "headline-image-container">
                            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                        </div>
                        <div className = "headline-info">
                            <h3>{data.title}</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeadlineCard