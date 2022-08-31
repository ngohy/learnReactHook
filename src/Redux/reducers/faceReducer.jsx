import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        { name: 'binh', content: 'haha' },
        { name: 'ton', content: 'hoho' }
    ],
}

const faceReducer = createSlice({
    name: 'faceReducer',
    initialState,
    reducers: {
        addComment: (state, { type, payload }) => {
            state.arrComment.push(payload);
            return state
        }
    }
});

export const { addComment } = faceReducer.actions

export default faceReducer.reducer