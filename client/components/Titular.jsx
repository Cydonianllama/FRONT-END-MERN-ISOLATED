import React,{useState,useEffect} from 'react'

function Titular(props){

    const [dataTitular,setDataTitularState] = useState({});

    useEffect( async () => {
        let handleObtainDataTitular = async (props) => {
            let data = {};
            data = await props.dataTitular;
            setDataTitularState(data);
        }
        handleObtainDataTitular(props);
    },[props])

    return(
        <>
            <div className="titular">
                <h2>{dataTitular.headline}</h2>
                <p>{dataTitular.text}</p>
            </div>
        </>
    )
}

export default Titular;