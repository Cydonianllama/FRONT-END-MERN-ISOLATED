import React,{useState,useEffect} from 'react'
import './mainNews.css'
import {data} from '../../../fakeData/NewData'
import FactoryCards from '../../molecules/newCard/FactoryCard'

const MainNews = () => {
    
    const [mainNews,setMainNews] = useState([])
    const [heaedline,setHeadline] = useState({})

    useEffect(()=>{
        setMainNews(data)
    },[])

    return (
        <>
            <div className = "main-news-header">
                <h2>Main news:</h2>
            </div>
            <div className = "main-news-content">
                {mainNews.map((data) => <FactoryCards type="normal" key={data.id} data={data} />)}
            </div>
        </>
    )
}

export default MainNews