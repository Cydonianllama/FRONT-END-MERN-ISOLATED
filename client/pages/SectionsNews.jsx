import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import {fetchData,handleObtainNews} from '../Actions/ActionsSectionNews';

function SectionNews(props) {

    const [arrayComponents, setArrayComponentsState] = useState([]);

    useEffect(async () => {
        let News = await handleObtainNews(props.type);
        setArrayComponentsState(News);

    }, [props])

    return (
        <div>
            <Layout>
                <div className="container-noticias">
                    {arrayComponents}
                </div>
            </Layout>
        </div>
    )
}

export default SectionNews;