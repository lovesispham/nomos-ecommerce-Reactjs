const product_01_image_01 = require('../img/product/1/19.jpg').default
const product_01_image_02 = require('../img/product/1/20.jpg').default

const product_02_image_01 = require('../img/product/2/26.jpg').default
const product_02_image_02 = require('../img/product/2/27.jpg').default

const product_03_image_01 = require('../img/product/3/31-1.jpg').default
const product_03_image_02 = require('../img/product/3/32.jpg').default

const product_04_image_01 = require('../img/product/4/7.jpg').default
const product_04_image_02 = require('../img/product/4/8.jpg').default

const product_05_image_01 = require('../img/product/5/4-1.jpg').default
const product_05_image_02 = require('../img/product/5/4-11.jpg').default

const product_06_image_01 = require('../img/product/6/14.jpg').default
const product_06_image_02 = require('../img/product/6/15.jpg').default

const product_07_image_01 = require('../img/product/7/48.jpg').default
const product_07_image_02 = require('../img/product/7/49.jpg').default

const product_08_image_01 = require('../img/product/8/58.jpg').default
const product_08_image_02 = require('../img/product/8/59.jpg').default

const product_09_image_01 = require('../img/product/9/1.jpg').default
const product_09_image_02 = require('../img/product/9/2.jpg').default

const product_10_image_01 = require('../img/product/10/12.jpg').default
const product_10_image_02 = require('../img/product/10/13.jpg').default


const products = [
    {
        title : "LJ 2 side chair grey",
        price: '84',
        category:'Decoration',
        img01:product_01_image_01,
        img02:product_01_image_02,
        colors:["white","red","yellow"],
        slug:'lj-2-side-chair-grey',
        size:["s","m","l","xl"]
    },
    {
        title : "Collect Lighting",
        price: '210',
        category:'Furniture',
        img01:product_02_image_01,
        img02:product_02_image_02,
        colors:["white","red","yellow"],
        slug:'collect-lighting',
        size:["s","m","l","xl"]
    },
    {
        title : "Face Cleansing Cream",
        price: '120',
        category:'Furniture',
        img01:product_03_image_01,
        img02:product_03_image_02,
        colors:["white","red","yellow"],
        slug:'face-cleansing-cream',
        size:["s","m","l","xl"]
    },
    {
        title : "B&O Play A2 In Grey",
        price: '120',
        category:'Lighter',
        img01:product_04_image_01,
        img02:product_04_image_02,
        colors:["white","red","yellow"],
        slug:'b&o-play-a2-in-grey',
        size:["s","m","l","xl"]
    },
    {
        title : "Mirror",
        price: '120',
        category:'Decoration',
        img01:product_05_image_01,
        img02:product_05_image_02,
        colors:["white","red","yellow"],
        slug:'mirror',
        size:["s","m","l","xl"]
    },
    {
        title : "Watch Desk",
        price: '120',
        category:'Decoration',
        img01:product_06_image_01,
        img02:product_06_image_02,
        colors:["white","red","yellow"],
        slug:'watch-desk',
        size:["s","m","l","xl"]
    },
    {
        title : "Decor In House",
        price: '120',
        category:'Decoration',
        img01:product_07_image_01,
        img02:product_07_image_02,
        colors:["white","red","yellow"],
        slug:'decor-in-house',
        size:["s","m","l","xl"]
    },
    {
        title : "Chair Beige",
        price: '210',
        category:'Furniture',
        img01:product_08_image_01,
        img02:product_08_image_02,
        colors:["white","red","yellow"],
        slug:'chair-beige',
        size:["s","m","l","xl"]
    },
    {
        title : "Chair Grey",
        price: '210',
        category:'Furniture',
        img01:product_09_image_01,
        img02:product_09_image_02,
        colors:["white","red","yellow"],
        slug:'chair-grey',
        size:["s","m","l","xl"]
    },
    {
        title : "Chair blue",
        price: '210',
        category:'Furniture',
        img01:product_10_image_01,
        img02:product_10_image_02,
        colors:["white","red","yellow"],
        slug:'chair-blue',
        size:["s","m","l","xl"]
    }
    //10 products
]
const getAllProducts = () => products

const productData = {
    getAllProducts
}

export default productData