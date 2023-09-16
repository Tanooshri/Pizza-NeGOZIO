//products CRUD operation
import Product from "../models/product.js";
import doNetworkCall from "./api-client.js";

const productOperations={
  products:[],
  search(pizzaId){
    const product=this.products.find(currentProduct=>
       currentProduct.id==pizzaId
    );
    console.log(product);
    product.isFlagCart=true;
  },
  getProductsInCart(){
    const productInBasket=this.products.filter(product=>product.isFlagCart);
    return productInBasket
  },
    async loadProducts(){
    const pizzas=await doNetworkCall();
    //console.log(pizzas);
    const pizzaArray=pizzas['Vegetarian'];
    console.log(pizzas['Vegetarian']);
    const productsArray=pizzaArray.map(pizza => {
        const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description
            ,pizza.price,pizza.assets.product_details_page[0].url);
            return currentPizza;
    });
    console.log('pizzaArray is',productsArray);
    this.products=productsArray;
      return productsArray;//wrap in promise
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperations;
