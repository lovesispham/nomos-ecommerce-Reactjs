import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/img/nomos-dark-100x19.png'
import NavbarCart from './NavbarCart'
import NavbarSearch from './NavbarSearch'

// khoi tao menu
const mainNav = [
    {
        display: "Home",
        path: '/'
    },
    {
        display: "Shop",
        path: '/catalog'
    },
    {
        display: "Cart",
        path: '/cart'
    }
]

const Header = () => {
    // tim den noi dung trong url hien tai useLocation
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    //khong the truy cap dc dom truc tiep trong render function. 
    //cac nut dom hok dc render cho toi khi ham redner cuar component chay xong. 
    //Ham render trong component chi co nhiem vu la khai bao tra ve react elements.
    //Sau khi cac component render cac elements xong
    //khai bao ref de truy cap vao 1 nut dom
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

    
    
    return (
        
        <div>
            
            <header className="header-v3">
                <div className="header-center">
                    <div className="container header-container">
                        <div className="main-menu-wrapper"></div>
                        <div className="row flex align-items-center justify-content-between">

                            <div className="col-md-9 col-xs-6 col-sm-6 col2 flex align-items-center">
                                <div className="nomos-logo">
                                    <Link to="/">
                                        <img src={logo} />
                                    </Link>

                                </div>
                                <div className="header-menu" ref={menuLeft}>
                                    <div className="close-menu-mobile" onClick={menuToggle}><span>Close</span></div>
                                    <ul className="nav navbar-nav">

                                        {
                                            mainNav.map((item, index) => (
                                                <li className={`level1 ${index === activeNav ? 'active' : ''}`}
                                                    key={index}
                                                    onClick={menuToggle}
                                                >
                                                    <Link to={item.path}>
                                                        {item.display}
                                                    </Link>
                                                </li>
                                            ))
                                        }


                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-3 col-xs-6 col-sm-6 col2 flex justify-content-end">

                                <div className="topbar-left">
                                    
                                        <NavbarSearch />
                                    
                                    
                                    
                                    

                                        <NavbarCart />
                                        
                                    
                                    <div className="element element-menu">
                                        <span className="nomos-icon icon-pushmenu" onClick={menuToggle}>
                                            <i className="icon-menu f-20"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header