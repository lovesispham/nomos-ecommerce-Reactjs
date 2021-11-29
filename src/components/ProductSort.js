import React, { Component } from "react";
import { connect } from "react-redux";
import { sortProducts } from "../actions/index";

class ProductSort extends Component {
  render() {
    return (
      
        

        

        <div className="widget-filter filter-sort">
          <h3>Sorting: </h3>

          <div className="form-input">
            <div className="custom-select">
              <select
                className="form-control"
                value={this.props.sort}
                onChange={e =>
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
      
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    sortProducts: (filteredProducts, sort) => {
      dispatch(sortProducts(filteredProducts, sort));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSort);
