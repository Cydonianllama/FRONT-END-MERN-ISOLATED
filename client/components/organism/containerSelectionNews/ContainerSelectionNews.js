import React,{useState,useEffect} from 'react'
import {data} from '../../../fakeData/NewData'
import FactoryCards from '../../molecules/newCard/FactoryCard'
const SelectionNews = () => {
    const [newsSelection,setNewsSelection] = useState([])
    useEffect(()=> {
        setNewsSelection(data)
    },[])
    return(
        <>
            <div className= "selection-news-header">
                <h2>Selection :</h2>
            </div>
            {newsSelection.map(data => <FactoryCards key = {data.id} data = {data} type = "normal" /> )}
        </>
    )
}
export default SelectionNews