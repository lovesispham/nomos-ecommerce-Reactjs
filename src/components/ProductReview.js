import React, { Component } from 'react'

export default class ProductReview extends Component {
   
      
    render() {
        var {currProd} = this.props
        return (
            <div>
                
                    <div className="popup-container pu-review">
                        <span class="popup-close" onClick={() => this.props.handle()}><i class="ion-close"></i></span>
                        <div className="pu-content scroll_pu_content">

                            <div className="product-review">
                                <div className="photo">
                                    <img src={currProd.img01} alt={currProd.title} />
                                </div>
                                <div className="info">
                                    <div className="product-cate">{currProd.category}</div>
                                    <h3 className="product-title">
                                        {currProd.title}
                                    </h3>
                                    <div className="product-price nomos-price-view">
                                        <span>${Number(currProd.price)}</span>
                                    </div>
                                    <div className="short-desc">
                                        <h4 className="info-title">Intro</h4>
                                        <div className="desc"></div>
                                    </div>
                                    <div className="swatch-details">
                                        <h4 className="info-title">Product Details</h4>
                                        <div className="group-wrap flex align-items-center">
                                            <label>Color</label>
                                            <div className="color-group">
                                            {currProd.colors ? currProd.colors.map((color, index) => (
                                                    <span className="circle" style={{ backgroundColor: `${color}` }}>
                                                    </span>
                                                    )): <span>Loading...</span>}
                                            </div>
                                        </div>
                                        <div className="group-wrap flex align-items-center">
                                            <label>Size</label>
                                            <div className="product-size">
                                                {currProd.availableSizes ? currProd.availableSizes.map((size, index) => (
                                                    <span key={index}>
                                                        {size}
                                                    </span>
                                                )): <span>Loading...</span>}
                                            </div>
                                        </div>
                                        <span className="nomos-btn nomos-addcart" onClick={() => this.onAddToCart(currProd)}>
                                                                    <span>ADD TO CART</span>
                                                                </span>
                                    </div>
                                    
                                </div>
                            </div>


                        </div>
                    </div>


                


            </div>

        )
    }
    onAddToCart = (currProd) => {
        console.log(currProd)
        this.props.onAddToCart(currProd)
    }
}
