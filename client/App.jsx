import React, {useState,useEffect} from 'react';
import { BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Notfound from './pages/Notfound.jsx';

const  App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home type="home" />
                    </Route>
                    <Route exact path='/Nacionales'>
                        <Home type="nacionales"/>
                    </Route>
                    <Route exact path='/Internacionales'>
                        <Home type="internacionales" />
                    </Route>
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;