import { configureStore } from "@reduxjs/toolkit"; 
import OfferedProductsReducer from "./offeredproducts";
import MostDemandProductsReducer from "./mostdemand";
import categoriesReducer from "./categories";
import latestProductsReducer from "./latestproducts";
import productsReducer from "./products";
import singleproductReducer from "./singleproduct";
import registrationReducer from "./registration";
import signinReducer  from "./login";
import addtocartReducer from "./addtocart";
import mycartReducer from "./mycart";

const store = configureStore({
    reducer: {
        offeredProducts: OfferedProductsReducer,
        mostDemandProducts: MostDemandProductsReducer,
        categories: categoriesReducer,
        latestProducts: latestProductsReducer,
        products: productsReducer,
        singleProduct: singleproductReducer,
        registration: registrationReducer,
        signin: signinReducer,
        addtocart:addtocartReducer,
        myCart:mycartReducer,
    }
})

export default store 