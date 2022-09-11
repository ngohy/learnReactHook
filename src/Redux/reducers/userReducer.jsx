import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, getStore, getStoreJSON, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';

const initialState = {
    userLogin: getStoreJSON(USER_LOGIN)
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserLogin: (state, { payload }) => {
            state.userLogin = payload;
        }

    }
});

export const { setUserLogin } = userReducer.actions

export default userReducer.reducer


/*.......action api (thunk)...... */

export const signInApi = (userLogin) => {
    //userLogin ={email:'', password:''}
    return async dispatch => {
        try {
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signin',
                method: 'POST',
                data: userLogin
            })

            //luu lai token
            setStore(ACCESS_TOKEN, result.data.content.accessToken);
            setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30)


            //luu lai Email
            setStoreJSON(USER_LOGIN, result.data.content)

            // console.log(result);
            // dua len userLogin thanh cong len reducer
            const action = setUserLogin(result.data.content);
            dispatch(action);

        } catch (err) {
            console.log(err)
        }
    }
}

export const getProfileApi = () => {
    return async dispatch => {
        try {
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
                method: 'POSt',
                headers: {
                    Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
                }
            })
            console.log('ket qua', result.data.content);
            const action= setUserLogin(result.data.content);
            dispatch(action);

        } catch (err) {
            console.log(err);
        }
    }
}