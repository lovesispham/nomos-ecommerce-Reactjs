import React, { Component } from 'react'
import { CookiesProvider } from 'react-cookie';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'



export default class Routes extends Component {
    render() {
        return (
            <CookiesProvider>
                <BrowserRouter>
                <Switch>
                <Route path="/" exact component={Home}/>
                
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/cart" component={Cart}/>  
                
                
            </Switch>
            </BrowserRouter>
            </CookiesProvider>
            
            
        )
    }
}
