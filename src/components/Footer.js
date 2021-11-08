import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/nomos-dark-100x19.png'

// khoi tao menu
const footerMenu = [
    {
        display: "ABOUT US",
        path: "/"
    },
    {
        display: "PAYMENT AND DELIVERY",
        path: "/"
    },
    {
        display: "CAREER",
        path: "/"
    },
    {
        display: "NEED Help?",
        path: "/"
    },
]

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-v3 spc2 bd-top">
                    <div className="text-center">
                        <h3>Find out first about discounts <br />& updates</h3>
                        <div className="newsletter-content">
                            <form className="newsletter-form-wrap">
                                <div className="newsletter-form-wrap-inner">
                                    <input className="email" type="email" name="email" placeholder="Enter your email" />
                                    <button type="submit" name="submit_button" className="btn-submit submit-newsletter"></button></div>
                            </form>
                        </div>
                        <ul>
                         
                        {
                            //goi menu theo mang
                            footerMenu.map((item, index) => (
                                
                                    <li key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </li>
                                
                            ))
                            
                        }
                        </ul>
                    </div>
                    <div className="container header-container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <Link to="/">
                                    <img src={logo} alt="" className="img-reponsive" />
                                </Link>
                            </div>
                            <div className="col-xs-12 col-sm-4 flex justify-center">
                                <div className="social">
                                    <a href=""><i className="fa fa-facebook"></i></a>
                                    <a href=""><i className="fa fa-twitter"></i></a>
                                    <a href=""><i className="fa fa-pinterest"></i></a>
                                    <a href=""><i className="fa fa-rss"></i></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 flex justify-content-end">
                                <p className="copyright">© Nomoshop, Inc. 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer