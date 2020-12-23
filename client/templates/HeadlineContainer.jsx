import React,{useEffect,useState} from 'react'
function HeadlineContainer(){
    const [headlineChild,setHeadlineChildState] = useState('')
    const [headlineMain,setHeadlineMainState] = useState('')

    return(
        <>
            <div class = "container-headline">
                <div class = "headline-main">

                </div>
                <div class = "headline-child1">

                </div>
                <div class = "headline-child2">

                </div>
                <div class ="headline-child3">

                </div>
            </div>
        </>
    )
}
export default HeadlineContainer;