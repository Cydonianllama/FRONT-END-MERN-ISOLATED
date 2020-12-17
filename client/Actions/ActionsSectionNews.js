import Noticia from '../components/Noticia';

export const fetchData = async (type) => {
    let uri_complete = `http://localhost:3500/home/${type}`
    let response = await fetch(uri_complete, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    let dataTypeData = []
    data.forEach((item, index) => {
        if (item.tags[0].url) dataTypeData.push(item)
    })
    return data
}
export const handleObtainNews = async (typen) => {
    let returndata = [];
    let data = await fetchData(typen);
    data.map((item, index) => {
        console.log(item.tags[0].name)
        if (item.tags[0].name === typen) {
            returndata.push(<Noticia key={index} dataNews={item} />);
        }
    });
    return returndata;
}