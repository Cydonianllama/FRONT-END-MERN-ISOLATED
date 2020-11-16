import React from 'react';
import { BrowserRouter,Link,Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home.jsx';
import SectionsNews from './pages/SectionsNews.jsx';
import Notfound from './pages/Notfound.jsx';

const  App = () => {

    return (
        <>
            <BrowserRouter> 
                 
                <Switch>  
                    <Route exact path='/' >
                        <Redirect from="/" to="/home" />
                    </Route>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path='/home/nacionales'>
                        <SectionsNews type="nacionales" />
                    </Route>
                    <Route exact path='/Home/Internacionales'>
                        <SectionsNews type="internacionales" />
                    </Route>
                    <Route component={Notfound} />
                </Switch>

            </BrowserRouter>
        </>
    )
}
export default App;

/*
                    <Route exact path='/Home/Login' />
                    <Route exact path='/Home/Deportes'/>
                    <Route exact path='/Home/Espectaculos' />
                    <Route exact path='/Home/Politica' />
                    <Route exact path='/Home/Variados' />
                    <Route exact path='/Home/Nacionales?:name' />
                    <Route exact path='/Home/Internacionales?:name' />
                    <Route exact path='/Home/Deportes?:name' />
                    <Route exact path='/Home/Espectaculos?:name' />
                    <Route exact path='/Home/Politica?:name' />
                    <Route exact path='/Home/Espectaculos?:name' />

*/ 