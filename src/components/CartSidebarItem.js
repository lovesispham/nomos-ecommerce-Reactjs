import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CartSidebarItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantity :1
        }
    }
     
    render() {
        
        var {item} = this.props
        var {quantity} = item // = item.quantity
        console.log(quantity)
        return (
            <li className="item-cart" key = {item.product.id}>
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
        )
    }

    
    
    showSubTotal = (price, quantity) => {
        return price*quantity
    }
}
