import React from 'react'
import Image from '../components/Image'
import BadgeAutor from '../components/BadgeAutor'

function Content(){
    return(
        <>
            <div className = "content-news">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates quisquam ducimus iste.
                </p>
            </div>
        </>
    )
}

function InteractionContent(){
    return(
        <>
            <div className = "container-interactioncontent">
                <button>like</button>
                <button>dislike</button>
                <button>share</button>
            </div>
        </>
    )
}

function NewContent(){
    return(
        <>
            <Image/>
            <BadgeAutor/>
            <Content/>
            <InteractionContent/>
        </>
    )
}

export default NewContent;