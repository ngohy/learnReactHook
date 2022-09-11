import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInApi } from '../../Redux/reducers/userReducer';
export default function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('email kh dc bo trong').email('Email khong dung dinh dang'),
            password: Yup.string().required('password kh dc bo trong').min(3, 'password tu 3 den 32 ki ty').max(32, 'password tu 3 den 32 ki ty')
            // .matches(/hi/,'password co chu hi')
        }),
        onSubmit: (values) => {
            const action = signInApi(values);
            dispatch(action);
        }
    });

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Email</p>
                <input type="email" className="form-control"
                    id="email" name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email ? <p className="text text-danger">{formik.errors.email}</p> : ''}
            </div>
            <div className="form-group">
                <p>password</p>
                <input type="text" className="form-control"
                    id="password" name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password ? <p className="text text-danger">{formik.errors.password}</p> : ''}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success mt-2">Login</button>
            </div>
        </form>
    )
}
