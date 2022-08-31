import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { up } from '../../Redux/reducers/numberReducer';

export default function DemoNumber(props) {
    // lay gia tri state tu redux store
    const number = useSelector(state => state.number);
    // dispatch connect voi redux store
    const dispatch = useDispatch();

    return (
        <div className='container mt-2'>
            <h3>Number: {number}</h3>
            <button
                className='btn btn-success'
                onClick={() => {
                    //tu tao ra action c1
                    // const action = {
                    //     type: "numberReducer/up",
                    //     payload: number + 1
                    // }

                    //action creator c2
                    const action = up(number + 1);
                    dispatch(action);
                }}
            >+</button>
        </div>
    )
}