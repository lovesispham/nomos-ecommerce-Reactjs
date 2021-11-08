import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

class CartSidebar extends Component {
    
    render() {


        const { cart, showTotalCart, showTotalAmount } = this.props;


        return (


            <div className="cart-list">
                <div className="cart-list-heading">
                    <span className="close-menu-mobile" onClick={() => this.props.handle()}></span>
                    <h3 className="cart-title">your cart</h3>
                    <span className="minicart-number-items">{showTotalCart(cart)}</span>
                </div>
                <div className="cart-inside">

                    {!cart ? (
                        <div>Loading...</div>
                    ) : (
                            <ul className="list">
                                {cart.map((item, index) => (
                                    <li className="item-cart" key={index}>
                                        <div className="product-img-wrap">

                                            <Link to="/">
                                                <img src={item.product.img01} alt="Product" className="img-responsive" />
                                            </Link>

                                        </div>
                                        <div className="product-details">
                                            <div className="inner-left">
                                                <div className="product-name"><Link to="/">{item.product.title}</Link></div>
                                                <div className="product-price"><span>${item.product.price}</span></div>
                                                <div className="product-qtt">
                                                    QTY : {item.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}



                    <div className="cart-bottom">
                        <div className="cart-price">
                            <span>Total</span>
                            <span className="price-total">{showTotalAmount(cart)} $</span>
                        </div>
                        <div className="cart-button">
                            <Link to="/cart" className="nomos-btn checkout" title="" onClick={() => this.props.handle()}>View cart</Link>
                            <Link to="/" className="nomos-btn checkout" title="">Check out</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}

CartSidebar.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            img01: PropTypes.string.isRequired,
            img02: PropTypes.string.isRequired,
            colors: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}



export default (CartSidebar)