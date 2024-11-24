import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

const adminSlice = createSlice ({
    name:"admin",
    initialState : initialState,
    reducers :{
        setadmin(state,value){
            state.user = value.payload;
        },
    }
})

export const {setadmin} = adminSlice.actions;
export default adminSlice.reducer;