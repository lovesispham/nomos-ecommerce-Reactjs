
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


import ProductFilter from '../components/ProductFilter'
import ProductReview from '../components/ProductReview'
import PropTypes from 'prop-types'
import { actFetchProductsRequest, actAddToCart } from './../actions/index'


class ProductsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

            modal: false,
            currentProduct: ""
        };
    }
    handleClick(product) {
        document.body.classList.add('no-scroll');
        this.setState({
            modal: this.state.modal ? false : true,
            currentProduct: product
        });
    }

    handleClose() {
        document.body.classList.remove('no-scroll');
        this.setState({
            modal: !this.state.modal
        });
    }





    componentDidMount() {
        this.props.fetchAllProducts();
    }


    render() {
        
        return (
            <div>
                <div className="collection-bg hidden-xs hidden-sm">
                    <div className="container container-content">
                        <div className="shop-heading">
                            <h1>The Shop</h1>
                            
                        </div>
                    </div>
                </div>
                <div className={`modal-popup_style2  ${this.state.modal ? 'open view-transition-fade-expand-enter-active' : 'view-transition-fade-shrink-leave '}`}>
                    <ProductReview
                        currProd={this.state.currentProduct}
                        handle={() => this.handleClose()}
                        show={this.state.modal}
                        onAddToCart = { this.props.onAddToCart }
                    />
                </div>
                <div className="container container-content shop-content"
                >


                    <div className="row shop-colect">






                        <div className="col-xs-12 collection-list">
                            <ProductFilter />
                            <div className="product-collection-grid product-grid">
                                <div className="row row-lg-20">
                                    {!this.props.products ? (
                                        <div>Loading...</div>
                                    ) : (
                                            <div>
                                                {this.props.products.map((product, index) => (
                                                    <div className="col-xs-6" key={index}>


                                                        <div className="product-item">
                                                            <div className="product-img">
                                                                <Link to="/">
                                                                    <div className="product-img-link">
                                                                        <img src={product.img01} alt={product.title} />
                                                                        <img className="product-second-img" src={product.img02} alt={product.title} />
                                                                    </div>

                                                                </Link>
                                                                <span className="nomos-quickview " onClick={() => this.handleClick(product)}></span>

                                                            </div>

                                                            <div className="product-info">
                                                                <h3 className="product-title">
                                                                    <Link to="/" alt={product.title}>{product.title}</Link>
                                                                </h3>
                                                                <div className="product-price nomos-price-view">
                                                                    <span>${Number(product.price)}</span>
                                                                </div>
                                                                <span className="nomos-addcart-text" onClick={() => this.props.onAddToCart(product)}>
                                                                    <span>ADD TO CART</span>
                                                                </span>
                                                            </div>

                                                        </div>


                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


    

}



//tao bien 
//chuyen cac state tren store thanh cac prop cua components
const mapStateToProps = (state) => ({

    products: state.products.filteredItems

})

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
