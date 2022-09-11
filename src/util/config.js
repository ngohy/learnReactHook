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
    setCookie: (name , value , days = 30) => {
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
    ACCESS_TOKEN: 'accesstoken',
    USER_LOGIN: 'userlogin',
}


export const { ACCESS_TOKEN, USER_LOGIN, setStore, getStore, setStoreJSON, getStoreJSON, setCookie, getCookie } = configs;


