import moment from 'moment/moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileApi } from '../../Redux/reducers/userReducer';

export default function Profile() {
    const { userLogin } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const renderOrderHistory = () => {
        return userLogin.ordersHistory?.map((order, index) => {
            return <div key={index}>
                <h3>Order Detail {moment(order.date).format('DD/MM/YYYY hh:mm:ss A')}</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.orderDetail.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img className="w-25" src={item.image} alt='...' />
                                </td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.total}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        })
    }

    useEffect(() => {
        const action = getProfileApi();
        dispatch(action);
    }, [])

    return (
        <div className="container">
            <h3>Profile</h3>
            <div className="d-flex">
                <div className="w-25 me-5">
                    <div className="mt-2">
                        <img className="w-100" src={userLogin.avatar} alt='...' />
                        <p>email: {userLogin.email}</p>
                        <p>name: {userLogin.name}</p>
                    </div>
                </div>
                <div className="w-75">
                    <h3>Thong tin don hang</h3>
                    <div className="row">
                        {renderOrderHistory()}
                    </div>
                </div>
            </div>
        </div>
    )
}
