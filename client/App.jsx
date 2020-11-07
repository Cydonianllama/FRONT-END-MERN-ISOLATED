import React from 'react';
import { BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Notfound from './pages/Notfound.jsx';
import Nacionales from './pages/Nacionales.jsx';

class App extends React.Component{
    render(){
        return(
            <> 
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Nacionales' component={Nacionales}/>
                        <Route component={Notfound}/>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
export default App;