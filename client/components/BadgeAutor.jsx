import React,{useState} from 'react'
function Avatar() {
    return (
        <>
            <div className="avatar">
                Avatar
            </div>
        </>
    )
}

function Social(){
    return(
        <>
            <div className = "social-container">
                Aca van las redes sociales
            </div>
        </>
    )
}

function BadgeAutor({dataNagde}){
    const [dataBadge,setDataBadgeState] = useState('')
    return(
        <>
            <div className = "container-badge">
                <Avatar/>
                <h3>dataBadge.name</h3>
                <Social/>
            </div>
        </>
    )
}
export default BadgeAutor;