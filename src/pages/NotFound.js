import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import notfound_img from '../assets/img/404.png'
export default class NotFound extends Component {
    render() {
        return (
            <div className="nomos-404">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <img src={notfound_img} alt=""/>
                            <h3>We are sory, the page you’ve requested is not available</h3>
                            
                            <Link to="/" className="nomos-btn nomos-back">Back to hompage</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        )
    }
}
