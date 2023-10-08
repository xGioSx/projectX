import { configureStore } from "@reduxjs/toolkit"; 
import OfferedProductsReducer from "./offeredproducts";
import MostDemandProductsReducer from "./mostdemand";
import categoriesReducer from "./categories";
import latestProductsReducer from "./latestproducts";
import productsReducer from "./products";
import singleproductReducer from "./singleproduct";

const store = configureStore({
    reducer: {
        offeredProducts: OfferedProductsReducer,
        mostDemandProducts: MostDemandProductsReducer,
        categories: categoriesReducer,
        latestProducts: latestProductsReducer,
        products: productsReducer,
        singleProduct: singleproductReducer,
    }
})

export default store 