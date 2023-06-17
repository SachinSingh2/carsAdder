import {createSlice} from '@reduxjs/toolkit'
import { addCar } from './carslice'


const formSlice = createSlice({

    name:'form',
    initialState:{
        name:'',
        cost:0
    },reducers:{
        changeCar(state,action){
            state.name = action.payload
        },
        changeCost(state,action){
            state.cost = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCar , (state,action)=>{
            state.name = ''
            state.cost = 0
        })
    }
})

export const {changeCar , changeCost} = formSlice.actions
export const formReducer = formSlice.reducer