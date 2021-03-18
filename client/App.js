import React from 'react';
import { BrowserRouter,Link,Route, Switch, Redirect} from 'react-router-dom';

import SectionsNews from './pages/SectionNew/SectionsNews';
import Notfound from './pages/NotFound/Notfound';
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'

import Home from './pages/Home/Home'

function ComponentsApp(){
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' ><Redirect from="/" to="/home" /></Route>
                <Route exact path="/home" component={Home} />
                
                <Route exact path='/login' >
                    <Login />
                </Route>
                <Route exact path='/register' >
                    <Register />
                </Route>
                <Route exact path='/home/nacionales'>
                    <SectionsNews type="nacionales" />
                </Route>
                <Route exact path='/home/Internacionales'>
                    <SectionsNews type="internacionales" />
                </Route>
                <Route exact path='/home/deportes'>
                    <SectionsNews type="deportes" />
                </Route>
                <Route exact path='/home/politica'>
                    <SectionsNews type="politica" />
                </Route>
                <Route exact path='/home/espectaculos'>
                    <SectionsNews type="espectaculos" />
                </Route>
                <Route exact path='/home/variedades'>
                    <SectionsNews type="variedades" />
                </Route>

                <Route path = "*" component={Notfound} />
                
            </Switch>
        </BrowserRouter>
    )
}
const App = () => {
    return (<ComponentsApp/>)
}
export default App;