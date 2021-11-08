import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CartItem extends Component {
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
            <tr key={item.product.id} className="item_cart">
                <td className="product-name">
                    <div className="product-img">
                        <img src={item.product.img01} alt={item.product.title} />
                    </div>
                </td>
                <td className="product-desc">
                    <div className="product-info">
                        <Link to="/" title={item.product.title}>{item.product.title}</Link>
                    </div>
                </td>
                <td className="product-same total-price">
                    <p className="price">{item.product.price}</p>
                </td>
                <td className="bcart-quantity single-product-detail">
                    <div className="nomos-qtt">
                        <div className="control">
                        <button 
                                    type="button" 
                                    className="quantity-right-plus btn btn-number js-plus" 
                                    data-type="plus" data-field=""
                                    onClick={() => {this.onUpProduct(item.product, item.quantity+1)}}
                                    >
                                    <i className="fa fa-plus"></i>
                            </button>
                            <input type="text" name="number" value={item.quantity} className="product_quantity_number" />
                            
                            <button 
                                type="button" 
                                className="quantity-left-minus btn btn-number js-minus" 
                                data-type="minus" data-field=""
                                onClick={() => {this.onUpProduct(item.product, item.quantity-1)}}
                                    
                                >
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="total-price">
                    <p className="price">${this.showSubTotal(item.product.price,item.quantity)}</p>
                </td>
                <td className="product-remove">
                    <button 
                        className="btn-del"
                        onClick={() => {this.props.onDelProduct(item.product)}}
                        >
                        <i className="ion-ios-close-empty"></i>
                    </button>
                </td>
            </tr>
        )
    }

    
    onDelProduct = (product) => {
        console.log(product)
        // var {onDelProduct} = this.props
        // onDelProduct(product)
    }
    onUpProduct = (product,quantity)=>{
        if (quantity > 0) {
            var { onUpProduct} = this.props;
            onUpProduct(product, quantity);
        }
    }
    showSubTotal = (price, quantity) => {
        return price*quantity
    }
}
