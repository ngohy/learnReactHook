import React, { useRef, useState } from 'react'

export default function UseRefDemo() {
    // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: '',
    // })
    const [number, setNumber] = useState(1);
    const userLoginRef = useRef({
        username: '',
        password: '',
    })

    console.log(userLoginRef.current)
    const handleChangeInput = (e) => {
        const { id, value } = e.target;
        userLoginRef.current[id] = value;
        console.log(userLoginRef.current)
        // setUserLogin({
        //     ...userLogin,
        //     [id]: value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="container mt-2" onSubmit={handleSubmit}>
            <h1>number:{number}</h1>
            <button className="btn btn-success" onClick={() => { setNumber(number + 1) }}>+</button>

            <h3>login</h3>
            <div className="form-group">
                <p>username</p>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <p>password</p>
                <input
                    type="text"
                    className="form-control"
                    id="password"
                    onChange={handleChangeInput} />
            </div>
            <div className="form-group mt-2">
                <button
                    type="submit"
                    className="btn btn-success"
                >Login</button>
            </div>
        </form>
    )
}

/*
    Giá trị useReft không thay đổi sau mỗi lần render. Ngoài việc sử dụng như DOM useRef còn dung trong việc lưu trữ các biến, hàm, mảng, object sau mỗi lần render
    dung de luu tru cac gia trij sau moi render d
    su dung khi: 
       + form kh co validation
       +load lai du lieu chinh sua
*/