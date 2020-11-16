import {useState,useEffect} from 'react'

function Hero({dataHero}){
    
    const [dataHero,setDataHeroState] = useState({});

    const setViewHero = (number)=>{
        let imageshero_id = '.imageshero-';
        imageshero_id = imageshero_id + number;
        document.querySelector(imageshero_id).classList.add('move'); 
    }   

    useEffect(()=>{

    },[dataHero])
    
    return(
        <>
            <div className = "hero-container"> 
                <div class="hero-container-images">
                    <div class="imageshero imageshero-1">

                    </div>
                    <div class="imageshero imageshero-2">

                    </div>
                    <div class="imageshero imageshero-3">

                    </div>
                </div>
                <div>
                    <button onClick={setViewHero(1)}>1</button>
                    <button onClick={setViewHero(2)}>2</button>
                    <button onClick={setViewHero(3)}>3</button>
                </div>
            </div>
        </>
    )
}

export default Hero;