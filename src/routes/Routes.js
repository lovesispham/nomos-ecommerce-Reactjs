import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                
                <Route path="/catalog" component={Catalog}/>
                <Route path="/cart" component={Cart}/>  
                
                
            </Switch>
        )
    }
}
