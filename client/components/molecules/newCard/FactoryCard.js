import React from 'react'
import HeadLineCard from './HeadLineCard'
import NewCard from './NewCard'
import FeaturedCard from './featuredCard'

const FactoryCards = ({type,data}) => {

    const processType = (type) => {

        if (!type) {
            return (<h3>missing type in factory</h3>)
        }

        switch(type){
            case 'headline': return <HeadLineCard data = {data} /> 
            case 'normal' : return <NewCard data = {data} /> 
            case 'featured' : return <FeaturedCard data = {data} />
            default : return (<h3>missing card component</h3>)
        }

    }

    return(
        <>
            {processType(type)}
        </>
    )

}

export default FactoryCards