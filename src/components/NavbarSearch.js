import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchProductsRequest, actAddToCart } from "./../actions/index";

class NavbarSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      fitered: []
    };
  }
  handleClick() {
    this.setState({
      modal: this.state.modal ? false : true
    });
  }

  handleClose() {
    this.setState({
      modal: !this.state.modal
    });
  }

  _onKeyUp = e => {
    // filter post list by title using onKeyUp function
    const fitered = this.props.products.filter(product =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ fitered });
    console.log(fitered);
  };
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div className="element element-search">
        <div
          className={`search-form-wrapper ${
            this.state.modal ? "search--open" : ""
          }`}
        >
          <div className="search-results-wrapper">
            <div className="btn-search-close" onClick={() => this.handleClose()}>
              <i className="ion-ios-close-empty"></i>
            </div>
          </div>
          <div className="container container-content">
            <div className="row">
              <div className="search-form">
                <input
                  name=""
                  className="search-input"
                  type="text"
                  placeholder="Start typing..."
                  onChange={this._onKeyUp}
                />
                <div className="search-results-container-inner product-collection-grid product-grid">
                  {this.state.fitered.length === 0 ? null : (
                    <div className="search-results">
                      {this.state.fitered.map((product,index) => (
                        <div className="col-xs-6" key={index}>
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
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          className="nomos-icon search-toggle"
          onClick={() => this.handleClick()}
        >
          <i className="icon-magnifier f-20"></i>
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.items
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
)(NavbarSearch);
