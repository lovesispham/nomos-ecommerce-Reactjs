import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import ProductReview from './ProductReview'

class ProductItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
          modal: false,
          currentProduct: ""
        };
      }
      handleClick(val) {
        this.setState({
          modal: this.state.modal ? false : true,
          currentProduct: val
        });
      }
    
      handleClose() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        

        


        
        return (
            
            <div className="col-xs-6">
              
              <ProductReview
                    currProd={this.state.currentProduct}
                    handle={() => this.handleClose()}
                    show={this.state.modal}
                />
                <div className="product-item">
                    <div className="product-img">
                        <Link to="/">
                            <div className="product-img-link">
                                <img src={this.props.product.img01} alt={this.props.product.title} />
                                <img className="product-second-img" src={this.props.product.img02} alt={this.props.product.title} />
                            </div>
                            
                        </Link>
                        <a href="#" className="nomos-quickview"></a>
                        
                    </div>

                    <div className="product-info">
                        <h3 className="product-title">
                            <Link to="/" alt={this.props.product.title}>{this.props.product.title}</Link>
                        </h3>
                        <div className="product-price nomos-price-view">
                            <span>${Number(this.props.product.price)}</span>
                        </div>
                        <span className="nomos-addcart-text" onClick= { () => this.onAddToCart(this.props.product)}>
                            <span>ADD TO CART</span>
                        </span>
                    </div>

                </div>


            </div>

        )
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
}



export default ProductItem

