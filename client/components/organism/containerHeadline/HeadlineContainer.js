import React,{useState,useEffect} from 'react'

import {data,headline} from '../../../fakeData/HeadlinesData'
import FactoryCards from '../../molecules/newCard/FactoryCard'
import './containerHeadline.css'

const ContnainerHeadline = () => {

    const [headlineMainData,setHeadlineMainData] = useState([])
    const [headlineSecondary,setHeadlineSecondary] = useState([])
    
    useEffect(()=>{
        setHeadlineMainData([headline[0]])
        setHeadlineSecondary([headline[1]])
    },[])

    return(
        <>
            <div className = "container-headline-wrapper">
                <div className = "container-headline">
                    <div className = "main-headline">

                        {headlineMainData.map(data => <FactoryCards key={data.id} type="headline" data={data} />)}

                        {headlineSecondary.map((data, index) => <FactoryCards key={data.id} type="normal" data={data} />)}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContnainerHeadline