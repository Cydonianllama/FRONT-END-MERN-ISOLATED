import React,{useState,useEffect} from 'react'
import FactoryCards from '../../molecules/newCard/FactoryCard'

import {data} from '../../../fakeData/NewData'

const NewsFeatured = () => {
    
    const [FeaturedNews,setFeaturedNews] = useState([])

    useEffect(()=>{
        setFeaturedNews(data)
    },[])
    
    return(
        <>
            <div className = "new-featured-header">
                <h2>Featured :</h2>
            </div>
            {FeaturedNews.map(data => <FactoryCards type='featured' key = {data.id} data = {data}/>)}
        </>
    )
}
export default NewsFeatured;