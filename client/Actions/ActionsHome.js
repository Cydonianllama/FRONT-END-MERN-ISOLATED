let headlineP =
{
    headline: 'me tire un pedo jugoso',
    text: 'manche al pobre del costado, no se por que había alguien a mi costado'
};
export const obtainHeadline = async () => {
    return headlineP;
}
export const obtainData = async () => {
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

