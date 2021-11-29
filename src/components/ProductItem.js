import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var {product} = this.props
        return (
            
            <div className="col-xs-6">
                <div className="product-item">
                            <div className="product-img">
                              <Link to="/">
                                <div className="product-img-link">
                                  <img
                                    src={product.img01}
                                    alt={product.title}
                                  />
                                  <img
                                    className="product-second-img"
                                    src={product.img02}
                                    alt={product.title}
                                  />
                                </div>
                              </Link>
                              <span
                                className="nomos-quickview "
                                onClick={() => this.props.handleClick(product)}
                              ></span>
                            </div>

                            <div className="product-info">
                              <h3 className="product-title">
                                <Link to="/" alt={product.title}>
                                  {product.title}
                                </Link>
                              </h3>
                              <div className="product-price nomos-price-view">
                                <span>${Number(product.price)}</span>
                              </div>
                              <span
                                className="nomos-addcart-text"
                                onClick={() => this.props.onAddToCart(product)}
                              >
                                <span>ADD TO CART</span>
                              </span>
                            </div>
                          </div>
            </div>
            
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }
    
   

}


export default ProductItem

