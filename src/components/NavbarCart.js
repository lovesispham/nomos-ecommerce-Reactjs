import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartSidebar from './CartSidebar';
import { actDelProductInCart, actUpProductInCart } from './../actions/index'
class NavbarCart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            modal: false,
        };
    }
    handleClick() {
        document.body.classList.add('pushmenu-push-toright-cart');
        this.setState({
            modal: this.state.modal ? false : true,
        });
    }

    handleClose() {
        document.body.classList.remove('pushmenu-push-toright-cart');
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        
        this.props.cartUpdate();
        const { cart} = this.props;

        return (
                <div>
                    <div className={`pushmenu pushmenu-left cart-box-container ${this.state.modal ? 'pushmenu-open' :''}`}>
                        <CartSidebar
                            handle={() => this.handleClose()}
                            show={this.state.modal}
                            showTotalCart = {()=> this.showTotalCart(cart)}
                            cart = {cart}
                            showTotalAmount = {()=> this.showTotalAmount(cart)}
                        />
                    </div>
                    
                <span className="nomos-icon icon-cart" onClick={() => this.handleClick()}>
                    <i className="icon-bag f-20"></i>
                    <span className="count cart-count">{this.showTotalCart(cart)}</span>
                </span>
                </div>
                
           
        )
    }
    showTotalCart = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result += cart[i].quantity
            }
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



const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartUpdate: () => {
            return true
        }
    }
}



export default connect(mapStateToProps)(NavbarCart)