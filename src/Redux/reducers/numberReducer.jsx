

import { createSlice } from '@reduxjs/toolkit'

const initialState = 1 //state mac dinh

const numberReducer = createSlice({
    name: 'numberReducer',
    initialState,
    reducers: {
        up: (state, action) => {
            state = action.payload;
            return state
        }
    }
});

export const { up } = numberReducer.actions

export default numberReducer.reducer


//rxslice