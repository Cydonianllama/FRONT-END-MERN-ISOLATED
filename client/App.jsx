import React from 'react';
import { BrowserRouter,Link,Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home.jsx';
import SectionsNews from './pages/SectionsNews.jsx';
import Notfound from './pages/Notfound.jsx';
import NoticiaPage from './pages/NoticiaPage.jsx'

const  App = () => {
    //router children
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
                    <Route exact path='/home/Internacionales'>
                        <SectionsNews type="internacionales" />
                    </Route>
                    <Route exact path='/home/deportes'>
                        <SectionsNews type="deportes" />
                    </Route>
                    <Route exact path='/home/deportes/:title'>
                        <NoticiaPage/>
                    </Route>
                    <Route exact path='/home/politica'>
                        <SectionsNews type="politica" />
                    </Route>
                    <Route exact path='/home/politica/:title'>
                        <NoticiaPage/>
                    </Route>
                    <Route exact path='/home/espectaculos'>
                        <SectionsNews type="espectaculos" />
                    </Route>
                    <Route exact path='/home/espectaculos/:title'>
                        <NoticiaPage/>
                    </Route>
                    <Route exact path='/home/variados'>
                        <SectionsNews type="variados" />
                    </Route>
                    <Route exact path='/home/variedades/:title'>
                        <NoticiaPage />
                    </Route>
                    <Route exact path='/home/nacionales/:title' >
                        <NoticiaPage />
                    </Route>
                    
                    <Route path='/home/internacionales/:title'>
                        <NoticiaPage />
                    </Route>
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;