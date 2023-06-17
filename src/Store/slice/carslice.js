import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:'cars',
    initialState:{
        data:[],
        searchTerm:''
    },
    reducers:{
        addCar(state,action){
            state.data.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        removeCar(state,action){
            const updated = state.data.filter((data)=>{

                return data.id !== action.payload

            })
            state.data = updated
        }
    }
})

export const {addCar , removeCar , changeSearchTerm} = carSlice.actions
export const carReducer = carSlice.reducer