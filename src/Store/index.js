import { configureStore } from "@reduxjs/toolkit";
import { addCar , removeCar , changeSearchTerm , carReducer } from "./slice/carslice";
import { changeCar , changeCost , formReducer } from "./slice/formSlice";
const store = configureStore({
reducer:{
    car : carReducer,
    form : formReducer
}
})

export {store , addCar , removeCar , changeSearchTerm , carReducer , changeCar , changeCost , formReducer  }