import React from 'react';
import { BrowserRouter,Link,Route, Switch, Redirect} from 'react-router-dom';

//pages
import RootHomepage from './pages/RootHomepage/RootHomepage'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' ><Redirect from="/" to="/home" /></Route>
                <Route exact path="/home" component={RootHomepage} />
                {/* <Route path = "*" component={Notfound} />   */}
            </Switch>
        </BrowserRouter>
    )
}

export default App;