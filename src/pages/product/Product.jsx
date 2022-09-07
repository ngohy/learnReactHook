import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getArrProduct, setArrProduct } from '../../Redux/reducers/productReducer';

export default function Product() {

    const { arrProduct } = useSelector(state => state.productReducer);

    const dispatch = useDispatch();

    const renderProduct = () => {
        return arrProduct.map((item, index) => {
            return <div className='col-3 mt-2' key={index}>
                <div className='card'>
                    <img src={item.image} alt="..." />
                    <div className='card-body bg-dark text-light'>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        {/* <button className='btn btn-success'>View detail</button> */}
                        <NavLink to={`/detail/${item.id}`} className="btn btn-success">View detail</NavLink>
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        const action = getArrProduct;
        dispatch(action);
    }, [])

    return (
        <div className='container'>
            <h3>Shoes app</h3>
            <div className='row'>
                {renderProduct()}
            </div>

        </div>
    )
}
