import React, { useState } from 'react'
import useCookie from './useCookie';
// import { useEffect } from 'react';

const DemoUseRoute = () => {


    const [setCookie, getCookie] = useCookie('my-cookie', '');
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        setCookie('my_cookie',user,30);
    }

    return (
        <form className="container mt-2" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>nhap vao user</p>
                <input type="text" className="form-control" id="user" />
            </div>
            <div className="form-group mt-2">
                <p>nhap vao password</p>
                <input type="text" className="form-control" id="password" />
            </div><div className="form-group mt-2">
                <button type="submit" className="btn btn-success">login</button>
            </div>
        </form>
    );
};

export default DemoUseRoute;