import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Sobre from '../pages/Sobre'
import Roteiros from '../pages/Roteiros'



const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>  
                <Route path='/Roteiros' component={Roteiros} />
                <Route path='/Sobre' component={Sobre} />
                <Route path='/Contato' component={Contato} />           
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes