
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CartItem from './../components/CartItem'
import {actDelProductInCart, actUpProductInCart} from './../actions/index'

class CartContainer extends Component {
    render() {
        var { cart } = this.props
        console.log(cart)
        return (
            <div>
                <div className="collection-bg hidden-xs hidden-sm">
                    <div className="container container-content">
                        <div className="shop-heading">
                            <h1>Shopping Cart</h1>
                            
                        </div>
                    </div>
                </div>
            <div className="container container-content">
                <div className="nomos-cart">
                    <div className="shopping-cart">
                        <div className="table-responsive">
                            <table className="table cart-table">
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Product</th>
                                        <th className="product-name"></th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                        <th className="product-remove"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showCartItem(cart)}
                                    
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="cart-collaterals">
                            {cart.length === 0 ? (
                                <div className="cart_totals style1 text-center">
                                        <p>Your cart is currently empty.</p>
                                        <a href="/#/catalog" className="nomos-btn mg-0">
                                        Back to Shopping</a>
                                </div>
                                
                                ):(
                            
                            <div className="cart_totals ">
                                <h2>Cart totals</h2>
                                <table cellspacing="0" className="shop_table shop_table_responsive">
                                    <tbody>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td data-title="Subtotal"><span className="woocommerce-Price-amount amount">{this.showTotalAmount(cart)}<span className="woocommerce-Price-currencySymbol">$</span></span></td>
                                        </tr>

                                        <tr className="order-total">
                                            <th className="no-bd">Total</th>
                                            <td className="no-bd" data-title="Total"><span className="woocommerce-Price-amount amount ">{this.showTotalAmount(cart)}<span className="woocommerce-Price-currencySymbol">$</span></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="wc-proceed-to-checkout">
                                    
                                        <a href="/#/catalog" className="checkout-button button nomos-btn">
                                        Continue to Shopping</a>
                                        <a href="/" className="checkout-button button nomos-btn">
                                        Proceed to checkout</a>
                                </div>
                            
                            </div>
                            )}
                        </div>
                               
                    </div>
                </div>
            </div>
            </div>
            

        )
    }
    showCartItem = (cart) => {
        var result = null;
        var {onDelProduct, onUpProduct} = this.props
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDelProduct = {onDelProduct}
                    onUpProduct={onUpProduct}
                />
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result += cart[i].product.price * cart[i].quantity
            }
        }
        return result;
    }
}

CartContainer.propTypes = {
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

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        onDelProduct: (product) => {
            dispatch(actDelProductInCart(product));
        },
        onUpProduct:(product, quantity) => {
            dispatch(actUpProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
