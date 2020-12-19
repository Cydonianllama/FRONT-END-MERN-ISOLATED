export async function signin({username,password}){
    let url = 'localhost:5000/signin'
    let httpHead = {
        
    }
    let response = await fetch(url,httpHead)
    let isAuth = response.json()
    let stateSignin = {
        isSigned : isAuth.isAuth
    }
    return stateSignin
}

export function signout(){

}

export function RegisterUser(){

}

export function ModifyUserInfo(){

}
