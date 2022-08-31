// import { combineReducers, createStore } from "redux";

// const rootReducer = combineReducers({
//     number: (state = 1, action) => {
//         switch (action.type) {
//             case 'UP': {
//                 state= action.payload;
//                 return state;
//             }

//             default:
//                 return state;
//         }
//     }
// });


// export const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//toolkit

import { configureStore } from '@reduxjs/toolkit';
import faceReducer from './reducers/faceReducer';
import numberReducer from './reducers/numberReducer';

export const store = configureStore({
    reducer: {
        number: numberReducer,
        faceReducer: faceReducer
    }
})
