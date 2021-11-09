import React, { Component } from 'react'

import { HashRouter, Route } from 'react-router-dom';


import Header from './Header'
import Footer from './Footer'


import Routes from '../routes/Routes'

class Layout extends Component {
    render() {
        return (
            
                <HashRouter>
                    <Route render ={props => (
                        
                            
                            <div className="wrappage">
                            
                                <Header {...props}/>
                                <Routes/>
                                <Footer/>
                            </div>
                       
                    )}
                    />
                   
                    
                </HashRouter>
            
        )
    }
}

export default Layout