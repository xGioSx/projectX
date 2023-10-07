import { configureStore } from "@reduxjs/toolkit"; 
import OfferedProductsReducer from "./offeredproducts";
import MostDemandProductsReducer from "./mostdemand";
import categoriesReducer from "./categories";
import latestProductsReducer from "./latestproducts";
import productsReducer from "./products";
import singlproductReducer from "./singlproduct";

const store = configureStore({
    reducer: {
        offeredProducts: OfferedProductsReducer,
        mostDemandProducts: MostDemandProductsReducer,
        categories: categoriesReducer,
        latestProducts: latestProductsReducer,
        products: productsReducer,
        singlProduct: singlproductReducer,
    }
})

export default store 