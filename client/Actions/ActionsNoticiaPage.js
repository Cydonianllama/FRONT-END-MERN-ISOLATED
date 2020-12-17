export const interactionNew = async (type) => {

}
export const addComment = async () => {

}
export function RemoveDecorateURl(url) {
    let withoutDecoration = url.replace(/[-]/g, " ")
    return withoutDecoration
}
export const fetchNewsoneData = async (titleURL) => {
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