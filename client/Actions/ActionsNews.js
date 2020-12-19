let headlineP =
{
    headline: 'me tire un pedo jugoso',
    text: 'manche al pobre del costado, no se por que había alguien a mi costado'
}

export const getHeadline = async () => {
    return headlineP;
}

export const getAllNews = async () => {
    const url = 'http://localhost:3500/'
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    let processedResponse = await response.json()
    return processedResponse
}

export const getNewsByType = async (paramURLtypeNew) => {
    let uriRequest = `http://localhost:3500/home/${paramURLtypeNew}`
    let response = await fetch(uriRequest, {
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

export const getCompleteInformationNew = async (titleURL) => {
    let dataBody = RemoveDecorateURl(titleURL)
    let jsonRequest = {
        title: dataBody
    }
    let urlComplete = `http://localhost:3500/getnew`
    let response = await fetch(urlComplete, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        body: JSON.stringify(jsonRequest),
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    let responseJSON = await response.json()
    return responseJSON
}