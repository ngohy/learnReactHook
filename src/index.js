import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Cấu hình browser router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import UseStateDemo from './pages/HooksDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HooksDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HooksDemo/UseCallBackDemo/UseCallBackDemo';
import Todo from './pages/Todo/Todo';
import UseMemoDemo from './pages/HooksDemo/UseMemo/UseMemoDemo';
import UseRefDemo from './pages/HooksDemo/UseRefDemo/UseRefDemo';
import { store } from './Redux/configStore';
import DemoNumber from './pages/UseRedux/DemoNumber';
import { DemoFaceApp } from './pages/UseRedux/DemoFaceApp/DemoFaceApp';
import DemoUseRoute from './pages/customHooks/DemoUseRoute';
import DemoAnimation from './pages/demoAnimation/DemoAnimation';
import Product from './pages/product/Product';
import DetailProduct from './pages/product/DetailProduct';
import Login from './pages/login/Login';
import Profile from './pages/login/Profile';

//tao ra 1 bien de quan ly chuyen huong
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import DemoHoc from './pages/demoHoc/DemoHoc';
import AdminTemplate from './templates/AdminTemplate';
import JobManager from './pages/Admin/JobManager/JobManager';
import ProductManager from './pages/Admin/ProductManager/ProductManager';
export const history = createBrowserHistory({ window });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* thay BrowserRouter thanh historyRouter */}
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='useeffect' element={<UseEffectDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='usememo' element={<UseMemoDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>
          <Route path='useredux' element={<DemoNumber />}></Route>
          <Route path='usereduxfaceapp' element={<DemoFaceApp />}></Route>
          <Route path='todo' element={<Todo />}></Route>
          <Route path='customhook' element={<DemoUseRoute />}></Route>
          <Route path='demoanimation' element={<DemoAnimation />}></Route>
          <Route path='home' element={<Product />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<DetailProduct />}></Route>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='demohoc' element={<DemoHoc />}></Route>



          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>
        <Route path='job' element={<AdminTemplate Component={<JobManager />} />} ></Route>
        <Route path='product' element={<AdminTemplate Component={<ProductManager />} />} ></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
