import axios from "axios";
import { history } from "../index";

export const configs = {
    setStore: (name, value) => {
        localStorage.setItem(name, value);
    },
    getStore: (name) => {
        return localStorage.getItem(name);
    },
    setStoreJSON: (name, values) => {
        //bien doi
        values = JSON.stringify(values);
        //luu vao store
        localStorage.setItem(name, values);
    },
    getStoreJSON: (name) => {
        if (localStorage.getItem(name)) {
            let content = JSON.parse(localStorage.getItem(name));
            return content;
        }
        return null;
    },
    setCookie: (name, value, days = 30) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    clearCookie:(name)=>{
        setCookie(name,'',-1)
    },
    clearLocalStorage:(name)=>{
        localStorage.removeItem(name);
    },
    ACCESS_TOKEN: 'accesstoken',
    USER_LOGIN: 'userlogin',
}


export const { ACCESS_TOKEN, USER_LOGIN, setStore, getStore, setStoreJSON, getStoreJSON, setCookie, getCookie,clearCookie,clearLocalStorage } = configs;


// cau hinh interceptor cho cac request vs response
export const http = axios.create({
    baseURL: `https://shop.cyberlearn.vn/api`,
    timeout: 6000,
})

// const TOKEN_CYBERSOFT=''

//cau hinh request
http.interceptors.request.use((configs) => {
    configs.headers = {
        ...configs.headers,
        ['Authorization']: `Bearer ${getStore(ACCESS_TOKEN)}`,
        // ['TokenCyberShop']: TOKEN_CYBERSOFT,
    }

    return configs

}, (err) => {
    return Promise.reject(err);
})


/*
  status code do back end 
  200(success): ket qua thanh cong
  201(created): tao ket qua thanh cong tren server
  400(badRequest): kh ton tai duong dan
  404(notFound): khong tim thay du lieu
  401(Un Authorize):khong co quen tri cap vao api
  403(Forbiden): token chu du quen tri cap 
  500(error): loi xay ra tren server (nguyen nhan do fontend hay back end tuy tinh huong)


*/

http.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, (err) => {
    console.log(err.response.status);
    if (err.response.status === 400 || err.response.status === 404) {
        history.push('/')
        return Promise.reject(err);
    }
    if (err.response.status === 401 || err.response.status === 403) {
        alert('token kh hop le');
        history.push('/login')
        return Promise.reject(err);
    }
})