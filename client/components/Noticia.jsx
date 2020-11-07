import React from 'react';

function Noticia(){
        return(
            <div>
                <div className="container-noticia">
                    <h2>{this.state.titleNotice}</h2>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
}

export default Noticia;