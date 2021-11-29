import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProductSort from "../components/ProductSort";
import ProductItem from "../components/ProductItem";
import ProductReview from "../components/ProductReview";
import { actFetchProductsRequest, actAddToCart } from "./../actions/index";

import colors from "../assets/fake-data/color";
import available_sizes from "../assets/fake-data/size";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      openFilter: false,
      currentProduct: "",

      colors: [],
      availableSizes: [],

      productFitered: []
    };
  }
  // select Color checkbox

  selectColor = event => {
    let newArray = [...this.state.colors, event.target.value];
    if (this.state.colors.includes(event.target.value)) {
      newArray = newArray.filter(color => color !== event.target.value);
    }

    this.setState({
      colors: newArray
    });
  };

  selectSize = event => {
    let newArray = [...this.state.availableSizes, event.target.value];
    if (this.state.availableSizes.includes(event.target.value)) {
      newArray = newArray.filter(size => size !== event.target.value);
    }

    this.setState({
      availableSizes: newArray
    });
  };

  filteredCollected = () => {
    const collectedTrueKeys = {
      colors: [],
      availableSizes: []
    };
    const colors = this.state.colors;
    const availableSizes = this.state.availableSizes;
    for (let colorKey in colors) {
      if (colors[colorKey]) collectedTrueKeys.colors.push(colors[colorKey]);
    }
    for (let availableSizesKey in availableSizes) {
      if (availableSizes[availableSizesKey])
        collectedTrueKeys.availableSizes.push(
          availableSizes[availableSizesKey]
        );
    }
    console.log(collectedTrueKeys);
    return collectedTrueKeys;
  };

  multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        // In addition to the resource, I added below five lines because product[key] is an array for material attribute.
        if (Array.isArray(product[key])) {
          // for (let i = 0; i < product[key].length; i++) {
          //   return filters[key].includes(product[key][i].toLowerCase());
          // }
          return product[key].some(keyEle => filters[key].includes(keyEle));
        }

        return filters[key].includes(product[key]);
      });
    });
  };

  // **************** Filter ****************
  searchProducts = () => {
    const filteredProducts = this.multiPropsFilter(
      this.props.products,
      this.filteredCollected()
    );

    return filteredProducts
      .filter(product => {
        return product;
      })
      .map((product,index) => (
        <ProductItem
          key={index}
          product={product}
          onAddToCart={this.props.onAddToCart}
          handleClick={() => this.handleClick(product)}
        />
      ));
  };
  // **************** COUNT PRODUCT FILTER ****************
  totalProduct = () => {
    const filteredProducts = this.multiPropsFilter(
      this.props.products,
      this.filteredCollected()
    );

    return filteredProducts.filter(product => {
      return product;
    }).length;
  };
  // **************** Open Filter Mobile ****************
  handleClickFilter() {
    document.body.classList.add("no-scroll");
    this.setState({
      openFilter: this.state.openFilter ? false : true
    });
  }

  handleCloseFilter() {
    document.body.classList.remove("no-scroll");
    this.setState({
      openFilter: !this.state.openFilter
    });
  }

  // **************** Open review modal ****************
  handleClick(product) {
    document.body.classList.add("no-scroll");
    this.setState({
      modal: this.state.modal ? false : true,
      currentProduct: product
    });
  }
  // **************** close review modal ****************
  handleClose() {
    document.body.classList.remove("no-scroll");
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
        <div
          className={`modal-popup_style2  ${
            this.state.modal
              ? "open view-transition-fade-expand-enter-active"
              : "view-transition-fade-shrink-leave "
          }`}
        >
          <ProductReview
            
            currProd={this.state.currentProduct}
            handle={() => this.handleClose()}
            show={this.state.modal}
            onAddToCart={this.props.onAddToCart}
          />
        </div>
        <div className="filter-collection-left">
          <span onClick={() => this.handleClickFilter()} className="btn">
            <i className="flaticon-filter"></i>
          </span>
        </div>
        <div className="container container-content shop-content">
          <div className="row shop-colect">
            <div
              className={`col-xs-3 collection-sidebar col-left ${
                this.state.openFilter ? "open" : ""
              }`}
            >
              <div className="close-sidebar-collection">
                <span onClick={() => this.handleCloseFilter()}>
                  Filter <i className="icon_close ion-close"></i>
                </span>
              </div>
              <div className="widget-filter filter-result">
                {!this.props.products ? (
                  <div>Loading...</div>
                ) : (
                  <h3>Showing: {this.totalProduct()} Products</h3>
                )}
              </div>
              <div className="widget-filter filter-color">
                <h3>Filter by Color:</h3>
                {colors.map((color, index) => (
                  <label className="custom-checkbox" key={index}>
                    <input
                      type="checkbox"
                      value={color}
                      defaultChecked={
                        //false //if set to false all unchecked
                        this.state.colors.includes(color)
                      }
                      onChange={this.selectColor}
                    />
                    <span style={{ backgroundColor: `${color}` }}>{color}</span>
                  </label>
                ))}
              </div>
              <div className="widget-filter filter-size">
                <h3>Filter by Size:</h3>
                {available_sizes.map((size,index) => (
                  <label className="custom-checkbox" key={index}>
                    <input
                      type="checkbox"
                      value={size}
                      defaultChecked={
                        //false //if set to false all unchecked
                        this.state.availableSizes.includes(size)
                      }
                      onChange={this.selectSize}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
              <ProductSort></ProductSort>
            </div>

            <div className="col-xs-9 collection-list">
              <div className="product-collection-grid product-grid">
                <div className="row row-lg-20">
                  {!this.props.products ? (
                    <div>Loading...</div>
                  ) : (
                    <div>{this.searchProducts()}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//tao bien
//chuyen cac state tren store thanh cac prop cua components
const mapStateToProps = state => ({
  products: state.products.filteredItems
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
