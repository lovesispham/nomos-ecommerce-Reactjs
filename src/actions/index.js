import * as types from './../constants/ActionType'
import callApi from "./../utils/callApi";

export const actFetchProductsRequest = () => {
    return dispatch => callApi('products', 'GET', null).then(res => {
        dispatch(actFetchProducts(res.data));
    })
}

export const actFetchProducts = (products) => {
    return{
        type:types.FETCH_PRODUCT,
        payload:products
    }
}


  

export const actAddToCart = (product, quantity) => {
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDelProductInCart = (product) => {
    return{
        type:types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpProductInCart = (product, quantity) => {
    return{
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}


export const changeSize = (products, size) => {
    return {
        type: types.FILTER_PRODUCT_BY_SIZE,
        payload: {
            size:size,
            items:
                size === ""
                ? products
                : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
                        
        }
    }
  }


export const sortProducts = (filteredProducts, sort) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest"){
        sortedProducts.sort((a,b) => (a.slug > b.slug ? 1: -1))
    } 
    else if (sort === "atoz") {
        sortedProducts.sort((a,b) => (a.title.localeCompare(b.title)))
    }
    else if (sort === "ztoa") {
        sortedProducts.sort((a,b) => (b.title.localeCompare(a.title)))
    }
    
    else {
        sortedProducts.sort((a,b) =>
            sort === "lowest"
            ? a.price > b.price
             ? 1
             : -1
            : a.price > b.price
            ? -1
            : 1
        )
    } 
    console.log(sortedProducts);
    return{
        type:types.ORDER_PRODUCT_BY_PRICE,
        payload:{
            sort:sort,
            items:sortedProducts
        }
    }
}