import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './Header'
import Footer from './Footer'


import Routes from '../routes/Routes'

class Layout extends Component {
    render() {
        return (
            
                <BrowserRouter>
                    <Route render ={props => (
                        
                            
                            <div className="wrappage">
                            
                                <Header {...props}/>
                                <Routes/>
                                <Footer/>
                            </div>
                       
                    )}
                    />
                   
                    
                </BrowserRouter>
            
        )
    }
}

export default Layout