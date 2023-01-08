import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null ,
    destination: null,
    travelTimeInfomration: null

}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        //state -> current state
        //action -> can get the dispatched data
        setOrigin:(state, action) =>{
            state.origin = action.payload;
        },
        setDestination: (state, action) =>{
            state.destination = action.payload
        },
        setTravelTimeInfomration: (state, action) =>{
            state.travelTimeInfomration = action.payload
        }
    }
})

export const {setDestination, setOrigin, setTravelTimeInfomration} = navSlice.actions

//selector
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInfomration;

export default navSlice.reducer

