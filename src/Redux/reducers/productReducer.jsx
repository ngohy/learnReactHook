import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrProduct: [
        { id: 1, name: 'giay ', image: 'https://picsum.photos/200/200' }
    ],
    productDetail: {

    }
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setArrProduct: (state, action) => {
            const arrProduct = action.payload;
            state.arrProduct = arrProduct;
        },
        setProductDetailAction: (state, action) => {
            const productDetail = action.payload;
            state.productDetail = productDetail;
        }
    }
});

export const { setArrProduct,setProductDetailAction } = productReducer.actions

export default productReducer.reducer


//call api

export const getArrProduct = async (dispatch2) => {
    // try {
    //     let result = await axios.get('https://shop.cyberlearn.vn/api/Product');
    //     console.log(result.data.content);
    //     const action = setArrProduct(result.data.content);
    //     dispatch(action);
    // } catch (err) {
    //     console.log(err);
    // }

    /**
     * action1: {
            + type : 'productReducer/setArrProduct', 
            payload : data
        }
        action 2 :{
            action = (dispatch, getState)=>{
                //logic xu ly o day sau do so du lieu su dunng tham so dispatch de dua redux thuc hien tiep 1 logic khac
            }
        }
     */

    try {
        let result = await axios.get('https://shop.cyberlearn.vn/api/Product');
        console.log(result.data.content);
        const action = setArrProduct(result.data.content);
        dispatch2(action);
    } catch (err) {
        console.log(err);
    }
}

//closure function 

export const getProductDetailApi = (idProduct) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/product/getbyid?id=' + idProduct,
                method: 'GET'
            });
            console.log('Kết quả', result.data.content);
            //Sau khi lấy kết quả từ api về đưa vào state arrProduct
             const action1= setProductDetailAction(result.data.content);
             dispatch(action1);
        } catch (err) {
            console.log(err);
        }
    }
}