import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSize } from './../actions/index';
import { sortProducts } from './../actions/index';
class ProductFilter extends Component {
    
    render() {
        
       
    return (
        
        <div className="row widget-filter">
            

            <div className="filter-size col-xs-4">
                <div className="widget-filter"><h3>Filter by Size: {" "}</h3></div>
                <div className="form-input">
                        <div className="custom-select">
                        <select className="form-control"
            value={this.props.size}
            onChange={(e) =>
              this.props.changeSize(this.props.products, e.target.value)
            }
          >
                    <option value="">ALL</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                            <i className="icon-arrow-down"></i>
                        </div>
                    </div>
                
            </div>
            <div className="filter-sort col-xs-4">
            <div className="widget-filter"><h3>Filter by Price: {" "}</h3></div>
                <div className="form-input">
                        <div className="custom-select">
                        <select className="form-control"
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Price: low to high</option>
            <option value="highest">Price: high to low</option>
            <option value="atoz">Alphabetically, A-Z</option>
            <option value="ztoa">Alphabetically, Z-A</option>
          </select>
                            <i className="icon-arrow-down"></i>
                        </div>
                    </div>
            </div>
            <div className="filter-result col-xs-4">
                <div className="widget-filter"><h3>Showing: {this.props.filteredProducts?.length} Products</h3></div>
            </div>
        </div>
    )
}
}


const mapStateToProps = (state) => {

    return {
    size: state.products.size,
    sort:state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
    
}

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        changeSize: (products, size) => {
            dispatch(changeSize(products, size))
        },
        sortProducts: (filteredProducts, sort) => {
            dispatch(sortProducts(filteredProducts, sort))
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)