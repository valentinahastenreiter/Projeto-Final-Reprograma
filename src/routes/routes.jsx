import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import MapaPage from '../pages/MapaPage'
import TipoUser from '../pages/TipoUser'



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={TipoUser} />
                <Route path="/login" component={LoginPage} />
                <Route path="/mapa" component={MapaPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes